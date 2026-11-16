import { Download, Share, X } from 'lucide-react';
import { useState } from 'react';
import { ALL_QUESTIONS } from '../data/questions';
import { usePWAInstall } from '../hooks/usePWAInstall';

export function PWAInstallButton() {
  const { canInstall, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  if (isInstalled) return null;

  const handleClick = async () => {
    if (canInstall) {
      await install();
      return;
    }
    setShowIOSGuide(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="inline-flex min-h-10 items-center gap-1.5 rounded-md border border-[#19345E] bg-[#19345E] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#122645] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#19345E] cursor-pointer"
        title="Uygulamayı telefona veya bilgisayara yükle (Çevrimdışı çalışma)"
      >
        <Download className="h-3.5 w-3.5 shrink-0" />
        <span>{canInstall ? 'Uygulamayı Kur' : 'Uygulamayı Yükle'}</span>
      </button>

      {showIOSGuide && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pwa-install-guide-title"
        >
          <div className="w-full max-w-md rounded-md border border-[#D5CFC0] bg-white p-5 shadow-xl">
            <div className="flex items-start justify-between gap-3 border-b border-[#E7E2D4] pb-3">
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#19345E]">
                  PWA Kurulum Yönergesi
                </p>
                <h2
                  id="pwa-install-guide-title"
                  className="mt-0.5 font-serif text-lg font-semibold text-[#171A21]"
                >
                  Ana Ekrana Ekle &amp; Çevrimdışı Kullan
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-[#D5CFC0] text-[#4E5563] hover:bg-[#F7F4EC] cursor-pointer"
                aria-label="Kapat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#4E5563]">
              {isIOS ? (
                <>
                  <p>
                    iPhone / iPad Safari tarayıcısında uygulamayı telefona kurmak için aşağıdaki
                    adımları izleyin:
                  </p>
                  <ol className="list-decimal space-y-2 pl-5 text-[#171A21]">
                    <li className="flex flex-wrap items-center gap-1.5">
                      <span>Alt araç çubuğundaki</span>
                      <span className="inline-flex items-center gap-1 rounded border border-[#D5CFC0] bg-[#F7F4EC] px-1.5 py-0.5 text-xs font-semibold text-[#19345E]">
                        <Share className="h-3.5 w-3.5" /> Paylaş
                      </span>
                      <span>düğmesine dokunun.</span>
                    </li>
                    <li>
                      Açılan menüden <strong>“Ana Ekrana Ekle”</strong> seçeneğini seçin.
                    </li>
                    <li>
                      Sağ üst köşedeki <strong>“Ekle”</strong> düğmesine dokunarak kurulumu
                      tamamlayın.
                    </li>
                  </ol>
                </>
              ) : (
                <>
                  <p>
                    Android telefonlarda (Chrome / Edge / Samsung Internet) veya masaüstünde
                    uygulamayı kurmak için:
                  </p>
                  <ol className="list-decimal space-y-2 pl-5 text-[#171A21]">
                    <li>
                      Tarayıcının sağ üst köşesindeki <strong>⋮ (Menü)</strong> veya adres
                      çubuğundaki yükleme simgesine dokunun.
                    </li>
                    <li>
                      <strong>“Uygulamayı yükle”</strong> veya{' '}
                      <strong>“Ana ekrana ekle”</strong> seçeneğini onaylayın.
                    </li>
                  </ol>
                </>
              )}
              <p className="rounded border border-[#D5CFC0] bg-[#F7F4EC] p-3 text-xs text-[#4E5563]">
                Kurulum tamamlandığında hem {ALL_QUESTIONS.length} soruluk çalışma bankası hem de
                resmi mevzuat PDF metinleri internet bağlantısı olmadan da kullanılabilir.
              </p>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="min-h-10 rounded-md bg-[#19345E] px-4 py-2 text-sm font-semibold text-white hover:bg-[#122645] cursor-pointer"
              >
                Anladım
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
