import { InputHTMLAttributes, forwardRef, useId } from 'react'

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = '', label, id, ...props }, ref) => {
    const generatedId = useId()
    const checkboxId = id || generatedId
    
    return (
      <div className="flex items-center">
        <input
          id={checkboxId}
          type="checkbox"
          ref={ref}
          className={`h-4 w-4 rounded border-[var(--color-border-default)] bg-[var(--color-bg-surface)] text-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-base)] transition-colors ${className}`}
          {...props}
        />
        {label && (
          <label htmlFor={checkboxId} className="ml-2 block text-sm font-medium text-[var(--color-text-main)] cursor-pointer">
            {label}
          </label>
        )}
      </div>
    )
  }
)
Checkbox.displayName = 'Checkbox'
