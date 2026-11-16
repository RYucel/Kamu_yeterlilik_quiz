import { Award, Eye, History, Trash2, Trophy } from 'lucide-react';
import { useMemo, useState } from 'react';
import type { ExamAttempt, ExamMode, QuestionCount } from '../types/exam';
import { formatDateTurkish, formatDurationTurkish, getScoreboardSummaries } from '../utils/storage';

interface ScoreboardViewProps {
  attempts: ExamAttempt[];
  onInspectAttempt: (attempt: ExamAttempt) => void;
  onClearHistory: () => void;
  onStartNewExam: () => void;
}

export function ScoreboardView({
  attempts,
  onInspectAttempt,
  onClearHistory,
  onStartNewExam,
}: ScoreboardViewProps) {
  const [countFilter, setCountFilter] = useState<QuestionCount | 'all'>('all');
  const [modeFilter, setModeFilter] = useState<ExamMode | 'all'>('all');
  const [confirmClear, setConfirmClear] = useState(false);

  const summaries = useMemo(() => getScoreboardSummaries(attempts), [attempts]);

  const filteredAttempts = useMemo(() => {
    return attempts.filter((item) => {
      if (countFilter !== 'all' && item.questionCount !== countFilter) return false;
      if (modeFilter !== 'all' && item.mode !== modeFilter) return false;
      return true;
    });
  }, [attempts, countFilter, modeFilter]);

  if (attempts.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <div className="rounded-md border border-[#D5CFC0] bg-white p-8 text-center exam-paper-shadow">
          <Trophy className="mx-auto h-10 w-10 text-[#19345E]" />
          <h1 className="mt-3 font-serif text-2xl font-bold text-[#171A21]">
            Yerel Puan Tablosu Henüz Boş
          </h1>
          <p className="mx-auto mt-2 max-w-lg text-sm text-[#4E5563]">
            Sınav girişinde rumuzunuzu girerek 10, 20 veya 30 soruluk bir sınav tamamladığınızda
            puanlarınız ve gelişim geçmişiniz bu cihazın yerel hafızasında saklanır.
          </p>
          <button
            type="button"
            onClick={onStartNewExam}
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md bg-[#19345E] px-5 py-2 text-sm font-semibold text-white hover:bg-[#122645] cursor-pointer"
          >
            <span>Sınav Girişine Git</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-6 sm:px-6">
      {/* Nickname Leaderboard */}
      <section className="rounded-md border border-[#D5CFC0] bg-white p-5 exam-paper-shadow sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E7E2D4] pb-4">
          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#19345E]">
              Yerel Hafıza Kayıtları
            </p>
            <h1 className="mt-1 font-serif text-2xl font-bold text-[#171A21]">
              Aday Rumuzları Puan Tablosu
            </h1>
          </div>

          <button
            type="button"
            onClick={() => setConfirmClear(true)}
            className="inline-flex min-h-10 items-center gap-1.5 rounded border border-[#9A2230]/40 bg-white px-3 py-1.5 text-xs font-semibold text-[#9A2230] hover:bg-[#9A2230]/8 cursor-pointer"
          >
            <Trash2 className="h-3.5 w-3.5" />
            <span>Geçmişi Sıfırla</span>
          </button>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead>
              <tr className="border-b border-[#D5CFC0] font-mono text-[11px] uppercase text-[#4E5563]">
                <th className="py-2.5 pr-3">Sıra</th>
                <th className="py-2.5 px-3">Aday Rumuzu</th>
                <th className="py-2.5 px-3 text-right">En Yüksek</th>
                <th className="py-2.5 px-3 text-right">Ortalama</th>
                <th className="py-2.5 px-3 text-right">Sınav Sayısı</th>
                <th className="py-2.5 px-3 text-right">Doğruluk</th>
                <th className="py-2.5 pl-3 text-right">Son Sınav</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7E2D4]">
              {summaries.map((row, idx) => (
                <tr key={row.nickname} className="hover:bg-[#F7F4EC]/60">
                  <td className="py-3 pr-3 font-mono text-xs font-bold text-[#19345E] tabular-nums">
                    {idx === 0 ? (
                      <span className="inline-flex items-center gap-1 text-[#A66A14]">
                        <Award className="h-4 w-4" /> #1
                      </span>
                    ) : (
                      `#${idx + 1}`
                    )}
                  </td>
                  <td className="py-3 px-3 font-semibold text-[#171A21]">{row.nickname}</td>
                  <td className="py-3 px-3 text-right font-mono font-bold text-[#19345E] tabular-nums">
                    {row.bestScore}
                  </td>
                  <td className="py-3 px-3 text-right font-mono text-[#171A21] tabular-nums">
                    {row.averageScore}
                  </td>
                  <td className="py-3 px-3 text-right font-mono text-[#4E5563] tabular-nums">
                    {row.attemptCount}
                  </td>
                  <td className="py-3 px-3 text-right font-mono font-semibold text-[#1E6B43] tabular-nums">
                    %{row.accuracyRate} ({row.totalCorrect}/{row.totalSolved})
                  </td>
                  <td className="py-3 pl-3 text-right text-xs text-[#4E5563]">
                    {formatDateTurkish(row.lastPlayedAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Attempt History Log */}
      <section className="rounded-md border border-[#D5CFC0] bg-white p-5 exam-paper-shadow sm:p-6">
        <div className="flex flex-col gap-3 border-b border-[#E7E2D4] pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <History className="h-5 w-5 text-[#19345E]" />
            <h2 className="font-serif text-lg font-bold text-[#171A21]">
              Tamamlanan Sınav Oturumları ({filteredAttempts.length})
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1">
              {(['all', 10, 20, 30] as const).map((cnt) => (
                <button
                  key={String(cnt)}
                  type="button"
                  onClick={() => setCountFilter(cnt)}
                  className={`min-h-8 rounded border px-2.5 py-1 font-mono text-xs font-semibold cursor-pointer ${
                    countFilter === cnt
                      ? 'border-[#19345E] bg-[#19345E] text-white'
                      : 'border-[#D5CFC0] bg-[#F7F4EC] text-[#171A21]'
                  }`}
                >
                  {cnt === 'all' ? 'Tümü' : `${cnt}S`}
                </button>
              ))}
            </div>

            <select
              aria-label="Mod filtresi"
              value={modeFilter}
              onChange={(e) => setModeFilter(e.target.value as ExamMode | 'all')}
              className="min-h-8 rounded border border-[#D5CFC0] bg-white px-2.5 py-1 text-xs font-semibold text-[#171A21]"
            >
              <option value="all">Tüm Modlar</option>
              <option value="simulation">Simülasyon</option>
              <option value="study">Çalışma Modu</option>
            </select>
          </div>
        </div>

        <div className="mt-4 space-y-2.5">
          {filteredAttempts.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between gap-3 rounded border border-[#E7E2D4] bg-[#F7F4EC]/50 p-3.5 sm:flex-row sm:items-center"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-sm text-[#171A21]">{item.nickname}</span>
                  <span className="text-[#D5CFC0]">·</span>
                  <span className="font-mono text-xs font-semibold text-[#19345E]">
                    {item.mode === 'simulation' ? 'Simülasyon' : 'Çalışma Modu'}
                  </span>
                  <span className="text-[#D5CFC0]">·</span>
                  <span className="font-mono text-xs text-[#4E5563] tabular-nums">
                    {item.questionCount} Soru
                  </span>
                </div>
                <p className="mt-1 text-xs text-[#4E5563]">
                  {formatDateTurkish(item.completedAt)} · Süre:{' '}
                  <span className="font-mono tabular-nums">
                    {formatDurationTurkish(item.durationSeconds)}
                  </span>{' '}
                  ·{' '}
                  <span className="font-mono tabular-nums">
                    {item.correctCount}D / {item.wrongCount}Y / {item.blankCount}B
                  </span>
                </p>
              </div>

              <div className="flex items-center justify-between gap-3 sm:justify-end">
                <span className="font-mono text-xl font-bold text-[#19345E] tabular-nums">
                  {item.score} Puan
                </span>
                <button
                  type="button"
                  onClick={() => onInspectAttempt(item)}
                  className="inline-flex min-h-9 items-center gap-1.5 rounded border border-[#D5CFC0] bg-white px-3 py-1.5 text-xs font-semibold text-[#171A21] hover:border-[#19345E] cursor-pointer"
                >
                  <Eye className="h-3.5 w-3.5" />
                  <span>İncele</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Confirm Reset History Modal (No window.confirm!) */}
      {confirmClear && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="clear-history-title"
        >
          <div className="w-full max-w-md rounded-md border border-[#D5CFC0] bg-white p-5 shadow-xl">
            <h2 id="clear-history-title" className="font-serif text-xl font-bold text-[#171A21]">
              Tüm Yerel Kayıtlar Silinsin mi?
            </h2>
            <p className="mt-2 text-sm text-[#4E5563]">
              Bu işlem cihazınızdaki tüm aday rumuzu puanlarını, sınav geçmişini ve konu bazlı hata
              analizlerini kalıcı olarak silecektir.
            </p>
            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setConfirmClear(false)}
                className="min-h-10 rounded-md border border-[#D5CFC0] bg-white px-4 py-2 text-xs font-semibold text-[#171A21] hover:bg-[#F7F4EC] cursor-pointer"
              >
                Vazgeç
              </button>
              <button
                type="button"
                onClick={() => {
                  setConfirmClear(false);
                  onClearHistory();
                }}
                className="min-h-10 rounded-md bg-[#9A2230] px-4 py-2 text-xs font-semibold text-white hover:bg-[#7B1B26] cursor-pointer"
              >
                Evet, Tümünü Sil
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
