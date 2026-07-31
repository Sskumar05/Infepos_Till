import { InputHTMLAttributes, forwardRef, useId } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, error, disabled, id, ...props }, ref) => {
    const generatedId = useId()
    const inputId = id || generatedId
    
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={inputId} 
            className={`block text-sm font-medium mb-1.5 ${disabled ? 'text-[var(--color-text-muted)]' : 'text-[var(--color-text-main)]'}`}
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          disabled={disabled}
          className={`flex h-10 w-full rounded-[var(--radius-md)] border bg-[var(--color-bg-surface)] px-3 py-2 text-sm text-[var(--color-text-main)] placeholder:text-[var(--color-text-muted)] transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 ${
            error 
              ? 'border-[var(--color-brand-danger)] focus-visible:ring-[var(--color-brand-danger)]' 
              : 'border-[var(--color-border-default)] focus-visible:ring-[var(--color-brand-primary)]'
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-[var(--color-brand-danger)]" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'
