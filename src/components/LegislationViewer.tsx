import { BookOpen, Download, ExternalLink, FileText, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { ALL_QUESTIONS } from '../data/questions';
import type { LawType } from '../types/exam';

const BASE_URL = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const PDF_SOURCES: Array<{
  id: LawType;
  title: string;
  subtitle: string;
  path: string;
  filename: string;
  pages: number;
}> = [
  {
    id: 'kgy',
    title: 'Kamu Görevlileri Yasası (Sayı: 7/1979)',
    subtitle: 'Resmî mevzuat metni · Değişikliklerle işlenmiş tam metin',
    path: `${BASE_URL}assets/aistudio/Kamu_Gorevlileri_Yasasi_7110c33f.pdf`,
    filename: 'Kamu_Gorevlileri_Yasasi_7_1979.pdf',
    pages: 111,
  },
  {
    id: 'anayasa',
    title: 'Kuzey Kıbrıs Türk Cumhuriyeti Anayasası (5 Mayıs 1985)',
    subtitle: 'Başlangıç Kısmı ve 164 Madde tam metin',
    path: `${BASE_URL}assets/aistudio/KKTCAnayasa_5192cae2.pdf`,
    filename: 'KKTC_Anayasasi_1985.pdf',
    pages: 63,
  },
];

export function LegislationViewer() {
  const [activePdf, setActivePdf] = useState<LawType>('kgy');
  const [showEmbeddedPdf, setShowEmbeddedPdf] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [lawFilter, setLawFilter] = useState<LawType | 'all'>('all');

  const currentPdf = PDF_SOURCES.find((p) => p.id === activePdf) ?? PDF_SOURCES[0];

  const filteredReferences = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return ALL_QUESTIONS.filter((item) => {
      if (lawFilter !== 'all' && item.law !== lawFilter) return false;
      if (!q) return true;
      return (
        item.topic.toLowerCase().includes(q) ||
        item.citation.article.toLowerCase().includes(q) ||
        item.citation.exactQuote.toLowerCase().includes(q) ||
        item.studyNote.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, lawFilter]);

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-6 sm:px-6">
      {/* Official PDF Cards */}
      <section className="rounded-md border border-[#D5CFC0] bg-white p-5 exam-paper-shadow sm:p-6">
        <div className="border-b border-[#E7E2D4] pb-4">
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#19345E]">
            Resmî Mevzuat Belgeleri (Çevrimdışı Önbellekli)
          </p>
          <h1 className="mt-1 font-serif text-2xl font-bold text-[#171A21]">
            Kaynak Mevzuat ve Madde Dizini
          </h1>
          <p className="mt-1 text-sm text-[#4E5563]">
            Uygulamadaki {ALL_QUESTIONS.length} sorunun tamamı aşağıda yer alan iki resmî PDF
            belgesinden birebir madde ve sayfa atfıyla hazırlanmıştır.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PDF_SOURCES.map((doc) => {
            const isSelected = activePdf === doc.id && showEmbeddedPdf;
            return (
              <div
                key={doc.id}
                className={`flex flex-col justify-between rounded-md border p-4 ${
                  isSelected ? 'border-[#19345E] bg-[#19345E]/5' : 'border-[#D5CFC0] bg-[#F7F4EC]/50'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <FileText className="h-5 w-5 shrink-0 text-[#19345E]" />
                    <span className="font-mono text-[11px] font-semibold text-[#4E5563] tabular-nums">
                      {doc.pages} Sayfa PDF
                    </span>
                  </div>
                  <h2 className="mt-2 font-serif text-base font-bold text-[#171A21]">
                    {doc.title}
                  </h2>
                  <p className="mt-1 text-xs text-[#4E5563]">{doc.subtitle}</p>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setActivePdf(doc.id);
                      setShowEmbeddedPdf(true);
                    }}
                    className="inline-flex min-h-10 items-center gap-1.5 rounded bg-[#19345E] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#122645] cursor-pointer"
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>Sayfada Görüntüle</span>
                  </button>
                  <a
                    href={doc.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center gap-1.5 rounded border border-[#D5CFC0] bg-white px-3 py-1.5 text-xs font-semibold text-[#171A21] hover:border-[#19345E]"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>Tam Ekran Aç</span>
                  </a>
                  <a
                    href={doc.path}
                    download={doc.filename}
                    className="inline-flex min-h-10 items-center gap-1.5 rounded border border-[#D5CFC0] bg-white px-3 py-1.5 text-xs font-semibold text-[#171A21] hover:border-[#19345E]"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>İndir</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {showEmbeddedPdf && (
          <div className="mt-5 rounded-md border border-[#D5CFC0] bg-[#F7F4EC] p-3">
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="text-xs font-semibold text-[#19345E]">{currentPdf.title}</span>
              <button
                type="button"
                onClick={() => setShowEmbeddedPdf(false)}
                className="rounded border border-[#D5CFC0] bg-white px-2.5 py-1 text-xs font-semibold text-[#4E5563] hover:text-[#171A21] cursor-pointer"
              >
                Önizlemeyi Gizle
              </button>
            </div>
            <iframe
              src={currentPdf.path}
              title={currentPdf.title}
              className="h-[420px] w-full rounded border border-[#D5CFC0] bg-white sm:h-[520px]"
            />
          </div>
        )}
      </section>

      {/* Searchable Verbatim Article & Note Index */}
      <section className="rounded-md border border-[#D5CFC0] bg-white p-5 exam-paper-shadow sm:p-6">
        <div className="flex flex-col gap-3 border-b border-[#E7E2D4] pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-lg font-bold text-[#171A21]">
              Doğrulanmış Madde &amp; Alıntı Rehberi ({filteredReferences.length})
            </h2>
            <p className="text-xs text-[#4E5563]">
              Sınav konularına ait madde numaraları, birebir kanun alıntıları ve çalışma notları
              içinde hızlı arama yapın.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {(['all', 'kgy', 'anayasa'] as const).map((law) => (
              <button
                key={law}
                type="button"
                onClick={() => setLawFilter(law)}
                className={`min-h-9 rounded border px-2.5 py-1 text-xs font-semibold cursor-pointer ${
                  lawFilter === law
                    ? 'border-[#19345E] bg-[#19345E] text-white'
                    : 'border-[#D5CFC0] bg-[#F7F4EC] text-[#171A21]'
                }`}
              >
                {law === 'all' ? 'Tümü' : law === 'kgy' ? '7/1979 KGY' : 'Anayasa'}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4E5563]" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Madde no, konu veya kavram ara (örn: adaylık, 24 saat, üçlü kararname, disiplin)..."
            className="min-h-11 w-full rounded-md border border-[#D5CFC0] bg-[#F7F4EC]/50 pl-10 pr-3.5 py-2 text-base text-[#171A21] placeholder:text-[#7E8594] focus:border-[#19345E] focus:bg-white focus:outline-none sm:text-sm"
          />
        </div>

        <div className="mt-4 space-y-3">
          {filteredReferences.slice(0, 30).map((item) => (
            <div
              key={item.id}
              className="rounded border border-[#E7E2D4] bg-[#F7F4EC]/40 p-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-mono font-bold text-[#19345E]">
                  {item.citation.lawShort} · {item.citation.article}
                  {item.citation.clause ? ` ${item.citation.clause}` : ''}
                </span>
                <span className="font-mono text-[#4E5563] tabular-nums">
                  {item.topic} · PDF Sayfa {item.citation.page}
                </span>
              </div>
              <blockquote className="mt-2 font-serif text-sm italic leading-relaxed text-[#171A21]">
                “{item.citation.exactQuote}”
              </blockquote>
              <p className="mt-2 text-xs leading-relaxed text-[#4E5563]">{item.studyNote}</p>
            </div>
          ))}
          {filteredReferences.length > 30 && (
            <p className="text-center text-xs text-[#4E5563]">
              İlk 30 eşleşme gösteriliyor. Daha dar bir arama kelimesi yazarak tüm{' '}
              {filteredReferences.length} kaydı süzebilirsiniz.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
