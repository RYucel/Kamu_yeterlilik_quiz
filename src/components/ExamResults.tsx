import {
  AlertCircle,
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Flag,
  RotateCcw,
  Target,
  Trophy,
  XCircle,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import { QUESTION_MAP } from '../data/questions';
import type { ExamAttempt } from '../types/exam';
import { formatDateTurkish, formatDurationTurkish, getExamTopicBreakdown } from '../utils/storage';

interface ExamResultsProps {
  attempt: ExamAttempt;
  onStartNewExam: () => void;
  onPracticeWeakTopics: () => void;
  onOpenScoreboard: () => void;
}

type ReviewFilter = 'errors' | 'all' | 'correct' | 'flagged';
const OPTION_LETTERS = ['A', 'B', 'C', 'D'] as const;

export function ExamResults({
  attempt,
  onStartNewExam,
  onPracticeWeakTopics,
  onOpenScoreboard,
}: ExamResultsProps) {
  const [filter, setFilter] = useState<ReviewFilter>(
    attempt.wrongCount + attempt.blankCount > 0 ? 'errors' : 'all',
  );

  const topicBreakdown = useMemo(() => getExamTopicBreakdown(attempt.outcomes), [attempt.outcomes]);

  const filteredOutcomes = useMemo(() => {
    return attempt.outcomes.filter((o) => {
      if (filter === 'errors') return !o.isCorrect;
      if (filter === 'correct') return o.isCorrect;
      if (filter === 'flagged') return o.isFlagged;
      return true;
    });
  }, [attempt.outcomes, filter]);

  const hasErrors = attempt.wrongCount + attempt.blankCount > 0;

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
      {/* Official Exam Result Document */}
      <section className="rounded-md border border-[#D5CFC0] bg-white exam-paper-shadow">
        <div className="border-b-2 border-[#19345E] px-5 py-5 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#19345E]">
                KKTC Kamuya Giriş Yeterlilik Sınavı · Sınav Sonuç Belgesi
              </p>
              <h1 className="mt-1 font-serif text-2xl font-bold text-[#171A21] sm:text-3xl">
                Aday: {attempt.nickname}
              </h1>
              <p className="mt-1 text-xs text-[#4E5563]">
                {attempt.mode === 'simulation' ? 'Gerçek Sınav Simülasyonu' : 'Çalışma Modu'} ·{' '}
                <span className="tabular-nums">{attempt.questionCount}</span> Soru · Süre:{' '}
                <span className="font-mono tabular-nums">
                  {formatDurationTurkish(attempt.durationSeconds)}
                </span>{' '}
                · {formatDateTurkish(attempt.completedAt)}
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-md border border-[#19345E]/25 bg-[#F7F4EC] px-5 py-3">
              <div className="text-right sm:text-center">
                <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-[#4E5563]">
                  Sınav Puanı
                </span>
                <span className="font-mono text-3xl font-bold text-[#19345E] tabular-nums">
                  {attempt.score}
                  <span className="text-base font-normal text-[#4E5563]">/100</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Summary Metrics */}
        <div className="grid grid-cols-2 divide-y divide-[#E7E2D4] border-b border-[#E7E2D4] sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          <div className="px-5 py-4">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1E6B43]">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>Doğru Sayısı</span>
            </div>
            <p className="mt-1 font-mono text-2xl font-bold text-[#171A21] tabular-nums">
              {attempt.correctCount}
            </p>
          </div>
          <div className="px-5 py-4">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#9A2230]">
              <XCircle className="h-4 w-4 shrink-0" />
              <span>Yanlış Sayısı</span>
            </div>
            <p className="mt-1 font-mono text-2xl font-bold text-[#171A21] tabular-nums">
              {attempt.wrongCount}
            </p>
          </div>
          <div className="px-5 py-4">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#A66A14]">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>Boş Bırakılan</span>
            </div>
            <p className="mt-1 font-mono text-2xl font-bold text-[#171A21] tabular-nums">
              {attempt.blankCount}
            </p>
          </div>
          <div className="px-5 py-4">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#19345E]">
              <Target className="h-4 w-4 shrink-0" />
              <span>Başarı Oranı</span>
            </div>
            <p className="mt-1 font-mono text-2xl font-bold text-[#171A21] tabular-nums">
              %{Math.round((attempt.correctCount / attempt.questionCount) * 100)}
            </p>
          </div>
        </div>

        {/* Action Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F7F4EC]/70 px-5 py-3.5 sm:px-8">
          <button
            type="button"
            onClick={onStartNewExam}
            className="inline-flex min-h-10 items-center gap-1.5 rounded-md border border-[#D5CFC0] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#171A21] hover:border-[#19345E] cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Yeni Sınav Kur</span>
          </button>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={onOpenScoreboard}
              className="inline-flex min-h-10 items-center gap-1.5 rounded-md border border-[#D5CFC0] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#171A21] hover:border-[#19345E] cursor-pointer"
            >
              <Trophy className="h-3.5 w-3.5 text-[#19345E]" />
              <span>Puan Tablosunu Gör</span>
            </button>
            {hasErrors && (
              <button
                type="button"
                onClick={onPracticeWeakTopics}
                className="inline-flex min-h-10 items-center gap-1.5 rounded-md bg-[#9A2230] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#7B1B26] cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Hatalı Konulardan Çalışma Başlat</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Topic Breakdown in This Exam */}
      <section className="mt-6 rounded-md border border-[#D5CFC0] bg-white p-5 exam-paper-shadow sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#E7E2D4] pb-3">
          <div>
            <h2 className="font-serif text-lg font-bold text-[#171A21]">
              Bu Sınavdaki Konu Bazlı Başarı &amp; Hata Dağılımı
            </h2>
            <p className="text-xs text-[#4E5563]">
              Zayıf yönlerinizi hızlıca görebilmeniz için konular en çok hata yapılanlardan başlayarak
              sıralanmıştır.
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          {topicBreakdown.map((item) => {
            const hasTopicErrors = item.errorCount > 0;
            return (
              <div
                key={`${item.law}-${item.topic}`}
                className="rounded border border-[#E7E2D4] bg-[#F7F4EC]/55 p-3.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase text-[#19345E]">
                      {item.law === 'kgy' ? '7/1979 KGY' : 'KKTC ANAYASASI'}
                    </span>
                    <h3 className="text-sm font-semibold text-[#171A21]">{item.topic}</h3>
                  </div>
                  <span
                    className={`font-mono text-xs font-bold tabular-nums ${
                      hasTopicErrors ? 'text-[#9A2230]' : 'text-[#1E6B43]'
                    }`}
                  >
                    %{item.accuracyRate}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mt-2.5 h-2 w-full overflow-hidden rounded-sm bg-[#E7E2D4]">
                  <div
                    className={`h-full transition-all ${
                      item.accuracyRate >= 70
                        ? 'bg-[#1E6B43]'
                        : item.accuracyRate >= 40
                          ? 'bg-[#A66A14]'
                          : 'bg-[#9A2230]'
                    }`}
                    style={{ width: `${item.accuracyRate}%` }}
                  />
                </div>

                <div className="mt-2 flex items-center justify-between font-mono text-[11px] text-[#4E5563] tabular-nums">
                  <span>
                    {item.correct} Doğru · {item.wrong} Yanlış · {item.blank} Boş
                  </span>
                  <span>Toplam {item.total}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Detailed Question Review with Comprehensive Study Notes & Exact Citations */}
      <section className="mt-6 rounded-md border border-[#D5CFC0] bg-white p-5 exam-paper-shadow sm:p-6">
        <div className="flex flex-col gap-3 border-b border-[#E7E2D4] pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-lg font-bold text-[#171A21]">
              Soru Bazlı İnceleme, Açıklamalı Notlar ve Kaynak Atıfları
            </h2>
            <p className="text-xs text-[#4E5563]">
              Tüm doğru, yanlış ve boş sorular için ilgili mevzuat maddesi ve birebir alıntısı
              aşağıda sunulmuştur.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'errors', label: `Hata/Boş (${attempt.wrongCount + attempt.blankCount})` },
              { id: 'all', label: `Tümü (${attempt.questionCount})` },
              { id: 'correct', label: `Doğru (${attempt.correctCount})` },
              {
                id: 'flagged',
                label: `İşaretli (${attempt.outcomes.filter((o) => o.isFlagged).length})`,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as ReviewFilter)}
                className={`min-h-9 rounded border px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer tabular-nums ${
                  filter === tab.id
                    ? 'border-[#19345E] bg-[#19345E] text-white'
                    : 'border-[#D5CFC0] bg-[#F7F4EC] text-[#171A21] hover:border-[#19345E]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 space-y-5">
          {filteredOutcomes.length === 0 ? (
            <div className="rounded border border-[#E7E2D4] bg-[#F7F4EC]/60 p-6 text-center text-sm text-[#4E5563]">
              Bu filtreye uyan soru bulunmamaktadır.
            </div>
          ) : (
            filteredOutcomes.map((outcome) => {
              const question = QUESTION_MAP[outcome.questionId];
              if (!question) return null;
              const questionOrder =
                attempt.outcomes.findIndex((o) => o.questionId === outcome.questionId) + 1;

              return (
                <article
                  key={outcome.questionId}
                  className="rounded-md border border-[#D5CFC0] bg-white p-4 sm:p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E7E2D4] pb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#19345E] tabular-nums">
                        SORU {questionOrder}
                      </span>
                      <span className="text-[#D5CFC0]">·</span>
                      <span className="text-xs font-semibold text-[#4E5563]">
                        {question.citation.lawShort} — {question.topic}
                      </span>
                      {outcome.isFlagged && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#A66A14]">
                          <Flag className="h-3 w-3 fill-[#A66A14]" /> İşaretli
                        </span>
                      )}
                    </div>

                    {outcome.isCorrect ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E6B43]">
                        <CheckCircle2 className="h-4 w-4" />
                        Doğru ({OPTION_LETTERS[outcome.correctIndex]})
                      </span>
                    ) : outcome.isBlank ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A66A14]">
                        <AlertCircle className="h-4 w-4" />
                        Boş Bırakıldı · Doğru: ({OPTION_LETTERS[outcome.correctIndex]})
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9A2230]">
                        <XCircle className="h-4 w-4" />
                        Yanlış:{' '}
                        {outcome.selectedIndex !== null
                          ? `(${OPTION_LETTERS[outcome.selectedIndex]})`
                          : '-'}{' '}
                        · Doğru: ({OPTION_LETTERS[outcome.correctIndex]})
                      </span>
                    )}
                  </div>

                  <p className="mt-3 font-serif text-base font-medium leading-relaxed text-[#171A21]">
                    {question.stem}
                  </p>

                  <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {question.options.map((optText, idx) => {
                      const isCorrectOpt = idx === question.correctIndex;
                      const isUserSelected = idx === outcome.selectedIndex;
                      let cls = 'border-[#E7E2D4] bg-[#F7F4EC]/40 text-[#4E5563]';
                      if (isCorrectOpt) {
                        cls = 'border-[#1E6B43] bg-[#1E6B43]/8 text-[#171A21] font-medium';
                      } else if (isUserSelected && !isCorrectOpt) {
                        cls = 'border-[#9A2230] bg-[#9A2230]/8 text-[#9A2230]';
                      }

                      return (
                        <div
                          key={OPTION_LETTERS[idx]}
                          className={`flex items-start gap-2 rounded border px-3 py-2 text-xs leading-relaxed ${cls}`}
                        >
                          <span className="font-mono font-bold">({OPTION_LETTERS[idx]})</span>
                          <span>{optText}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanatory Study Note + Verbatim Citation */}
                  <div className="mt-4 space-y-3 rounded border border-[#D5CFC0] bg-[#F7F4EC] p-3.5">
                    <div>
                      <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#19345E]">
                        <BookOpen className="h-3.5 w-3.5" />
                        <span>Açıklamalı Çalışma Notu</span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-[#171A21] sm:text-sm">
                        {question.studyNote}
                      </p>
                    </div>

                    <div className="rounded border border-[#D5CFC0] bg-white p-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-semibold text-[#19345E]">
                        <span>
                          Kaynak: {question.citation.lawName} · {question.citation.article}
                          {question.citation.clause ? ` ${question.citation.clause}` : ''}
                        </span>
                        <span className="font-mono text-[#4E5563] tabular-nums">
                          PDF Sayfa {question.citation.page}
                        </span>
                      </div>
                      <blockquote className="mt-1.5 font-serif text-xs italic leading-relaxed text-[#171A21] sm:text-sm">
                        “{question.citation.exactQuote}”
                      </blockquote>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}
