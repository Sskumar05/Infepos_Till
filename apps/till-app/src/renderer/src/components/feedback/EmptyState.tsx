import { HTMLAttributes, ReactNode, forwardRef } from 'react'

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  icon?: ReactNode
  action?: ReactNode
}

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className = '', title, description, icon, action, ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`flex flex-col items-center justify-center p-8 text-center min-h-[200px] ${className}`}
        {...props}
      >
        {icon && (
          <div className="mb-4 text-[var(--color-text-muted)] flex justify-center">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-[var(--color-text-main)] mb-1">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-[var(--color-text-muted)] max-w-sm mb-4">
            {description}
          </p>
        )}
        {action && (
          <div className="mt-2">
            {action}
          </div>
        )}
      </div>
    )
  }
)
EmptyState.displayName = 'EmptyState'
