import { forwardRef } from 'react';
import { cn } from '@/utils';

const variants = {
  primary:
    'bg-primary-600 hover:bg-primary-700 text-white shadow-glow hover:shadow-glow-lg',
  secondary:
    'bg-surface-800/50 hover:bg-surface-700/50 text-surface-200 border border-surface-700/30',
  ghost:
    'bg-transparent hover:bg-surface-800/40 text-surface-300 hover:text-white',
  danger:
    'bg-red-600/80 hover:bg-red-600 text-white',
  outline:
    'bg-transparent border border-primary-500/40 text-primary-400 hover:bg-primary-500/10',
};

const sizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-2.5 text-base',
  icon: 'p-2',
};

const Button = forwardRef(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-xl font-medium',
          'transition-all duration-200 ease-out',
          'focus:outline-none focus:ring-2 focus:ring-primary-500/40',
          'disabled:opacity-50 disabled:pointer-events-none',
          'active:scale-[0.98]',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
