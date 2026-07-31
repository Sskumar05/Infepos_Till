import { EmptyState } from '../components/feedback/EmptyState'

export default function Customers() {
  return (
    <div className="flex flex-col h-full bg-[var(--color-bg-surface)] rounded-[var(--radius-lg)] border border-[var(--color-border-default)]">
      <EmptyState 
        title="Customers" 
        description="Customer directory and CRM features will be implemented here." 
      />
    </div>
  )
}
