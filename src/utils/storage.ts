import { QUESTION_MAP } from '../data/questions';
import type {
  ActiveExamState,
  ExamAttempt,
  LawType,
  Question,
  QuestionOutcome,
  QuestionUsageMap,
  ScoreboardSummary,
  TopicBreakdownItem,
} from '../types/exam';

const KEY_NICKNAME = 'kktc_sinav_nickname_v1';
const KEY_ATTEMPTS = 'kktc_sinav_attempts_v1';
const KEY_ACTIVE_EXAM = 'kktc_sinav_active_session_v1';
const KEY_SEEN_QUESTIONS = 'kktc_sinav_seen_questions_v1';

interface StoredSeenHistory {
  cycleResetAt: number;
  entries: QuestionUsageMap;
}

let monotonicSeq = 0;
function nextTimestamp(): number {
  monotonicSeq += 1;
  return Date.now() * 1000 + (monotonicSeq % 1000);
}

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function getStoredNickname(): string {
  try {
    return localStorage.getItem(KEY_NICKNAME) ?? '';
  } catch {
    return '';
  }
}

export function saveNickname(nickname: string): void {
  const cleaned = nickname.trim();
  if (!cleaned) return;
  try {
    localStorage.setItem(KEY_NICKNAME, cleaned);
  } catch {
    // ignore storage quota errors
  }
}

export function getAttempts(): ExamAttempt[] {
  try {
    const parsed = safeParse<ExamAttempt[]>(localStorage.getItem(KEY_ATTEMPTS), []);
    if (!Array.isArray(parsed)) return [];
    return parsed.sort(
      (a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime(),
    );
  } catch {
    return [];
  }
}

export function saveAttempt(attempt: ExamAttempt): ExamAttempt[] {
  const existing = getAttempts().filter((item) => item.id !== attempt.id);
  const updated = [attempt, ...existing].slice(0, 200);
  try {
    localStorage.setItem(KEY_ATTEMPTS, JSON.stringify(updated));
  } catch {
    // ignore quota errors
  }
  return updated;
}

function readStoredSeenHistory(): StoredSeenHistory {
  try {
    const raw = safeParse<Partial<StoredSeenHistory> | null>(
      localStorage.getItem(KEY_SEEN_QUESTIONS),
      null,
    );
    if (!raw || typeof raw !== 'object') {
      return { cycleResetAt: 0, entries: {} };
    }
    return {
      cycleResetAt: typeof raw.cycleResetAt === 'number' ? raw.cycleResetAt : 0,
      entries: raw.entries && typeof raw.entries === 'object' ? raw.entries : {},
    };
  } catch {
    return { cycleResetAt: 0, entries: {} };
  }
}

function writeStoredSeenHistory(history: StoredSeenHistory): void {
  try {
    localStorage.setItem(KEY_SEEN_QUESTIONS, JSON.stringify(history));
  } catch {
    // ignore storage quota errors
  }
}

/**
 * Combines persisted question exposure counts with any historical attempts
 * recorded after the latest cycle reset, ensuring previously solved questions
 * are not repeated until all unseen questions have been shown.
 */
export function getMergedQuestionUsage(attempts: ExamAttempt[]): QuestionUsageMap {
  const stored = readStoredSeenHistory();
  const merged: QuestionUsageMap = {};

  for (const [id, entry] of Object.entries(stored.entries)) {
    if (entry && typeof entry.count === 'number' && entry.count > 0) {
      merged[id] = {
        count: entry.count,
        lastSeenAt: typeof entry.lastSeenAt === 'number' ? entry.lastSeenAt : 0,
      };
    }
  }

  for (const attempt of attempts) {
    const attemptMs = new Date(attempt.completedAt || attempt.startedAt).getTime();
    if (Number.isFinite(attemptMs) && attemptMs <= stored.cycleResetAt) {
      continue;
    }
    const attemptStamp = Number.isFinite(attemptMs) ? attemptMs * 1000 : 0;
    for (const outcome of attempt.outcomes) {
      const existing = merged[outcome.questionId];
      if (!existing) {
        merged[outcome.questionId] = {
          count: 1,
          lastSeenAt: attemptStamp,
        };
      } else if (existing.lastSeenAt < attemptStamp) {
        existing.lastSeenAt = attemptStamp;
      }
    }
  }

  return merged;
}

/**
 * Records drawn question IDs immediately when a quiz starts so that even
 * reloading or reopening the app mid-session advances the rotation cleanly.
 */
export function recordShownQuestions(questionIds: string[]): QuestionUsageMap {
  const stored = readStoredSeenHistory();
  const entries: QuestionUsageMap = { ...stored.entries };

  for (const id of questionIds) {
    if (!id) continue;
    const stamp = nextTimestamp();
    const prev = entries[id];
    entries[id] = {
      count: (prev?.count ?? 0) + 1,
      lastSeenAt: stamp,
    };
  }

  const nextHistory: StoredSeenHistory = {
    cycleResetAt: stored.cycleResetAt,
    entries,
  };
  writeStoredSeenHistory(nextHistory);
  return entries;
}

/**
 * Resets the question rotation cycle so all questions become unseen again
 * without erasing scoreboard records or topic error analysis.
 */
export function clearSeenQuestionHistory(): QuestionUsageMap {
  const fresh: StoredSeenHistory = {
    cycleResetAt: Date.now(),
    entries: {},
  };
  writeStoredSeenHistory(fresh);
  return {};
}

export function clearAllHistory(): void {
  try {
    localStorage.removeItem(KEY_ATTEMPTS);
    localStorage.removeItem(KEY_ACTIVE_EXAM);
    localStorage.removeItem(KEY_SEEN_QUESTIONS);
  } catch {
    // ignore
  }
}

export function getActiveExamState(): ActiveExamState | null {
  try {
    const state = safeParse<ActiveExamState | null>(localStorage.getItem(KEY_ACTIVE_EXAM), null);
    if (!state || !Array.isArray(state.questionIds) || state.questionIds.length === 0) {
      return null;
    }
    return state;
  } catch {
    return null;
  }
}

export function saveActiveExamState(state: ActiveExamState | null): void {
  try {
    if (!state) {
      localStorage.removeItem(KEY_ACTIVE_EXAM);
    } else {
      localStorage.setItem(KEY_ACTIVE_EXAM, JSON.stringify(state));
    }
  } catch {
    // ignore
  }
}

export function getDistinctNicknames(attempts: ExamAttempt[]): string[] {
  const seen = new Map<string, string>();
  for (const attempt of attempts) {
    const lower = attempt.nickname.trim().toLowerCase();
    if (lower && !seen.has(lower)) {
      seen.set(lower, attempt.nickname.trim());
    }
  }
  const stored = getStoredNickname().trim();
  if (stored && !seen.has(stored.toLowerCase())) {
    seen.set(stored.toLowerCase(), stored);
  }
  return Array.from(seen.values());
}

export function getScoreboardSummaries(attempts: ExamAttempt[]): ScoreboardSummary[] {
  const map = new Map<
    string,
    {
      displayNickname: string;
      attemptCount: number;
      bestScore: number;
      scoreSum: number;
      totalSolved: number;
      totalCorrect: number;
      totalWrong: number;
      totalBlank: number;
      lastPlayedAt: string;
    }
  >();

  for (const attempt of attempts) {
    const key = attempt.nickname.trim().toLowerCase();
    if (!key) continue;
    const current = map.get(key);
    if (!current) {
      map.set(key, {
        displayNickname: attempt.nickname.trim(),
        attemptCount: 1,
        bestScore: attempt.score,
        scoreSum: attempt.score,
        totalSolved: attempt.questionCount,
        totalCorrect: attempt.correctCount,
        totalWrong: attempt.wrongCount,
        totalBlank: attempt.blankCount,
        lastPlayedAt: attempt.completedAt,
      });
    } else {
      current.attemptCount += 1;
      current.bestScore = Math.max(current.bestScore, attempt.score);
      current.scoreSum += attempt.score;
      current.totalSolved += attempt.questionCount;
      current.totalCorrect += attempt.correctCount;
      current.totalWrong += attempt.wrongCount;
      current.totalBlank += attempt.blankCount;
      if (new Date(attempt.completedAt).getTime() > new Date(current.lastPlayedAt).getTime()) {
        current.lastPlayedAt = attempt.completedAt;
        current.displayNickname = attempt.nickname.trim();
      }
    }
  }

  return Array.from(map.values())
    .map((entry) => ({
      nickname: entry.displayNickname,
      attemptCount: entry.attemptCount,
      bestScore: entry.bestScore,
      averageScore: Math.round(entry.scoreSum / entry.attemptCount),
      totalSolved: entry.totalSolved,
      totalCorrect: entry.totalCorrect,
      totalWrong: entry.totalWrong,
      totalBlank: entry.totalBlank,
      accuracyRate:
        entry.totalSolved > 0 ? Math.round((entry.totalCorrect / entry.totalSolved) * 100) : 0,
      lastPlayedAt: entry.lastPlayedAt,
    }))
    .sort((a, b) => {
      if (b.bestScore !== a.bestScore) return b.bestScore - a.bestScore;
      if (b.averageScore !== a.averageScore) return b.averageScore - a.averageScore;
      return b.totalCorrect - a.totalCorrect;
    });
}

export interface MissedQuestionRecord {
  question: Question;
  attemptId: string;
  attemptDate: string;
  nickname: string;
  mode: ExamAttempt['mode'];
  outcome: QuestionOutcome;
}

export interface CumulativeTopicAnalysis {
  topics: TopicBreakdownItem[];
  missedByTopic: Record<string, MissedQuestionRecord[]>;
  topicErrorScores: Record<string, number>;
  totalErrorsAndBlanks: number;
  totalWrong: number;
  totalBlank: number;
}

export function getExamTopicBreakdown(outcomes: QuestionOutcome[]): TopicBreakdownItem[] {
  const map = new Map<string, TopicBreakdownItem>();

  for (const outcome of outcomes) {
    const existing = map.get(outcome.topic);
    if (!existing) {
      map.set(outcome.topic, {
        topic: outcome.topic,
        law: outcome.law,
        total: 1,
        correct: outcome.isCorrect ? 1 : 0,
        wrong: !outcome.isCorrect && !outcome.isBlank ? 1 : 0,
        blank: outcome.isBlank ? 1 : 0,
        errorCount: outcome.isCorrect ? 0 : 1,
        accuracyRate: outcome.isCorrect ? 100 : 0,
      });
    } else {
      existing.total += 1;
      if (outcome.isCorrect) {
        existing.correct += 1;
      } else if (outcome.isBlank) {
        existing.blank += 1;
        existing.errorCount += 1;
      } else {
        existing.wrong += 1;
        existing.errorCount += 1;
      }
      existing.accuracyRate = Math.round((existing.correct / existing.total) * 100);
    }
  }

  return Array.from(map.values()).sort((a, b) => {
    if (b.errorCount !== a.errorCount) return b.errorCount - a.errorCount;
    return a.accuracyRate - b.accuracyRate;
  });
}

export function computeTopicAnalysis(
  attempts: ExamAttempt[],
  filterNickname?: string,
  filterLaw?: LawType | 'all',
): CumulativeTopicAnalysis {
  const filteredAttempts = filterNickname
    ? attempts.filter(
        (a) => a.nickname.trim().toLowerCase() === filterNickname.trim().toLowerCase(),
      )
    : attempts;

  const map = new Map<string, TopicBreakdownItem>();
  const missedByTopic: Record<string, MissedQuestionRecord[]> = {};
  const topicErrorScores: Record<string, number> = {};
  let totalWrong = 0;
  let totalBlank = 0;

  for (const attempt of filteredAttempts) {
    for (const outcome of attempt.outcomes) {
      if (filterLaw && filterLaw !== 'all' && outcome.law !== filterLaw) {
        continue;
      }

      let bucket = map.get(outcome.topic);
      if (!bucket) {
        bucket = {
          topic: outcome.topic,
          law: outcome.law,
          total: 0,
          correct: 0,
          wrong: 0,
          blank: 0,
          errorCount: 0,
          accuracyRate: 0,
        };
        map.set(outcome.topic, bucket);
      }

      bucket.total += 1;
      if (outcome.isCorrect) {
        bucket.correct += 1;
      } else if (outcome.isBlank) {
        bucket.blank += 1;
        bucket.errorCount += 1;
        totalBlank += 1;
        topicErrorScores[outcome.topic] = (topicErrorScores[outcome.topic] ?? 0) + 1;
      } else {
        bucket.wrong += 1;
        bucket.errorCount += 1;
        totalWrong += 1;
        topicErrorScores[outcome.topic] = (topicErrorScores[outcome.topic] ?? 0) + 2;
      }

      if (!outcome.isCorrect) {
        const question = QUESTION_MAP[outcome.questionId];
        if (question) {
          if (!missedByTopic[outcome.topic]) {
            missedByTopic[outcome.topic] = [];
          }
          missedByTopic[outcome.topic].push({
            question,
            attemptId: attempt.id,
            attemptDate: attempt.completedAt,
            nickname: attempt.nickname,
            mode: attempt.mode,
            outcome,
          });
        }
      }
    }
  }

  const topics = Array.from(map.values())
    .map((item) => ({
      ...item,
      accuracyRate: item.total > 0 ? Math.round((item.correct / item.total) * 100) : 0,
    }))
    .sort((a, b) => {
      if (b.errorCount !== a.errorCount) return b.errorCount - a.errorCount;
      return a.accuracyRate - b.accuracyRate;
    });

  return {
    topics,
    missedByTopic,
    topicErrorScores,
    totalErrorsAndBlanks: totalWrong + totalBlank,
    totalWrong,
    totalBlank,
  };
}

export function formatDurationTurkish(seconds: number): string {
  const safe = Math.max(0, Math.floor(seconds));
  const mins = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export function formatDateTurkish(iso: string): string {
  try {
    return new Intl.DateTimeFormat('tr-TR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}
