import {
  AlertTriangle,
  ArrowRight,
  BookOpenCheck,
  Clock,
  Play,
  RefreshCw,
  RotateCcw,
  ShieldCheck,
  User,
} from 'lucide-react';
import { useState } from 'react';
import { getScopePoolStats, getSuggestedMinutes } from '../data/questions';
import type {
  ActiveExamState,
  ExamMode,
  QuestionCount,
  QuestionUsageMap,
  TopicScope,
} from '../types/exam';

interface ExamEntryProps {
  initialNickname: string;
  recentNicknames: string[];
  weakTopicCount: number;
  totalRecordedErrors: number;
  savedActiveSession: ActiveExamState | null;
  questionUsage: QuestionUsageMap;
  onResetQuestionCycle: () => void;
  onStartExam: (config: {
    nickname: string;
    mode: ExamMode;
    questionCount: QuestionCount;
    scope: TopicScope;
  }) => void;
  onResumeSession: () => void;
  onDiscardSession: () => void;
  onOpenLegislation: () => void;
}

const QUESTION_COUNTS: QuestionCount[] = [10, 20, 30];

const SCOPE_OPTIONS: Array<{
  id: TopicScope;
  title: string;
  subtitle: string;
}> = [
  {
    id: 'mixed',
    title: 'Karma Sınav (7/1979 + Anayasa)',
    subtitle: 'Her iki temel mevzuattan dengeli konu dağılımıyla hazırlanmış tam yeterlilik denemesi',
  },
  {
    id: 'kgy',
    title: 'Kamu Görevlileri Yasası (7/1979)',
    subtitle: 'İstihdam şekilleri, ödevler, mali haklar, sınavlar, ilerleme, disiplin ve izinler',
  },
  {
    id: 'anayasa',
    title: 'KKTC Anayasası (1985)',
    subtitle: 'Genel ilkeler, temel haklar, siyasal haklar, yasama, yürütme, yönetim ve yargı',
  },
  {
    id: 'weakness',
    title: 'Zayıf Konulara Odaklan',
    subtitle: 'Geçmiş sınavlarda en çok hata veya boş bıraktığınız konulara ağırlık veren özel oturum',
  },
];

export function ExamEntry({
  initialNickname,
  recentNicknames,
  weakTopicCount,
  totalRecordedErrors,
  savedActiveSession,
  questionUsage,
  onResetQuestionCycle,
  onStartExam,
  onResumeSession,
  onDiscardSession,
  onOpenLegislation,
}: ExamEntryProps) {
  const [nickname, setNickname] = useState(initialNickname);
  const [mode, setMode] = useState<ExamMode>('simulation');
  const [questionCount, setQuestionCount] = useState<QuestionCount>(20);
  const [scope, setScope] = useState<TopicScope>('mixed');
  const [nicknameError, setNicknameError] = useState('');

  const suggestedMinutes = getSuggestedMinutes(questionCount);
  const poolStats = getScopePoolStats(scope, questionUsage);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const trimmed = nickname.trim();
    if (trimmed.length < 2) {
      setNicknameError('Lütfen en az 2 karakterlik bir aday rumuzu giriniz.');
      return;
    }
    setNicknameError('');
    onStartExam({
      nickname: trimmed,
      mode,
      questionCount,
      scope,
    });
  };

  return (
    <div className="mx-auto max-w-4xl px-3.5 py-4 sm:px-6 sm:py-8">
      {/* Resume banner if active unfinished exam exists */}
      {savedActiveSession && (
        <div className="mb-6 rounded-md border border-[#A66A14] bg-white p-4 exam-paper-shadow">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#A66A14]" />
              <div>
                <p className="text-sm font-semibold text-[#171A21]">
                  Yarım Kalan Bir Sınav Oturumunuz Bulunuyor
                </p>
                <p className="mt-0.5 text-xs text-[#4E5563]">
                  Aday: <strong className="text-[#171A21]">{savedActiveSession.nickname}</strong> ·{' '}
                  {savedActiveSession.mode === 'simulation'
                    ? 'Gerçek Sınav Simülasyonu'
                    : 'Çalışma Modu'}{' '}
                  · <span className="tabular-nums">{savedActiveSession.questionCount}</span> Soru
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onDiscardSession}
                className="inline-flex min-h-10 items-center gap-1.5 rounded-md border border-[#D5CFC0] bg-[#F7F4EC] px-3 py-1.5 text-xs font-semibold text-[#4E5563] hover:text-[#171A21] cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Sil</span>
              </button>
              <button
                type="button"
                onClick={onResumeSession}
                className="inline-flex min-h-10 items-center gap-1.5 rounded-md bg-[#19345E] px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-[#122645] cursor-pointer"
              >
                <Play className="h-3.5 w-3.5" />
                <span>Kaldığım Yerden Devam Et</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Official Printed Exam Booklet Cover Sheet */}
      <form
        onSubmit={handleSubmit}
        className="rounded-md border border-[#D5CFC0] bg-white exam-paper-shadow"
      >
        {/* Top Official Letterhead */}
        <div className="border-b-2 border-[#19345E] px-5 py-5 sm:px-8 sm:py-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#19345E]">
                Kuzey Kıbrıs Türk Cumhuriyeti · Sınav Hazırlık Kitapçığı
              </p>
              <h1 className="mt-1.5 font-serif text-2xl font-bold tracking-tight text-[#171A21] sm:text-3xl">
                Kamuya Giriş Yeterlilik Sınavı
              </h1>
              <p className="mt-1 text-sm text-[#4E5563]">
                7/1979 Sayılı Kamu Görevlileri Yasası ve 1985 KKTC Anayasası Doğrudan Kaynaklı
                Deneme Sınavı
              </p>
            </div>
            <div className="shrink-0 rounded border border-[#D5CFC0] bg-[#F7F4EC] px-3 py-2 text-left sm:text-right">
              <span className="block font-mono text-[10px] font-semibold uppercase tracking-wider text-[#4E5563]">
                Kitapçık Türü
              </span>
              <span className="font-mono text-lg font-bold text-[#19345E]">A — YETERLİK</span>
            </div>
          </div>
        </div>

        {/* Official Candidate Instructions Table */}
        <div className="border-b border-[#E7E2D4] bg-[#F7F4EC]/60 px-5 py-4 sm:px-8">
          <div className="grid grid-cols-1 gap-3 text-xs text-[#4E5563] sm:grid-cols-3">
            <div className="flex items-start gap-2">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#19345E]" />
              <span>
                <strong className="text-[#171A21]">Doğrudan Mevzuat:</strong> Tüm sorular ekli resmi
                PDF metinlerinden birebir madde ve sayfa atfıyla hazırlanmıştır.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#19345E]" />
              <span>
                <strong className="text-[#171A21]">Optik Cevap Kağıdı:</strong> 4 seçenekli (A–D)
                optik işaretleme, boş bırakma ve soru işaretleme desteklenir.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <BookOpenCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#19345E]" />
              <span>
                <strong className="text-[#171A21]">Hata &amp; Konu Analizi:</strong> Yanlışlarınız
                konulara göre kaydedilir; çalışma modunda açıklamalı notlar açılır.
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-6 px-5 py-6 sm:px-8">
          {/* 1. Nickname (Aday Rumuzu) */}
          <section aria-labelledby="entry-nickname-label">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <label
                id="entry-nickname-label"
                htmlFor="candidate-nickname"
                className="text-sm font-semibold text-[#171A21]"
              >
                1. Aday Rumuzu (Puan Tablosu Kaydı İçin)
              </label>
              <span className="font-mono text-[11px] text-[#4E5563]">YEREL HAFIZA KAYDI</span>
            </div>

            <div className="mt-2 relative">
              <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4E5563]" />
              <input
                id="candidate-nickname"
                type="text"
                maxLength={28}
                value={nickname}
                onChange={(e) => {
                  setNickname(e.target.value);
                  if (nicknameError) setNicknameError('');
                }}
                placeholder="Örn: Lefkosa_Aday2025"
                className="min-h-11 w-full rounded-md border border-[#D5CFC0] bg-white pl-10 pr-3.5 py-2 text-base font-medium text-[#171A21] placeholder:text-[#7E8594] focus:border-[#19345E] focus:outline-none sm:text-sm"
              />
            </div>

            {nicknameError && (
              <p className="mt-1.5 text-xs font-medium text-[#9A2230]" role="alert">
                {nicknameError}
              </p>
            )}

            {recentNicknames.length > 0 && (
              <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                <span className="text-xs text-[#4E5563]">Kayıtlı rumuzlar:</span>
                {recentNicknames.slice(0, 5).map((saved) => (
                  <button
                    key={saved}
                    type="button"
                    onClick={() => {
                      setNickname(saved);
                      setNicknameError('');
                    }}
                    className={`rounded border px-2 py-1 text-xs font-medium transition-colors cursor-pointer ${
                      nickname.trim().toLowerCase() === saved.toLowerCase()
                        ? 'border-[#19345E] bg-[#19345E] text-white'
                        : 'border-[#D5CFC0] bg-[#F7F4EC] text-[#171A21] hover:border-[#19345E]'
                    }`}
                  >
                    {saved}
                  </button>
                ))}
              </div>
            )}
          </section>

          {/* 2. Exam Mode */}
          <section aria-labelledby="entry-mode-label">
            <h2 id="entry-mode-label" className="text-sm font-semibold text-[#171A21]">
              2. Sınav Uygulama Modu
            </h2>
            <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setMode('simulation')}
                className={`flex flex-col justify-between rounded-md border p-4 text-left transition-colors cursor-pointer ${
                  mode === 'simulation'
                    ? 'border-[#19345E] bg-[#19345E]/6 ring-1 ring-[#19345E]'
                    : 'border-[#D5CFC0] bg-white hover:bg-[#F7F4EC]/70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-serif text-base font-semibold text-[#171A21]">
                      Gerçek Sınav Simülasyonu
                    </span>
                    <span className="font-mono text-[11px] font-semibold uppercase text-[#19345E]">
                      SÜRELİ
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#4E5563]">
                    Geri sayım sayacı ve optik cevap kağıdı ile tam sınav deneyimi. Tüm sonuçlar,
                    not analizi ve kaynak atıfları sınav bitiminde açıklanır.
                  </p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setMode('study')}
                className={`flex flex-col justify-between rounded-md border p-4 text-left transition-colors cursor-pointer ${
                  mode === 'study'
                    ? 'border-[#19345E] bg-[#19345E]/6 ring-1 ring-[#19345E]'
                    : 'border-[#D5CFC0] bg-white hover:bg-[#F7F4EC]/70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-serif text-base font-semibold text-[#171A21]">
                      Çalışma Modu
                    </span>
                    <span className="font-mono text-[11px] font-semibold uppercase text-[#1E6B43]">
                      ANINDA NOT
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#4E5563]">
                    Her soruda cevabı anında kontrol edin. Yanlış veya işaretlediğiniz sorularda
                    kapsamlı açıklamalı çalışma notu ve birebir PDF madde alıntısını görün.
                  </p>
                </div>
              </button>
            </div>
          </section>

          {/* 3. Question Count (10, 20, 30) */}
          <section aria-labelledby="entry-count-label">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 id="entry-count-label" className="text-sm font-semibold text-[#171A21]">
                3. Soru Sayısı Seçimi
              </h2>
              <span className="font-mono text-xs text-[#4E5563] tabular-nums">
                {mode === 'simulation'
                  ? `Önerilen Süre: ${suggestedMinutes} Dakika`
                  : 'Süre sınırı uygulanmaz'}
              </span>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2 sm:gap-3">
              {QUESTION_COUNTS.map((cnt) => {
                const mins = getSuggestedMinutes(cnt);
                const selected = questionCount === cnt;
                return (
                  <button
                    key={cnt}
                    type="button"
                    onClick={() => setQuestionCount(cnt)}
                    className={`flex min-h-14 flex-col items-center justify-center rounded-md border px-2 py-2.5 transition-colors cursor-pointer sm:px-3 ${
                      selected
                        ? 'border-[#19345E] bg-[#19345E] text-white'
                        : 'border-[#D5CFC0] bg-white text-[#171A21] hover:border-[#19345E] hover:bg-[#F7F4EC]'
                    }`}
                  >
                    <span className="font-mono text-base font-bold tabular-nums sm:text-lg">
                      {cnt} Soru
                    </span>
                    <span
                      className={`mt-0.5 font-mono text-[10px] tabular-nums sm:text-[11px] ${
                        selected ? 'text-white/85' : 'text-[#4E5563]'
                      }`}
                    >
                      {mins} dk · {Math.round((100 / cnt) * 10) / 10} p
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* 4. Topic Scope */}
          <section aria-labelledby="entry-scope-label">
            <h2 id="entry-scope-label" className="text-sm font-semibold text-[#171A21]">
              4. Sınav Konu Kapsamı
            </h2>
            <div className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {SCOPE_OPTIONS.map((opt) => {
                const selected = scope === opt.id;
                const isWeaknessDisabled = opt.id === 'weakness' && totalRecordedErrors === 0;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    disabled={isWeaknessDisabled}
                    onClick={() => setScope(opt.id)}
                    className={`rounded-md border p-3.5 text-left transition-colors ${
                      isWeaknessDisabled
                        ? 'cursor-not-allowed border-[#E7E2D4] bg-[#F7F4EC]/50 opacity-60'
                        : selected
                          ? 'cursor-pointer border-[#19345E] bg-[#19345E]/6 ring-1 ring-[#19345E]'
                          : 'cursor-pointer border-[#D5CFC0] bg-white hover:bg-[#F7F4EC]/70'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-[#171A21]">{opt.title}</span>
                      {opt.id === 'weakness' && totalRecordedErrors > 0 && (
                        <span className="font-mono text-[11px] font-semibold text-[#9A2230] tabular-nums">
                          {weakTopicCount} zayıf konu
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-[#4E5563]">
                      {isWeaknessDisabled
                        ? 'Henüz kayıtlı hatalı sorunuz bulunmuyor; önce en az bir sınav tamamlayın.'
                        : opt.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Pool Rotation Coverage Strip */}
          <div className="flex flex-col gap-2.5 rounded-md border border-[#E7E2D4] bg-[#F7F4EC]/70 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-2.5 text-xs text-[#4E5563]">
              <RefreshCw className="mt-0.5 h-4 w-4 shrink-0 text-[#19345E]" />
              <div>
                <span className="font-semibold text-[#171A21]">
                  Yeni Soru Rotasyonu:{' '}
                  <span className="font-mono tabular-nums text-[#19345E]">
                    {poolStats.unseenCount} / {poolStats.totalInScope}
                  </span>{' '}
                  görülmemiş soru
                </span>
                <p className="mt-0.5 text-[11px] leading-relaxed text-[#4E5563]">
                  {poolStats.unseenCount > 0
                    ? 'Her oturumda önce henüz çözmediğiniz sorular seçilir; aynı sorular arka arkaya tekrar edilmez.'
                    : 'Bu kapsamdaki tüm soruları en az bir kez çözdünüz. En eski görülen sorular yeni birleşimlerle sorulur.'}
                </p>
              </div>
            </div>

            {poolStats.seenCount > 0 && (
              <button
                type="button"
                onClick={onResetQuestionCycle}
                className="inline-flex min-h-9 w-full shrink-0 items-center justify-center gap-1.5 rounded border border-[#D5CFC0] bg-white px-3 py-1.5 text-[11px] font-semibold text-[#19345E] transition-colors hover:border-[#19345E] cursor-pointer sm:w-auto"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Soru Döngüsünü Sıfırla</span>
              </button>
            )}
          </div>

          {/* Submit Footer */}
          <div className="flex flex-col-reverse items-stretch justify-between gap-3 border-t border-[#E7E2D4] pt-5 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={onOpenLegislation}
              className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md border border-[#D5CFC0] bg-[#F7F4EC] px-4 py-2 text-xs font-semibold text-[#171A21] hover:border-[#19345E] cursor-pointer"
            >
              <span>Kaynak PDF Mevzuatını İncele</span>
            </button>

            <button
              type="submit"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#19345E] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#122645] cursor-pointer sm:w-auto"
            >
              <span>Sınav Kitapçığını Aç ve Başlat</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
