import { CheckSquare, Flag } from 'lucide-react';
import type { ExamMode, Question } from '../types/exam';

interface OpticalSheetProps {
  nickname: string;
  mode: ExamMode;
  questions: Question[];
  answers: Record<string, number | null>;
  flaggedIds: string[];
  checkedStudyIds: string[];
  currentIndex: number;
  onJumpToQuestion: (index: number) => void;
  onSelectAnswer: (questionId: string, optionIndex: number) => void;
  onRequestFinish: () => void;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'] as const;

export function OpticalSheet({
  nickname,
  mode,
  questions,
  answers,
  flaggedIds,
  checkedStudyIds,
  currentIndex,
  onJumpToQuestion,
  onSelectAnswer,
  onRequestFinish,
}: OpticalSheetProps) {
  const answeredCount = questions.filter(
    (q) => answers[q.id] !== null && answers[q.id] !== undefined,
  ).length;
  const blankCount = questions.length - answeredCount;
  const flaggedCount = flaggedIds.length;

  return (
    <aside
      aria-label="Optik Cevap Kağıdı"
      className="rounded-md border border-[#D5CFC0] bg-white exam-paper-shadow"
    >
      {/* Optical Form Crimson Header */}
      <div className="border-b-2 border-[#9A2230] bg-[#9A2230]/5 px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#9A2230]">
              KKTC KHK OPTİK CEVAP KAĞIDI
            </p>
            <p className="mt-0.5 text-sm font-semibold text-[#171A21] truncate max-w-[190px]">
              Aday: {nickname}
            </p>
          </div>
          <div className="rounded border border-[#9A2230]/30 bg-white px-2 py-1 text-right">
            <span className="block font-mono text-[10px] text-[#4E5563]">DURUM</span>
            <span className="font-mono text-xs font-bold text-[#171A21] tabular-nums">
              {answeredCount}/{questions.length}
            </span>
          </div>
        </div>
      </div>

      {/* Summary Counts */}
      <div className="grid grid-cols-3 divide-x divide-[#E7E2D4] border-b border-[#E7E2D4] bg-[#F7F4EC]/60 text-center font-mono text-[11px]">
        <div className="py-2">
          <span className="block text-[#4E5563]">Dolu</span>
          <span className="font-bold text-[#19345E] tabular-nums">{answeredCount}</span>
        </div>
        <div className="py-2">
          <span className="block text-[#4E5563]">Boş</span>
          <span className="font-bold text-[#171A21] tabular-nums">{blankCount}</span>
        </div>
        <div className="py-2">
          <span className="block text-[#4E5563]">İşaretli</span>
          <span className="font-bold text-[#A66A14] tabular-nums">{flaggedCount}</span>
        </div>
      </div>

      {/* Optical Bubbles Grid */}
      <div className="max-h-[420px] overflow-y-auto px-3 py-2.5">
        <div className="space-y-1">
          {questions.map((q, idx) => {
            const selected = answers[q.id];
            const isCurrent = idx === currentIndex;
            const isFlagged = flaggedIds.includes(q.id);
            const isStudyChecked = mode === 'study' && checkedStudyIds.includes(q.id);

            return (
              <div
                key={q.id}
                className={`flex items-center justify-between rounded px-2 py-1 transition-colors ${
                  isCurrent
                    ? 'bg-[#19345E]/10 ring-1 ring-[#19345E]/35'
                    : idx % 2 === 0
                      ? 'bg-white'
                      : 'bg-[#F7F4EC]/45'
                }`}
              >
                <button
                  type="button"
                  onClick={() => onJumpToQuestion(idx)}
                  className="flex min-h-8 min-w-[46px] items-center gap-1 text-left font-mono text-xs font-semibold text-[#171A21] cursor-pointer tabular-nums"
                  title={`${idx + 1}. soruya git`}
                >
                  <span className="w-5 text-right">{idx + 1}.</span>
                  {isFlagged && (
                    <Flag
                      className="h-3 w-3 shrink-0 fill-[#A66A14] text-[#A66A14]"
                      aria-label="İşaretli"
                    />
                  )}
                </button>

                <div className="flex items-center gap-1.5">
                  {OPTION_LETTERS.map((letter, optIdx) => {
                    const isFilled = selected === optIdx;
                    let bubbleClass =
                      'border-[#9A2230]/45 bg-white text-[#9A2230] hover:border-[#9A2230] hover:bg-[#9A2230]/8';

                    if (isStudyChecked) {
                      if (optIdx === q.correctIndex) {
                        bubbleClass = 'border-[#1E6B43] bg-[#1E6B43] text-white';
                      } else if (isFilled && optIdx !== q.correctIndex) {
                        bubbleClass = 'border-[#9A2230] bg-[#9A2230] text-white';
                      } else {
                        bubbleClass = 'border-[#D5CFC0] bg-white text-[#7E8594]';
                      }
                    } else if (isFilled) {
                      bubbleClass = 'border-[#171A21] bg-[#171A21] text-white';
                    }

                    return (
                      <button
                        key={letter}
                        type="button"
                        disabled={isStudyChecked}
                        onClick={() => {
                          onSelectAnswer(q.id, optIdx);
                          onJumpToQuestion(idx);
                        }}
                        aria-label={`Soru ${idx + 1} Seçenek ${letter}`}
                        aria-pressed={isFilled}
                        className={`flex h-7 w-7 items-center justify-center rounded-full border font-mono text-[11px] font-bold transition-colors ${
                          isStudyChecked ? 'cursor-default' : 'cursor-pointer'
                        } ${bubbleClass}`}
                      >
                        {letter}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Finish Exam CTA */}
      <div className="border-t border-[#E7E2D4] p-3">
        <button
          type="button"
          onClick={onRequestFinish}
          className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-[#19345E] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#122645] cursor-pointer"
        >
          <CheckSquare className="h-4 w-4" />
          <span>Sınavı Bitir ve Değerlendir</span>
        </button>
      </div>
    </aside>
  );
}
