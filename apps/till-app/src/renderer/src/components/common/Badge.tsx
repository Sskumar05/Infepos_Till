import { HTMLAttributes, forwardRef } from 'react'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'danger' | 'neutral'
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(({ className = '', variant = 'neutral', children, ...props }, ref) => {
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-[var(--radius-full)] text-xs font-medium'
  
  const variants = {
    neutral: 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)]',
    success: 'bg-green-100 text-[var(--color-brand-success)]',
    warning: 'bg-yellow-100 text-[var(--color-brand-warning)]',
    danger: 'bg-red-100 text-[var(--color-brand-danger)]',
  }

  return (
    <span ref={ref} className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  )
})
Badge.displayName = 'Badge'
