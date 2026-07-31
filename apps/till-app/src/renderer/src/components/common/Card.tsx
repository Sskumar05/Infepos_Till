import { HTMLAttributes, forwardRef } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className = '', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`bg-[var(--color-bg-card)] border border-[var(--color-border-default)] rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] overflow-hidden ${className}`}
      {...props}
    />
  )
})
Card.displayName = 'Card'

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className = '', ...props }, ref) => (
  <div ref={ref} className={`px-6 py-4 border-b border-[var(--color-border-divider)] ${className}`} {...props} />
))
CardHeader.displayName = 'CardHeader'

export const CardBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className = '', ...props }, ref) => (
  <div ref={ref} className={`p-6 ${className}`} {...props} />
))
CardBody.displayName = 'CardBody'

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className = '', ...props }, ref) => (
  <div ref={ref} className={`px-6 py-4 border-t border-[var(--color-border-divider)] bg-[var(--color-bg-base)] ${className}`} {...props} />
))
CardFooter.displayName = 'CardFooter'
