import { Globe, Shield, ShieldCheck, ShieldAlert } from 'lucide-react';
import { cn } from '@/utils';

const trustColors = {
  high: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', icon: ShieldCheck },
  medium: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400', icon: Shield },
  low: { bg: 'bg-red-500/10', border: 'border-red-500/20', text: 'text-red-400', icon: ShieldAlert },
  unknown: { bg: 'bg-surface-700/20', border: 'border-surface-700/30', text: 'text-surface-400', icon: Globe },
};

export default function WebsiteBadge({ url, trust = 'unknown', className }) {
  const style = trustColors[trust];
  const TrustIcon = style.icon;

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-sm',
        style.bg,
        style.border,
        className
      )}
    >
      <TrustIcon size={14} className={style.text} />
      <span className="text-surface-300 truncate max-w-[200px]">
        {url || 'unknown'}
      </span>
    </div>
  );
}
