import { EmptyState } from '../components/feedback/EmptyState'

export default function Sales() {
  return (
    <div className="flex flex-col h-full bg-[var(--color-bg-surface)] rounded-[var(--radius-lg)] border border-[var(--color-border-default)]">
      <EmptyState 
        title="Sales Terminal" 
        description="Point of Sale interface will be implemented here." 
      />
    </div>
  )
}
