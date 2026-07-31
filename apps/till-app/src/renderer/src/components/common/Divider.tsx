import { HTMLAttributes, forwardRef } from 'react'

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical'
}

export const Divider = forwardRef<HTMLHRElement, DividerProps>(({ className = '', orientation = 'horizontal', ...props }, ref) => {
  return (
    <hr
      ref={ref}
      className={`border-0 bg-[var(--color-border-divider)] ${
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px'
      } ${className}`}
      {...props}
    />
  )
})
Divider.displayName = 'Divider'
