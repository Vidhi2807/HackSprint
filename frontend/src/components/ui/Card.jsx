import { cn } from '@/utils';

export default function Card({ className, children, hover = false, glow = false, ...props }) {
  return (
    <div
      className={cn(
        'glass-card',
        hover && 'hover:bg-surface-800/60 hover:border-surface-600/40 transition-all duration-300 cursor-pointer',
        glow && 'hover:shadow-glow',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

Card.Header = function CardHeader({ className, children }) {
  return (
    <div className={cn('flex items-center justify-between mb-4', className)}>
      {children}
    </div>
  );
};

Card.Title = function CardTitle({ className, children }) {
  return (
    <h3 className={cn('text-lg font-semibold text-white', className)}>
      {children}
    </h3>
  );
};

Card.Content = function CardContent({ className, children }) {
  return <div className={cn('', className)}>{children}</div>;
};
