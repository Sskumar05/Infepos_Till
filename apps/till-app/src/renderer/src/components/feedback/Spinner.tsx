import { HTMLAttributes, forwardRef } from 'react'

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(({ className = '', size = 'md', ...props }, ref) => {
  const sizes = {
    sm: 'h-4 w-4 border-2',
    md: 'h-6 w-6 border-2',
    lg: 'h-8 w-8 border-3',
  }

  return (
    <div ref={ref} className={`flex justify-center items-center ${className}`} {...props}>
      <div
        className={`animate-spin rounded-[var(--radius-full)] border-t-[var(--color-brand-primary)] border-r-[var(--color-brand-primary)] border-b-[var(--color-border-default)] border-l-[var(--color-border-default)] ${sizes[size]}`}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
})
Spinner.displayName = 'Spinner'
