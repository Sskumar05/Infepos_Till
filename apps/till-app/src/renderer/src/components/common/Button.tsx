import { ButtonHTMLAttributes, forwardRef } from 'react'
import { Spinner } from '../feedback/Spinner'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  isLoading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', isLoading = false, disabled, children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-[var(--radius-md)] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2'
    
    const variants = {
      primary: 'bg-[var(--color-brand-primary)] text-[var(--color-bg-surface)] hover:bg-[var(--color-action-focus)]',
      secondary: 'bg-[var(--color-bg-surface)] text-[var(--color-text-main)] border border-[var(--color-border-default)] hover:bg-[var(--color-action-hover)]',
      ghost: 'hover:bg-[var(--color-action-hover)] text-[var(--color-text-main)]',
      danger: 'bg-[var(--color-brand-danger)] text-white hover:bg-red-600',
    }

    const ringColors = {
      primary: 'focus-visible:ring-[var(--color-brand-primary)]',
      secondary: 'focus-visible:ring-[var(--color-text-muted)]',
      ghost: 'focus-visible:ring-[var(--color-text-muted)]',
      danger: 'focus-visible:ring-[var(--color-brand-danger)]',
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseClasses} ${variants[variant]} ${ringColors[variant]} ${className}`}
        {...props}
      >
        {isLoading && <Spinner size="sm" className="mr-2" />}
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
