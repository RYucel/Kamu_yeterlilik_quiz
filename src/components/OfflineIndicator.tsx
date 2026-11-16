import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export function OfflineIndicator() {
  const isOnline = useOnlineStatus();
  if (isOnline) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="border-b border-[#A66A14]/35 bg-[#A66A14]/10 px-4 py-2 text-xs text-[#704609]"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 font-medium">
        <WifiOff className="h-4 w-4 shrink-0 text-[#A66A14]" />
        <span>
          Çevrimdışı moddasınız. Sınav soruları, yerel puan tablonuz ve önbelleğe alınmış mevzuat
          belgeleri sorunsuz çalışmaya devam eder.
        </span>
      </div>
    </div>
  );
}
