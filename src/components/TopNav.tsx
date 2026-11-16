import { BarChart3, BookOpen, ClipboardCheck, FileText, Trophy } from 'lucide-react';
import type { AppView } from '../types/exam';
import { PWAInstallButton } from './PWAInstallButton';

interface TopNavProps {
  activeView: AppView;
  isInActiveExam: boolean;
  onNavigate: (view: AppView) => void;
}

const NAV_ITEMS: Array<{
  id: AppView;
  label: string;
  shortLabel: string;
  icon: typeof ClipboardCheck;
}> = [
  { id: 'entry', label: 'Sınav Girişi', shortLabel: 'Sınav', icon: ClipboardCheck },
  { id: 'analysis', label: 'Konu Analizi', shortLabel: 'Analiz', icon: BarChart3 },
  { id: 'scoreboard', label: 'Puan Tablosu', shortLabel: 'Puanlar', icon: Trophy },
  { id: 'legislation', label: 'Kaynak Mevzuat', shortLabel: 'Mevzuat', icon: BookOpen },
];

export function TopNav({ activeView, isInActiveExam, onNavigate }: TopNavProps) {
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-[#D5CFC0] bg-white/95 backdrop-blur-sm safe-pt">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3.5 py-2.5 sm:gap-3 sm:px-6">
          {/* Left: Emblem */}
          <button
            type="button"
            onClick={() => onNavigate('entry')}
            className="flex min-h-10 items-center gap-2 text-left cursor-pointer group sm:gap-2.5"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-[#19345E] bg-[#19345E] text-white">
              <FileText className="h-4.5 w-4.5" />
            </span>
            <span className="hidden sm:block leading-tight">
              <span className="block font-mono text-[11px] font-semibold tracking-wider text-[#19345E]">
                KKTC YETERLİK
              </span>
              <span className="block text-xs font-medium text-[#4E5563] group-hover:text-[#171A21]">
                Kamuya Giriş Sınav Simülatörü
              </span>
            </span>
            <span className="block sm:hidden leading-tight">
              <span className="block font-mono text-xs font-bold tracking-wider text-[#19345E]">
                KKTC YETERLİK
              </span>
              <span className="block text-[10px] font-medium text-[#4E5563]">
                Sınav Simülatörü
              </span>
            </span>
          </button>

          {/* Desktop/Tablet: 4 Navigation Tabs */}
          <nav
            aria-label="Ana menü"
            className="hidden md:flex items-center gap-1"
          >
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isCurrent =
                activeView === item.id || (activeView === 'session' && item.id === 'entry');
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate(item.id)}
                  className={`inline-flex min-h-10 shrink-0 items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                    isCurrent
                      ? 'border-[#19345E] bg-[#19345E]/8 text-[#19345E]'
                      : 'border-transparent text-[#4E5563] hover:border-[#D5CFC0] hover:bg-[#F7F4EC] hover:text-[#171A21]'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right: Active Exam return or PWA Install */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            {isInActiveExam && activeView !== 'session' && (
              <button
                type="button"
                onClick={() => onNavigate('session')}
                className="inline-flex min-h-10 items-center gap-1.5 rounded-md border border-[#9A2230] bg-[#9A2230]/8 px-2.5 py-1.5 text-xs font-semibold text-[#9A2230] hover:bg-[#9A2230]/15 cursor-pointer sm:px-3"
              >
                <span>Sınava Dön</span>
              </button>
            )}
            <PWAInstallButton />
          </div>
        </div>
      </header>

      {/* Mobile-First Bottom Tab Navigation (hidden inside active exam session so thumb-bar stays clean) */}
      {activeView !== 'session' && (
        <nav
          aria-label="Mobil alt menü"
          className="fixed bottom-0 inset-x-0 z-40 border-t border-[#D5CFC0] bg-white/95 backdrop-blur-sm safe-pb md:hidden"
        >
          <div className="grid grid-cols-4">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isCurrent = activeView === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate(item.id)}
                  className={`flex min-h-14 flex-col items-center justify-center gap-1 px-1 py-1.5 text-[11px] font-semibold transition-colors cursor-pointer ${
                    isCurrent
                      ? 'text-[#19345E] bg-[#19345E]/6'
                      : 'text-[#4E5563] hover:text-[#171A21]'
                  }`}
                >
                  <Icon
                    className={`h-4.5 w-4.5 shrink-0 ${
                      isCurrent ? 'text-[#19345E]' : 'text-[#4E5563]'
                    }`}
                  />
                  <span>{item.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </>
  );
}
