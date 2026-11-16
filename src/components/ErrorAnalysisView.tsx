import {
  AlertCircle,
  BookOpen,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Target,
  XCircle,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import type { ExamAttempt, LawType } from '../types/exam';
import { computeTopicAnalysis, formatDateTurkish } from '../utils/storage';

interface ErrorAnalysisViewProps {
  attempts: ExamAttempt[];
  nicknames: string[];
  activeNickname: string;
  onPracticeWeakTopics: (nickname?: string) => void;
  onStartNewExam: () => void;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'] as const;

export function ErrorAnalysisView({
  attempts,
  nicknames,
  activeNickname,
  onPracticeWeakTopics,
  onStartNewExam,
}: ErrorAnalysisViewProps) {
  const [selectedNickname, setSelectedNickname] = useState<string>(activeNickname || '');
  const [selectedLaw, setSelectedLaw] = useState<LawType | 'all'>('all');
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const analysis = useMemo(
    () => computeTopicAnalysis(attempts, selectedNickname || undefined, selectedLaw),
    [attempts, selectedNickname, selectedLaw],
  );

  if (attempts.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <div className="rounded-md border border-[#D5CFC0] bg-white p-8 text-center exam-paper-shadow">
          <Target className="mx-auto h-10 w-10 text-[#19345E]" />
          <h1 className="mt-3 font-serif text-2xl font-bold text-[#171A21]">
            Konu Bazlı Hata Analizi Henüz Boş
          </h1>
          <p className="mx-auto mt-2 max-w-lg text-sm text-[#4E5563]">
            Yanlış veya boş bıraktığınız soruların hangi mevzuat başlığında yoğunlaştığını görmek ve
            zayıf yönlerinize göre çalışma notları almak için ilk sınavınızı tamamlayın.
          </p>
          <button
            type="button"
            onClick={onStartNewExam}
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md bg-[#19345E] px-5 py-2 text-sm font-semibold text-white hover:bg-[#122645] cursor-pointer"
          >
            <span>İlk Sınavı Başlat</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
      {/* Header & Filters */}
      <section className="rounded-md border border-[#D5CFC0] bg-white p-5 exam-paper-shadow sm:p-6">
        <div className="flex flex-col gap-4 border-b border-[#E7E2D4] pb-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#9A2230]">
              Zayıf Yönler &amp; Hatalı Soru Analizi
            </p>
            <h1 className="mt-1 font-serif text-2xl font-bold text-[#171A21]">
              Konulara Göre Hata Dağılımı
            </h1>
            <p className="mt-1 text-sm text-[#4E5563]">
              Kayıtlı sınavlarınızdaki yanlış ve boş sorular mevzuat konularına göre gruplanır. Her
              konuya tıklayarak kaçırdığınız soruların açıklamalı notunu ve kaynak alıntısını
              inceleyebilirsiniz.
            </p>
          </div>

          {analysis.totalErrorsAndBlanks > 0 && (
            <button
              type="button"
              onClick={() => onPracticeWeakTopics(selectedNickname || undefined)}
              className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-md bg-[#9A2230] px-4 py-2 text-xs font-semibold text-white hover:bg-[#7B1B26] cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Zayıf Konulardan Sınav Oluştur</span>
            </button>
          )}
        </div>

        {/* Filter Controls */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <label htmlFor="analysis-nickname-filter" className="text-xs font-semibold text-[#4E5563]">
              Aday Filtresi:
            </label>
            <select
              id="analysis-nickname-filter"
              value={selectedNickname}
              onChange={(e) => setSelectedNickname(e.target.value)}
              className="min-h-10 rounded border border-[#D5CFC0] bg-[#F7F4EC] px-3 py-1.5 text-xs font-semibold text-[#171A21] focus:border-[#19345E] focus:outline-none"
            >
              <option value="">Tüm Adaylar ({attempts.length} Sınav)</option>
              {nicknames.map((nick) => (
                <option key={nick} value={nick}>
                  {nick}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', label: 'Tüm Mevzuat' },
              { id: 'kgy', label: '7/1979 KGY' },
              { id: 'anayasa', label: 'KKTC Anayasası' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedLaw(tab.id as LawType | 'all')}
                className={`min-h-9 rounded border px-3 py-1 text-xs font-semibold transition-colors cursor-pointer ${
                  selectedLaw === tab.id
                    ? 'border-[#19345E] bg-[#19345E] text-white'
                    : 'border-[#D5CFC0] bg-white text-[#171A21] hover:bg-[#F7F4EC]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Summary Metrics */}
        <div className="mt-4 grid grid-cols-3 gap-3 rounded border border-[#E7E2D4] bg-[#F7F4EC]/70 p-3.5 text-center sm:text-left">
          <div>
            <span className="block font-mono text-[10px] font-semibold uppercase text-[#4E5563]">
              İncelenen Konu
            </span>
            <span className="font-mono text-lg font-bold text-[#171A21] tabular-nums">
              {analysis.topics.length}
            </span>
          </div>
          <div>
            <span className="block font-mono text-[10px] font-semibold uppercase text-[#9A2230]">
              Toplam Yanlış
            </span>
            <span className="font-mono text-lg font-bold text-[#9A2230] tabular-nums">
              {analysis.totalWrong}
            </span>
          </div>
          <div>
            <span className="block font-mono text-[10px] font-semibold uppercase text-[#A66A14]">
              Toplam Boş
            </span>
            <span className="font-mono text-lg font-bold text-[#A66A14] tabular-nums">
              {analysis.totalBlank}
            </span>
          </div>
        </div>
      </section>

      {/* Topic List Sorted by Most Errors */}
      <div className="mt-6 space-y-3">
        {analysis.topics.map((item) => {
          const missedItems = analysis.missedByTopic[item.topic] ?? [];
          const isExpanded = expandedTopic === item.topic;
          const isWeak = item.errorCount > 0 && item.accuracyRate < 75;

          return (
            <div
              key={`${item.law}-${item.topic}`}
              className="rounded-md border border-[#D5CFC0] bg-white exam-paper-shadow"
            >
              <button
                type="button"
                onClick={() => setExpandedTopic(isExpanded ? null : item.topic)}
                className="flex w-full items-center justify-between gap-4 p-4 text-left hover:bg-[#F7F4EC]/60 cursor-pointer sm:p-5"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[11px] font-bold uppercase text-[#19345E]">
                      {item.law === 'kgy' ? '7/1979 KGY' : 'KKTC ANAYASASI'}
                    </span>
                    {isWeak && (
                      <span className="font-mono text-[11px] font-bold text-[#9A2230]">
                        · ÖNCELİKLİ ÇALIŞMA ALANI
                      </span>
                    )}
                  </div>
                  <h2 className="mt-0.5 font-serif text-lg font-semibold text-[#171A21]">
                    {item.topic}
                  </h2>
                  <div className="mt-2 h-2 w-full max-w-md overflow-hidden rounded-sm bg-[#E7E2D4]">
                    <div
                      className={`h-full ${
                        item.accuracyRate >= 75
                          ? 'bg-[#1E6B43]'
                          : item.accuracyRate >= 50
                            ? 'bg-[#A66A14]'
                            : 'bg-[#9A2230]'
                      }`}
                      style={{ width: `${item.accuracyRate}%` }}
                    />
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-4">
                  <div className="text-right font-mono tabular-nums">
                    <span className="block text-base font-bold text-[#171A21]">
                      %{item.accuracyRate}
                    </span>
                    <span className="block text-[11px] text-[#4E5563]">
                      {item.wrong}Y / {item.blank}B / {item.total}S
                    </span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="h-5 w-5 text-[#4E5563]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#4E5563]" />
                  )}
                </div>
              </button>

              {isExpanded && (
                <div className="border-t border-[#E7E2D4] bg-[#F7F4EC]/50 p-4 sm:p-5">
                  {missedItems.length === 0 ? (
                    <p className="text-sm font-medium text-[#1E6B43]">
                      Bu konuda yanlış veya boş bıraktığınız soru bulunmuyor. Tebrikler!
                    </p>
                  ) : (
                    <div className="space-y-4">
                      <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#9A2230]">
                        Bu Konuda Kaçırılan Sorular ({missedItems.length})
                      </p>
                      {missedItems.map((record, idx) => (
                        <div
                          key={`${record.attemptId}-${record.question.id}-${idx}`}
                          className="rounded-md border border-[#D5CFC0] bg-white p-4"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E7E2D4] pb-2.5 text-xs">
                            <span className="font-medium text-[#4E5563]">
                              Aday: <strong className="text-[#171A21]">{record.nickname}</strong> ·{' '}
                              {formatDateTurkish(record.attemptDate)}
                            </span>
                            {record.outcome.isBlank ? (
                              <span className="inline-flex items-center gap-1 font-bold text-[#A66A14]">
                                <AlertCircle className="h-3.5 w-3.5" />
                                Boş · Doğru: ({OPTION_LETTERS[record.question.correctIndex]})
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 font-bold text-[#9A2230]">
                                <XCircle className="h-3.5 w-3.5" />
                                İşaretlenen:{' '}
                                {record.outcome.selectedIndex !== null
                                  ? `(${OPTION_LETTERS[record.outcome.selectedIndex]})`
                                  : '-'}{' '}
                                · Doğru: ({OPTION_LETTERS[record.question.correctIndex]})
                              </span>
                            )}
                          </div>

                          <p className="mt-2.5 font-serif text-base font-medium text-[#171A21]">
                            {record.question.stem}
                          </p>
                          <p className="mt-2 text-xs font-semibold text-[#1E6B43]">
                            Doğru Seçenek ({OPTION_LETTERS[record.question.correctIndex]}):{' '}
                            {record.question.options[record.question.correctIndex]}
                          </p>

                          <div className="mt-3 rounded border border-[#D5CFC0] bg-[#F7F4EC] p-3">
                            <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase text-[#19345E]">
                              <BookOpen className="h-3.5 w-3.5" />
                              <span>Açıklamalı Çalışma Notu</span>
                            </div>
                            <p className="mt-1 text-xs leading-relaxed text-[#171A21]">
                              {record.question.studyNote}
                            </p>
                            <div className="mt-2.5 rounded border border-[#D5CFC0] bg-white p-2.5">
                              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-semibold text-[#19345E]">
                                <span>
                                  {record.question.citation.lawName} ·{' '}
                                  {record.question.citation.article}
                                  {record.question.citation.clause
                                    ? ` ${record.question.citation.clause}`
                                    : ''}
                                </span>
                                <span className="font-mono text-[#4E5563] tabular-nums">
                                  PDF Sayfa {record.question.citation.page}
                                </span>
                              </div>
                              <blockquote className="mt-1 font-serif text-xs italic text-[#171A21]">
                                “{record.question.citation.exactQuote}”
                              </blockquote>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
