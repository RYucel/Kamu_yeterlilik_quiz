import type {
  LawType,
  Question,
  QuestionCount,
  QuestionUsageMap,
  TopicScope,
} from '../types/exam';
import { anayasaQuestions } from './anayasaQuestions';
import { kgyQuestions } from './kgyQuestions';

export const ALL_QUESTIONS: Question[] = [...kgyQuestions, ...anayasaQuestions];

export const QUESTION_MAP: Record<string, Question> = Object.fromEntries(
  ALL_QUESTIONS.map((q) => [q.id, q]),
);

export const KGY_TOPICS: string[] = Array.from(new Set(kgyQuestions.map((q) => q.topic)));
export const ANAYASA_TOPICS: string[] = Array.from(new Set(anayasaQuestions.map((q) => q.topic)));

export const ALL_TOPIC_METADATA: Array<{ topic: string; law: LawType; count: number }> = [
  ...KGY_TOPICS.map((topic) => ({
    topic,
    law: 'kgy' as const,
    count: kgyQuestions.filter((q) => q.topic === topic).length,
  })),
  ...ANAYASA_TOPICS.map((topic) => ({
    topic,
    law: 'anayasa' as const,
    count: anayasaQuestions.filter((q) => q.topic === topic).length,
  })),
];

function shuffleArray<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

export interface ScopePoolStats {
  totalInScope: number;
  unseenCount: number;
  seenCount: number;
}

export function getScopePoolStats(
  scope: TopicScope,
  questionUsage: QuestionUsageMap = {},
): ScopePoolStats {
  const pool =
    scope === 'kgy'
      ? kgyQuestions
      : scope === 'anayasa'
        ? anayasaQuestions
        : ALL_QUESTIONS;

  let unseenCount = 0;
  for (const q of pool) {
    if ((questionUsage[q.id]?.count ?? 0) === 0) {
      unseenCount += 1;
    }
  }

  return {
    totalInScope: pool.length,
    unseenCount,
    seenCount: pool.length - unseenCount,
  };
}

/**
 * Selects questions with an unseen-first rotation policy so every new app open
 * or consecutive exam asks fresh questions before any repetition occurs.
 * When a full cycle completes, least-frequently and oldest-seen questions
 * (excluding the immediately previous session whenever possible) rotate in
 * balanced topic order.
 */
export function selectExamQuestions(
  count: QuestionCount,
  scope: TopicScope,
  topicErrorScores: Record<string, number> = {},
  questionUsage: QuestionUsageMap = {},
  excludeIds: string[] = [],
): Question[] {
  const excludeSet = new Set(excludeIds);

  if (scope === 'kgy') {
    return sampleBalancedByTopic(kgyQuestions, count, questionUsage, excludeSet);
  }

  if (scope === 'anayasa') {
    return sampleBalancedByTopic(anayasaQuestions, count, questionUsage, excludeSet);
  }

  if (scope === 'weakness') {
    const scoredTopics = Object.entries(topicErrorScores).filter(([, err]) => err > 0);
    if (scoredTopics.length > 0) {
      return sampleWeaknessPool(ALL_QUESTIONS, count, topicErrorScores, questionUsage, excludeSet);
    }
  }

  // Default 'mixed': 50% KGY + 50% Anayasa, balanced across topics inside each law
  const half = Math.floor(count / 2);
  const remainder = count - half * 2;
  const kgyPick = sampleBalancedByTopic(
    kgyQuestions,
    half + remainder,
    questionUsage,
    excludeSet,
  );
  const anayasaPick = sampleBalancedByTopic(anayasaQuestions, half, questionUsage, excludeSet);
  return shuffleArray([...kgyPick, ...anayasaPick]);
}

function compareUsagePriority(
  a: Question,
  b: Question,
  questionUsage: QuestionUsageMap,
  excludeSet: Set<string>,
  jitter: Map<string, number>,
): number {
  const countA = questionUsage[a.id]?.count ?? 0;
  const countB = questionUsage[b.id]?.count ?? 0;
  const unseenA = countA === 0 ? 0 : 1;
  const unseenB = countB === 0 ? 0 : 1;
  if (unseenA !== unseenB) return unseenA - unseenB;

  const exclA = excludeSet.has(a.id) ? 1 : 0;
  const exclB = excludeSet.has(b.id) ? 1 : 0;
  if (exclA !== exclB) return exclA - exclB;

  if (countA !== countB) return countA - countB;

  const lastA = questionUsage[a.id]?.lastSeenAt ?? 0;
  const lastB = questionUsage[b.id]?.lastSeenAt ?? 0;
  if (lastA !== lastB) return lastA - lastB;

  return (jitter.get(a.id) ?? 0) - (jitter.get(b.id) ?? 0);
}

function sampleBalancedByTopic(
  pool: Question[],
  targetCount: number,
  questionUsage: QuestionUsageMap,
  excludeSet: Set<string>,
): Question[] {
  const jitter = new Map<string, number>();
  for (const q of pool) {
    jitter.set(q.id, Math.random());
  }

  const unseenByTopic = new Map<string, Question[]>();
  const seenByTopic = new Map<string, Question[]>();
  const allTopicsSet = new Set<string>();

  for (const q of pool) {
    allTopicsSet.add(q.topic);
    const seenCount = questionUsage[q.id]?.count ?? 0;
    if (seenCount === 0) {
      const list = unseenByTopic.get(q.topic) ?? [];
      list.push(q);
      unseenByTopic.set(q.topic, list);
    } else {
      const list = seenByTopic.get(q.topic) ?? [];
      list.push(q);
      seenByTopic.set(q.topic, list);
    }
  }

  for (const [topic, list] of unseenByTopic.entries()) {
    unseenByTopic.set(topic, shuffleArray(list));
  }

  for (const [topic, list] of seenByTopic.entries()) {
    list.sort((a, b) => compareUsagePriority(a, b, questionUsage, excludeSet, jitter));
    // Reverse so pop() draws highest-priority (least/oldest seen) first in O(1)
    seenByTopic.set(topic, list.reverse());
  }

  const topics = shuffleArray(Array.from(allTopicsSet));
  const selected: Question[] = [];

  // Pass 1: Strictly draw unseen questions via round-robin across topics first
  let added = true;
  while (selected.length < targetCount && added) {
    added = false;
    for (const topic of topics) {
      if (selected.length >= targetCount) break;
      const bucket = unseenByTopic.get(topic);
      if (bucket && bucket.length > 0) {
        const next = bucket.pop();
        if (next) {
          selected.push(next);
          added = true;
        }
      }
    }
  }

  // Pass 2: If unseen pool is exhausted, rotate seen questions (non-recent, oldest first)
  if (selected.length < targetCount) {
    const seenTopics = shuffleArray(Array.from(allTopicsSet));
    added = true;
    while (selected.length < targetCount && added) {
      added = false;
      for (const topic of seenTopics) {
        if (selected.length >= targetCount) break;
        const bucket = seenByTopic.get(topic);
        if (bucket && bucket.length > 0) {
          const next = bucket.pop();
          if (next) {
            selected.push(next);
            added = true;
          }
        }
      }
    }
  }

  return shuffleArray(selected);
}

function sampleWeaknessPool(
  pool: Question[],
  targetCount: number,
  topicErrorScores: Record<string, number>,
  questionUsage: QuestionUsageMap,
  excludeSet: Set<string>,
): Question[] {
  const jitter = new Map<string, number>();
  for (const q of pool) {
    jitter.set(q.id, Math.random());
  }

  const ranked = [...pool].sort((a, b) => {
    const exclA = excludeSet.has(a.id) ? 1 : 0;
    const exclB = excludeSet.has(b.id) ? 1 : 0;
    if (exclA !== exclB) return exclA - exclB;

    const errA = topicErrorScores[a.topic] ?? 0;
    const errB = topicErrorScores[b.topic] ?? 0;
    const hasErrA = errA > 0 ? 0 : 1;
    const hasErrB = errB > 0 ? 0 : 1;
    if (hasErrA !== hasErrB) return hasErrA - hasErrB;

    const usageA = questionUsage[a.id]?.count ?? 0;
    const usageB = questionUsage[b.id]?.count ?? 0;
    const unseenA = usageA === 0 ? 0 : 1;
    const unseenB = usageB === 0 ? 0 : 1;
    if (unseenA !== unseenB) return unseenA - unseenB;

    if (errA !== errB) return errB - errA;
    if (usageA !== usageB) return usageA - usageB;

    const lastA = questionUsage[a.id]?.lastSeenAt ?? 0;
    const lastB = questionUsage[b.id]?.lastSeenAt ?? 0;
    if (lastA !== lastB) return lastA - lastB;

    return (jitter.get(a.id) ?? 0) - (jitter.get(b.id) ?? 0);
  });

  // Take a slightly wider candidate slice from the top priority tier for fresh variety
  const windowSize = Math.min(ranked.length, Math.max(targetCount, targetCount + 4));
  const picked = shuffleArray(ranked.slice(0, windowSize)).slice(0, targetCount);
  return shuffleArray(picked);
}

export function getSuggestedMinutes(count: QuestionCount): number {
  if (count === 10) return 15;
  if (count === 20) return 30;
  return 45;
}
