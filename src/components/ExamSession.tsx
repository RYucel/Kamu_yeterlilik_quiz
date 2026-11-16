import {
  AlertCircle,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eraser,
  Flag,
  Grid,
  X,
  XCircle,
} from 'lucide-react';
import { useState } from 'react';
import type { ActiveExamState, Question } from '../types/exam';
import { formatDurationTurkish } from '../utils/storage';
import { OpticalSheet } from './OpticalSheet';

interface ExamSessionProps {
  session: ActiveExamState;
  questions: Question[];
  onSelectAnswer: (questionId: string, optionIndex: number | null) => void;
  onToggleFlag: (questionId: string) => void;
  onCheckStudyAnswer: (questionId: string) => void;
  onChangeIndex: (index: number) => void;
  onFinishExam: () => void;
  onAbandonExam: () => void;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'] as const;

export function ExamSession({
  session,
  questions,
  onSelectAnswer,
  onToggleFlag,
  onCheckStudyAnswer,
  onChangeIndex,
  onFinishExam,
  onAbandonExam,
}: ExamSessionProps) {
  const [showMobileOptical, setShowMobileOptical] = useState(false);
  const [showFinishModal, setShowFinishModal] = useState(false);
  const [showAbandonModal, setShowAbandonModal] = useState(false);

  const safeIndex = Math.min(Math.max(0, session.currentIndex), questions.length - 1);
  const currentQuestion = questions[safeIndex];

  if (!currentQuestion) {
    return null;
  }

  const selectedIndex = session.answers[currentQuestion.id] ?? null;
  const isFlagged = session.flaggedIds.includes(currentQuestion.id);
  const isStudyMode = session.mode === 'study';
  const isCheckedInStudy = isStudyMode && session.checkedStudyIds.includes(currentQuestion.id);

  const answeredCount = questions.filter(
    (q) => session.answers[q.id] !== null && session.answers[q.id] !== undefined,
  ).length;
  const blankCount = questions.length - answeredCount;
  const isLowTime = session.mode === 'simulation' && session.remainingSeconds <= 120;

  return (
    <div className="mx-auto max-w-6xl px-3.5 py-4 pb-24 sm:px-6 sm:py-5 lg:pb-5">
      {/* Top Exam Status Strip */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2.5 rounded-md border border-[#D5CFC0] bg-white px-3.5 py-2.5 exam-paper-shadow sm:mb-5 sm:gap-3 sm:px-4 sm:py-3">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 sm:gap-x-4">
          <div className="min-w-0">
            <span className="block font-mono text-[10px] font-semibold uppercase tracking-wider text-[#4E5563]">
              Aday
            </span>
            <span className="block max-w-[120px] truncate text-xs font-semibold text-[#171A21] sm:max-w-none sm:text-sm">
              {session.nickname}
            </span>
          </div>
          <div className="hidden h-7 w-px bg-[#E7E2D4] sm:block" />
          <div className="hidden sm:block">
            <span className="block font-mono text-[10px] font-semibold uppercase tracking-wider text-[#4E5563]">
              Uygulama Modu
            </span>
            <span className="text-xs font-semibold text-[#19345E]">
              {isStudyMode ? 'Çalışma Modu (Açıklamalı)' : 'Gerçek Sınav Simülasyonu'}
            </span>
          </div>
          <div className="h-6 w-px bg-[#E7E2D4]" />
          <div>
            <span className="block font-mono text-[10px] font-semibold uppercase tracking-wider text-[#4E5563]">
              Soru
            </span>
            <span className="font-mono text-xs font-semibold text-[#171A21] tabular-nums">
              {safeIndex + 1}/{questions.length} · {answeredCount} Dolu
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {session.mode === 'simulation' && (
            <div
              className={`inline-flex min-h-10 items-center gap-1 rounded border px-2.5 py-1.5 font-mono text-xs font-bold tabular-nums sm:gap-1.5 sm:px-3 sm:text-sm ${
                isLowTime
                  ? 'border-[#9A2230] bg-[#9A2230]/10 text-[#9A2230]'
                  : 'border-[#D5CFC0] bg-[#F7F4EC] text-[#171A21]'
              }`}
            >
              <Clock className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
              <span>{formatDurationTurkish(session.remainingSeconds)}</span>
            </div>
          )}

          {/* Mobile Optical Toggle */}
          <button
            type="button"
            onClick={() => setShowMobileOptical(true)}
            className="inline-flex min-h-10 items-center gap-1 rounded-md border border-[#9A2230] bg-[#9A2230]/8 px-2.5 py-1.5 text-xs font-semibold text-[#9A2230] lg:hidden cursor-pointer sm:px-3"
          >
            <Grid className="h-4 w-4" />
            <span className="tabular-nums">
              Optik ({answeredCount}/{questions.length})
            </span>
          </button>

          <button
            type="button"
            onClick={() => setShowAbandonModal(true)}
            className="inline-flex min-h-10 items-center rounded-md border border-[#D5CFC0] bg-white px-2.5 py-1.5 text-xs font-medium text-[#4E5563] hover:bg-[#F7F4EC] hover:text-[#171A21] cursor-pointer sm:px-3"
          >
            Çıkış
          </button>
        </div>
      </div>

      {/* Main Split Grid: Left Booklet (65%) + Right Optical Sheet (35%) */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
        {/* Question Booklet Card */}
        <div className="lg:col-span-8">
          <article className="rounded-md border border-[#D5CFC0] bg-white exam-paper-shadow">
            {/* Booklet Question Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E7E2D4] bg-[#F7F4EC]/60 px-4 py-3 sm:px-7 sm:py-3.5">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="font-mono text-sm font-bold text-[#19345E] tabular-nums">
                  SORU {safeIndex + 1}
                </span>
                <span className="text-[#D5CFC0]">|</span>
                <span className="font-mono text-xs font-semibold text-[#4E5563]">
                  {currentQuestion.citation.lawShort}
                </span>
                <span className="hidden text-[#D5CFC0] sm:inline">·</span>
                <span className="text-xs font-medium text-[#4E5563]">{currentQuestion.topic}</span>
              </div>

              <button
                type="button"
                onClick={() => onToggleFlag(currentQuestion.id)}
                aria-pressed={isFlagged}
                className={`inline-flex min-h-9 items-center gap-1.5 rounded border px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer ${
                  isFlagged
                    ? 'border-[#A66A14] bg-[#A66A14]/12 text-[#704609]'
                    : 'border-[#D5CFC0] bg-white text-[#4E5563] hover:border-[#A66A14]'
                }`}
              >
                <Flag className={`h-3.5 w-3.5 ${isFlagged ? 'fill-[#A66A14]' : ''}`} />
                <span>{isFlagged ? 'İşaretlendi' : 'İşaretle'}</span>
              </button>
            </div>

            {/* Question Stem */}
            <div className="px-4 py-5 sm:px-7 sm:py-6">
              <p className="font-serif text-[16px] font-medium leading-[1.65] text-[#171A21] sm:text-[19px]">
                {currentQuestion.stem}
              </p>

              {/* 4 Options (A) - (D) */}
              <div className="mt-6 space-y-3" role="radiogroup" aria-label="Soru seçenekleri">
                {currentQuestion.options.map((optText, optIdx) => {
                  const letter = OPTION_LETTERS[optIdx];
                  const isSelected = selectedIndex === optIdx;
                  const isCorrectOpt = optIdx === currentQuestion.correctIndex;

                  let rowClass =
                    'border-[#D5CFC0] bg-white text-[#171A21] hover:border-[#19345E] hover:bg-[#F7F4EC]/70';
                  let badgeClass = 'border-[#D5CFC0] bg-[#F7F4EC] text-[#171A21]';

                  if (isCheckedInStudy) {
                    if (isCorrectOpt) {
                      rowClass = 'border-[#1E6B43] bg-[#1E6B43]/8 text-[#171A21]';
                      badgeClass = 'border-[#1E6B43] bg-[#1E6B43] text-white';
                    } else if (isSelected && !isCorrectOpt) {
                      rowClass = 'border-[#9A2230] bg-[#9A2230]/8 text-[#171A21]';
                      badgeClass = 'border-[#9A2230] bg-[#9A2230] text-white';
                    } else {
                      rowClass = 'border-[#E7E2D4] bg-white/70 text-[#4E5563]';
                      badgeClass = 'border-[#E7E2D4] bg-[#F7F4EC] text-[#7E8594]';
                    }
                  } else if (isSelected) {
                    rowClass = 'border-[#19345E] bg-[#19345E]/8 text-[#171A21] ring-1 ring-[#19345E]';
                    badgeClass = 'border-[#19345E] bg-[#19345E] text-white';
                  }

                  return (
                    <button
                      key={letter}
                      type="button"
                      disabled={isCheckedInStudy}
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => onSelectAnswer(currentQuestion.id, optIdx)}
                      className={`flex min-h-12 w-full items-start gap-3.5 rounded-md border px-4 py-3 text-left transition-colors ${
                        isCheckedInStudy ? 'cursor-default' : 'cursor-pointer'
                      } ${rowClass}`}
                    >
                      <span
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-bold ${badgeClass}`}
                      >
                        {letter}
                      </span>
                      <span className="flex-1 text-[15px] leading-relaxed">{optText}</span>
                      {isCheckedInStudy && isCorrectOpt && (
                        <CheckCircle2
                          className="mt-1 h-5 w-5 shrink-0 text-[#1E6B43]"
                          aria-label="Doğru seçenek"
                        />
                      )}
                      {isCheckedInStudy && isSelected && !isCorrectOpt && (
                        <XCircle
                          className="mt-1 h-5 w-5 shrink-0 text-[#9A2230]"
                          aria-label="Yanlış seçiminiz"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Study Mode Action Bar */}
              {isStudyMode && !isCheckedInStudy && (
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-md border border-[#D5CFC0] bg-[#F7F4EC]/75 px-4 py-3">
                  <p className="text-xs text-[#4E5563]">
                    {selectedIndex === null
                      ? 'Seçeneğinizi işaretledikten sonra “Cevabı Kontrol Et” ile açıklamalı notu açabilirsiniz.'
                      : `Seçiminiz: (${OPTION_LETTERS[selectedIndex]}). Doğruluğunu ve çalışma notunu görmek için kontrol edin.`}
                  </p>
                  <button
                    type="button"
                    onClick={() => onCheckStudyAnswer(currentQuestion.id)}
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-md bg-[#19345E] px-4 py-2 text-xs font-semibold text-white hover:bg-[#122645] cursor-pointer"
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>Cevabı Kontrol Et ve Notu Gör</span>
                  </button>
                </div>
              )}

              {/* Comprehensive Study Note & Verbatim Citation (Study Mode Evaluated) */}
              {isCheckedInStudy && (
                <div className="mt-6 space-y-4 rounded-md border border-[#D5CFC0] bg-[#F7F4EC] p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D5CFC0] pb-3">
                    {selectedIndex === currentQuestion.correctIndex ? (
                      <div className="flex items-center gap-2 text-[#1E6B43]">
                        <CheckCircle2 className="h-5 w-5 shrink-0" />
                        <span className="text-sm font-bold">Doğru Cevapladınız</span>
                      </div>
                    ) : selectedIndex === null ? (
                      <div className="flex items-center gap-2 text-[#A66A14]">
                        <AlertCircle className="h-5 w-5 shrink-0" />
                        <span className="text-sm font-bold">
                          Boş Bırakıldı — Doğru Cevap: ({OPTION_LETTERS[currentQuestion.correctIndex]})
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-[#9A2230]">
                        <XCircle className="h-5 w-5 shrink-0" />
                        <span className="text-sm font-bold">
                          Yanlış Cevap ({OPTION_LETTERS[selectedIndex]}) — Doğru Cevap: (
                          {OPTION_LETTERS[currentQuestion.correctIndex]})
                        </span>
                      </div>
                    )}
                    <span className="font-mono text-xs font-semibold text-[#19345E]">
                      {currentQuestion.citation.lawShort} · {currentQuestion.citation.article}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#19345E]">
                      Kapsamlı Açıklamalı Çalışma Notu
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#171A21]">
                      {currentQuestion.studyNote}
                    </p>
                  </div>

                  <div className="rounded border border-[#D5CFC0] bg-white p-3.5">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-[#19345E]">
                      <span>
                        Doğrudan Kaynak: {currentQuestion.citation.lawName} —{' '}
                        {currentQuestion.citation.article}
                        {currentQuestion.citation.clause ? ` ${currentQuestion.citation.clause}` : ''}
                      </span>
                      <span className="font-mono tabular-nums text-[#4E5563]">
                        PDF Sayfa {currentQuestion.citation.page}
                      </span>
                    </div>
                    <blockquote className="mt-2 font-serif text-sm italic leading-relaxed text-[#171A21]">
                      “{currentQuestion.citation.exactQuote}”
                    </blockquote>
                  </div>
                </div>
              )}
            </div>

            {/* Booklet Navigation Footer (Sticky thumb bar on mobile, card footer on desktop) */}
            <div className="fixed bottom-0 inset-x-0 z-30 flex items-center justify-between gap-2 border-t border-[#D5CFC0] bg-white/95 px-3.5 py-2.5 backdrop-blur-sm safe-pb lg:static lg:z-auto lg:border-t lg:border-[#E7E2D4] lg:bg-[#F7F4EC]/50 lg:px-7 lg:py-3.5">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  type="button"
                  disabled={safeIndex === 0}
                  onClick={() => onChangeIndex(safeIndex - 1)}
                  className="inline-flex min-h-11 items-center gap-1 rounded-md border border-[#D5CFC0] bg-white px-3 py-1.5 text-xs font-semibold text-[#171A21] disabled:cursor-not-allowed disabled:opacity-45 hover:bg-[#F7F4EC] cursor-pointer lg:min-h-10"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Önceki</span>
                </button>

                <button
                  type="button"
                  disabled={selectedIndex === null || isCheckedInStudy}
                  onClick={() => onSelectAnswer(currentQuestion.id, null)}
                  className="inline-flex min-h-11 items-center gap-1 rounded-md border border-[#D5CFC0] bg-white px-3 py-1.5 text-xs font-semibold text-[#4E5563] disabled:cursor-not-allowed disabled:opacity-45 hover:text-[#171A21] cursor-pointer lg:min-h-10"
                >
                  <Eraser className="h-3.5 w-3.5" />
                  <span className="hidden xs:inline sm:inline">Boş Bırak</span>
                  <span className="xs:hidden sm:hidden">Temizle</span>
                </button>
              </div>

              {safeIndex < questions.length - 1 ? (
                <button
                  type="button"
                  onClick={() => onChangeIndex(safeIndex + 1)}
                  className="inline-flex min-h-11 items-center gap-1 rounded-md bg-[#19345E] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#122645] cursor-pointer lg:min-h-10"
                >
                  <span>Sonraki Soru</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowFinishModal(true)}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-md bg-[#1E6B43] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#175334] cursor-pointer lg:min-h-10"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Sınavı Tamamla</span>
                </button>
              )}
            </div>
          </article>
        </div>

        {/* Desktop Optical Answer Sheet */}
        <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-20">
          <OpticalSheet
            nickname={session.nickname}
            mode={session.mode}
            questions={questions}
            answers={session.answers}
            flaggedIds={session.flaggedIds}
            checkedStudyIds={session.checkedStudyIds}
            currentIndex={safeIndex}
            onJumpToQuestion={onChangeIndex}
            onSelectAnswer={(qId, optIdx) => onSelectAnswer(qId, optIdx)}
            onRequestFinish={() => setShowFinishModal(true)}
          />
        </div>
      </div>

      {/* Mobile Optical Drawer */}
      {showMobileOptical && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/45 p-2 sm:p-4 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobil Optik Cevap Kağıdı"
        >
          <div className="w-full max-w-md rounded-t-xl rounded-b-md bg-white shadow-2xl safe-pb">
            <div className="flex items-center justify-between border-b border-[#E7E2D4] px-4 py-3">
              <span className="font-mono text-xs font-bold text-[#9A2230]">OPTİK CEVAP KAĞIDI</span>
              <button
                type="button"
                onClick={() => setShowMobileOptical(false)}
                className="flex h-10 w-10 items-center justify-center rounded border border-[#D5CFC0] text-[#4E5563]"
                aria-label="Kapat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-2.5">
              <OpticalSheet
                nickname={session.nickname}
                mode={session.mode}
                questions={questions}
                answers={session.answers}
                flaggedIds={session.flaggedIds}
                checkedStudyIds={session.checkedStudyIds}
                currentIndex={safeIndex}
                onJumpToQuestion={(idx) => {
                  onChangeIndex(idx);
                  setShowMobileOptical(false);
                }}
                onSelectAnswer={(qId, optIdx) => onSelectAnswer(qId, optIdx)}
                onRequestFinish={() => {
                  setShowMobileOptical(false);
                  setShowFinishModal(true);
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Confirm Finish Modal (No window.confirm!) */}
      {showFinishModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="finish-modal-title"
        >
          <div className="w-full max-w-md rounded-md border border-[#D5CFC0] bg-white p-5 shadow-xl">
            <h2 id="finish-modal-title" className="font-serif text-xl font-bold text-[#171A21]">
              Sınavı Bitir ve Değerlendir?
            </h2>
            <p className="mt-2 text-sm text-[#4E5563]">
              Optik cevap kağıdınızdaki mevcut işaretlemeler üzerinden puanınız hesaplanacak ve
              konu bazlı hata analiziniz kaydedilecektir.
            </p>

            <div className="mt-4 grid grid-cols-3 gap-2 rounded border border-[#E7E2D4] bg-[#F7F4EC] p-3 text-center font-mono text-xs">
              <div>
                <span className="block text-[#4E5563]">Cevaplanan</span>
                <span className="mt-0.5 block text-base font-bold text-[#19345E] tabular-nums">
                  {answeredCount}
                </span>
              </div>
              <div>
                <span className="block text-[#4E5563]">Boş</span>
                <span className="mt-0.5 block text-base font-bold text-[#171A21] tabular-nums">
                  {blankCount}
                </span>
              </div>
              <div>
                <span className="block text-[#4E5563]">İşaretli</span>
                <span className="mt-0.5 block text-base font-bold text-[#A66A14] tabular-nums">
                  {session.flaggedIds.length}
                </span>
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowFinishModal(false)}
                className="min-h-10 rounded-md border border-[#D5CFC0] bg-white px-4 py-2 text-xs font-semibold text-[#171A21] hover:bg-[#F7F4EC] cursor-pointer"
              >
                Sınava Dön
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowFinishModal(false);
                  onFinishExam();
                }}
                className="min-h-10 rounded-md bg-[#19345E] px-4 py-2 text-xs font-semibold text-white hover:bg-[#122645] cursor-pointer"
              >
                Evet, Sınavı Bitir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Abandon Exam Modal */}
      {showAbandonModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="abandon-modal-title"
        >
          <div className="w-full max-w-md rounded-md border border-[#D5CFC0] bg-white p-5 shadow-xl">
            <h2 id="abandon-modal-title" className="font-serif text-xl font-bold text-[#171A21]">
              Sınav Oturumundan Çıkılsın mı?
            </h2>
            <p className="mt-2 text-sm text-[#4E5563]">
              Mevcut ilerlemeniz yerel hafızada saklanır; dilerseniz daha sonra kaldığınız yerden
              devam edebilir veya oturumu sonlandırabilirsiniz.
            </p>
            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowAbandonModal(false)}
                className="min-h-10 rounded-md border border-[#D5CFC0] bg-white px-4 py-2 text-xs font-semibold text-[#171A21] hover:bg-[#F7F4EC] cursor-pointer"
              >
                Devam Et
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowAbandonModal(false);
                  onAbandonExam();
                }}
                className="min-h-10 rounded-md bg-[#9A2230] px-4 py-2 text-xs font-semibold text-white hover:bg-[#7B1B26] cursor-pointer"
              >
                Giriş Ekranına Dön
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
