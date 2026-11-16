export type LawType = 'kgy' | 'anayasa';

export type ExamMode = 'simulation' | 'study';

export type QuestionCount = 10 | 20 | 30;

export type TopicScope = 'mixed' | 'kgy' | 'anayasa' | 'weakness';

export type AppView = 'entry' | 'session' | 'results' | 'analysis' | 'scoreboard' | 'legislation';

export interface Citation {
  lawName: string;
  lawShort: string;
  article: string;
  clause?: string;
  page: number;
  exactQuote: string;
}

export interface Question {
  id: string;
  law: LawType;
  topic: string;
  stem: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  studyNote: string;
  citation: Citation;
}

export interface QuestionOutcome {
  questionId: string;
  law: LawType;
  topic: string;
  selectedIndex: number | null;
  correctIndex: number;
  isCorrect: boolean;
  isBlank: boolean;
  isFlagged: boolean;
}

export interface TopicBreakdownItem {
  topic: string;
  law: LawType;
  total: number;
  correct: number;
  wrong: number;
  blank: number;
  errorCount: number;
  accuracyRate: number;
}

export interface ExamAttempt {
  id: string;
  nickname: string;
  mode: ExamMode;
  questionCount: QuestionCount;
  scope: TopicScope;
  startedAt: string;
  completedAt: string;
  durationSeconds: number;
  score: number;
  correctCount: number;
  wrongCount: number;
  blankCount: number;
  outcomes: QuestionOutcome[];
}

export interface ScoreboardSummary {
  nickname: string;
  attemptCount: number;
  bestScore: number;
  averageScore: number;
  totalSolved: number;
  totalCorrect: number;
  totalWrong: number;
  totalBlank: number;
  accuracyRate: number;
  lastPlayedAt: string;
}

export interface ActiveExamState {
  attemptId: string;
  nickname: string;
  mode: ExamMode;
  questionCount: QuestionCount;
  scope: TopicScope;
  questionIds: string[];
  answers: Record<string, number | null>;
  flaggedIds: string[];
  checkedStudyIds: string[];
  currentIndex: number;
  startedAtMs: number;
  totalAllowedSeconds: number;
  remainingSeconds: number;
}

export interface QuestionUsageEntry {
  count: number;
  lastSeenAt: number;
}

export type QuestionUsageMap = Record<string, QuestionUsageEntry>;

