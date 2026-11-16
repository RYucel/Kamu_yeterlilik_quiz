/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useMemo, useState } from 'react';
import { ErrorAnalysisView } from './components/ErrorAnalysisView';
import { ExamEntry } from './components/ExamEntry';
import { ExamResults } from './components/ExamResults';
import { ExamSession } from './components/ExamSession';
import { LegislationViewer } from './components/LegislationViewer';
import { OfflineIndicator } from './components/OfflineIndicator';
import { ScoreboardView } from './components/ScoreboardView';
import { TopNav } from './components/TopNav';
import { getSuggestedMinutes, QUESTION_MAP, selectExamQuestions } from './data/questions';
import type {
  ActiveExamState,
  AppView,
  ExamAttempt,
  ExamMode,
  Question,
  QuestionCount,
  QuestionOutcome,
  QuestionUsageMap,
  TopicScope,
} from './types/exam';
import {
  clearAllHistory,
  clearSeenQuestionHistory,
  computeTopicAnalysis,
  getActiveExamState,
  getAttempts,
  getDistinctNicknames,
  getMergedQuestionUsage,
  getStoredNickname,
  recordShownQuestions,
  saveActiveExamState,
  saveAttempt,
  saveNickname,
} from './utils/storage';

function generateAttemptId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `sinav-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export default function App() {
  const [nickname, setNickname] = useState<string>(() => getStoredNickname());
  const [attempts, setAttempts] = useState<ExamAttempt[]>(() => getAttempts());
  const [questionUsage, setQuestionUsage] = useState<QuestionUsageMap>(() =>
    getMergedQuestionUsage(getAttempts()),
  );
  const [activeSession, setActiveSession] = useState<ActiveExamState | null>(() =>
    getActiveExamState(),
  );
  const [inspectedAttempt, setInspectedAttempt] = useState<ExamAttempt | null>(null);
  const [view, setView] = useState<AppView>('entry');

  // Persist active session whenever it updates
  useEffect(() => {
    saveActiveExamState(activeSession);
  }, [activeSession]);

  const recentNicknames = useMemo(() => getDistinctNicknames(attempts), [attempts]);

  const cumulativeAnalysis = useMemo(
    () => computeTopicAnalysis(attempts, nickname || undefined),
    [attempts, nickname],
  );

  const weakTopicCount = useMemo(
    () => cumulativeAnalysis.topics.filter((t) => t.errorCount > 0).length,
    [cumulativeAnalysis.topics],
  );

  const activeQuestions: Question[] = useMemo(() => {
    if (!activeSession) return [];
    return activeSession.questionIds
      .map((id) => QUESTION_MAP[id])
      .filter((q): q is Question => Boolean(q));
  }, [activeSession]);

  const finalizeExam = useCallback(
    (sessionSnapshot: ActiveExamState) => {
      const questions = sessionSnapshot.questionIds
        .map((id) => QUESTION_MAP[id])
        .filter((q): q is Question => Boolean(q));

      if (questions.length === 0) {
        setActiveSession(null);
        setView('entry');
        return;
      }

      let correctCount = 0;
      let wrongCount = 0;
      let blankCount = 0;

      const outcomes: QuestionOutcome[] = questions.map((q) => {
        const selected = sessionSnapshot.answers[q.id] ?? null;
        const isBlank = selected === null || selected === undefined;
        const isCorrect = !isBlank && selected === q.correctIndex;
        if (isBlank) {
          blankCount += 1;
        } else if (isCorrect) {
          correctCount += 1;
        } else {
          wrongCount += 1;
        }
        return {
          questionId: q.id,
          law: q.law,
          topic: q.topic,
          selectedIndex: isBlank ? null : selected,
          correctIndex: q.correctIndex,
          isCorrect,
          isBlank,
          isFlagged: sessionSnapshot.flaggedIds.includes(q.id),
        };
      });

      const score = Math.round((correctCount / questions.length) * 100);
      const elapsedFromTimer =
        sessionSnapshot.mode === 'simulation'
          ? Math.max(1, sessionSnapshot.totalAllowedSeconds - sessionSnapshot.remainingSeconds)
          : Math.max(1, Math.round((Date.now() - sessionSnapshot.startedAtMs) / 1000));

      const completedAttempt: ExamAttempt = {
        id: sessionSnapshot.attemptId,
        nickname: sessionSnapshot.nickname,
        mode: sessionSnapshot.mode,
        questionCount: sessionSnapshot.questionCount,
        scope: sessionSnapshot.scope,
        startedAt: new Date(sessionSnapshot.startedAtMs).toISOString(),
        completedAt: new Date().toISOString(),
        durationSeconds: elapsedFromTimer,
        score,
        correctCount,
        wrongCount,
        blankCount,
        outcomes,
      };

      const updatedAttempts = saveAttempt(completedAttempt);
      setAttempts(updatedAttempts);
      setActiveSession(null);
      setInspectedAttempt(completedAttempt);
      setView('results');
    },
    [],
  );

  // Simulation mode countdown timer
  useEffect(() => {
    if (!activeSession || activeSession.mode !== 'simulation' || view !== 'session') {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSession((prev) => {
        if (!prev || prev.mode !== 'simulation') return prev;
        if (prev.remainingSeconds <= 1) {
          // Auto-finish when countdown reaches 0
          const expired = { ...prev, remainingSeconds: 0 };
          window.setTimeout(() => finalizeExam(expired), 0);
          return null;
        }
        return { ...prev, remainingSeconds: prev.remainingSeconds - 1 };
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [activeSession?.attemptId, activeSession?.mode, view, finalizeExam]);

  const handleStartExam = (config: {
    nickname: string;
    mode: ExamMode;
    questionCount: QuestionCount;
    scope: TopicScope;
  }) => {
    const cleanNick = config.nickname.trim();
    saveNickname(cleanNick);
    setNickname(cleanNick);

    const nickAnalysis = computeTopicAnalysis(attempts, cleanNick);
    const errorWeights =
      Object.keys(nickAnalysis.topicErrorScores).length > 0
        ? nickAnalysis.topicErrorScores
        : computeTopicAnalysis(attempts).topicErrorScores;

    const recentSessionIds = [
      ...(activeSession?.questionIds ?? []),
      ...(attempts[0]?.outcomes.map((o) => o.questionId) ?? []),
    ];

    const selected = selectExamQuestions(
      config.questionCount,
      config.scope,
      errorWeights,
      questionUsage,
      recentSessionIds,
    );
    const drawnIds = selected.map((q) => q.id);
    recordShownQuestions(drawnIds);
    setQuestionUsage(getMergedQuestionUsage(attempts));

    const allowedSeconds = getSuggestedMinutes(config.questionCount) * 60;

    const newSession: ActiveExamState = {
      attemptId: generateAttemptId(),
      nickname: cleanNick,
      mode: config.mode,
      questionCount: config.questionCount,
      scope: config.scope,
      questionIds: drawnIds,
      answers: {},
      flaggedIds: [],
      checkedStudyIds: [],
      currentIndex: 0,
      startedAtMs: Date.now(),
      totalAllowedSeconds: allowedSeconds,
      remainingSeconds: allowedSeconds,
    };

    setActiveSession(newSession);
    setInspectedAttempt(null);
    setView('session');
  };

  const handlePracticeWeakTopics = (overrideNickname?: string) => {
    const targetNick = (overrideNickname || nickname || recentNicknames[0] || 'Aday').trim();
    const nickAnalysis = computeTopicAnalysis(attempts, targetNick);
    const fallbackAnalysis = computeTopicAnalysis(attempts);
    const errorWeights =
      Object.keys(nickAnalysis.topicErrorScores).length > 0
        ? nickAnalysis.topicErrorScores
        : fallbackAnalysis.topicErrorScores;

    const errorTotal =
      nickAnalysis.totalErrorsAndBlanks > 0
        ? nickAnalysis.totalErrorsAndBlanks
        : fallbackAnalysis.totalErrorsAndBlanks;

    const chosenCount: QuestionCount = errorTotal <= 10 ? 10 : errorTotal <= 20 ? 20 : 30;
    const recentSessionIds = [
      ...(activeSession?.questionIds ?? []),
      ...(attempts[0]?.outcomes.map((o) => o.questionId) ?? []),
    ];
    const selected = selectExamQuestions(
      chosenCount,
      'weakness',
      errorWeights,
      questionUsage,
      recentSessionIds,
    );
    const drawnIds = selected.map((q) => q.id);
    recordShownQuestions(drawnIds);
    setQuestionUsage(getMergedQuestionUsage(attempts));

    saveNickname(targetNick);
    setNickname(targetNick);

    const allowedSeconds = getSuggestedMinutes(chosenCount) * 60;
    const newSession: ActiveExamState = {
      attemptId: generateAttemptId(),
      nickname: targetNick,
      mode: 'study',
      questionCount: chosenCount,
      scope: 'weakness',
      questionIds: drawnIds,
      answers: {},
      flaggedIds: [],
      checkedStudyIds: [],
      currentIndex: 0,
      startedAtMs: Date.now(),
      totalAllowedSeconds: allowedSeconds,
      remainingSeconds: allowedSeconds,
    };

    setActiveSession(newSession);
    setInspectedAttempt(null);
    setView('session');
  };

  const handleSelectAnswer = (questionId: string, optionIndex: number | null) => {
    setActiveSession((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        answers: {
          ...prev.answers,
          [questionId]: optionIndex,
        },
      };
    });
  };

  const handleToggleFlag = (questionId: string) => {
    setActiveSession((prev) => {
      if (!prev) return prev;
      const exists = prev.flaggedIds.includes(questionId);
      return {
        ...prev,
        flaggedIds: exists
          ? prev.flaggedIds.filter((id) => id !== questionId)
          : [...prev.flaggedIds, questionId],
      };
    });
  };

  const handleCheckStudyAnswer = (questionId: string) => {
    setActiveSession((prev) => {
      if (!prev) return prev;
      if (prev.checkedStudyIds.includes(questionId)) return prev;
      return {
        ...prev,
        checkedStudyIds: [...prev.checkedStudyIds, questionId],
      };
    });
  };

  const handleChangeIndex = (index: number) => {
    setActiveSession((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        currentIndex: Math.min(Math.max(0, index), prev.questionIds.length - 1),
      };
    });
  };

  return (
    <div className="min-h-[100dvh] overflow-x-hidden bg-[#F7F4EC] text-[#171A21]">
      <OfflineIndicator />
      <TopNav
        activeView={view}
        isInActiveExam={Boolean(activeSession)}
        onNavigate={(nextView) => {
          setView(nextView);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <main className={view === 'session' ? 'pb-6' : 'pb-24 md:pb-12'}>
        {view === 'entry' && (
          <ExamEntry
            initialNickname={nickname}
            recentNicknames={recentNicknames}
            weakTopicCount={weakTopicCount}
            totalRecordedErrors={cumulativeAnalysis.totalErrorsAndBlanks}
            savedActiveSession={activeSession}
            questionUsage={questionUsage}
            onResetQuestionCycle={() => {
              const reset = clearSeenQuestionHistory();
              setQuestionUsage(reset);
            }}
            onStartExam={handleStartExam}
            onResumeSession={() => setView('session')}
            onDiscardSession={() => setActiveSession(null)}
            onOpenLegislation={() => setView('legislation')}
          />
        )}

        {view === 'session' && activeSession && activeQuestions.length > 0 && (
          <ExamSession
            session={activeSession}
            questions={activeQuestions}
            onSelectAnswer={handleSelectAnswer}
            onToggleFlag={handleToggleFlag}
            onCheckStudyAnswer={handleCheckStudyAnswer}
            onChangeIndex={handleChangeIndex}
            onFinishExam={() => finalizeExam(activeSession)}
            onAbandonExam={() => setView('entry')}
          />
        )}

        {view === 'results' && inspectedAttempt && (
          <ExamResults
            attempt={inspectedAttempt}
            onStartNewExam={() => setView('entry')}
            onPracticeWeakTopics={() => handlePracticeWeakTopics(inspectedAttempt.nickname)}
            onOpenScoreboard={() => setView('scoreboard')}
          />
        )}

        {view === 'analysis' && (
          <ErrorAnalysisView
            attempts={attempts}
            nicknames={recentNicknames}
            activeNickname={nickname}
            onPracticeWeakTopics={handlePracticeWeakTopics}
            onStartNewExam={() => setView('entry')}
          />
        )}

        {view === 'scoreboard' && (
          <ScoreboardView
            attempts={attempts}
            onInspectAttempt={(attempt) => {
              setInspectedAttempt(attempt);
              setView('results');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onClearHistory={() => {
              clearAllHistory();
              setAttempts([]);
              setQuestionUsage({});
              setActiveSession(null);
              setInspectedAttempt(null);
            }}
            onStartNewExam={() => setView('entry')}
          />
        )}

        {view === 'legislation' && <LegislationViewer />}
      </main>
    </div>
  );
}
