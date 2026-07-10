import { cn } from '@/utils';

export default function Loader({ className, size = 'md', text }) {
  const sizes = {
    sm: 'w-5 h-5 border-2',
    md: 'w-8 h-8 border-[3px]',
    lg: 'w-12 h-12 border-4',
  };

  return (
    <div className={cn('flex flex-col items-center justify-center gap-3', className)}>
      <div
        className={cn(
          'rounded-full border-surface-700 border-t-primary-500 animate-spin',
          sizes[size]
        )}
      />
      {text && <p className="text-sm text-surface-400 animate-pulse">{text}</p>}
    </div>
  );
}

// Full page loader
export function PageLoader() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Loader size="lg" text="Loading..." />
    </div>
  );
}
