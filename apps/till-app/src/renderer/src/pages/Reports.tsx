import { EmptyState } from '../components/feedback/EmptyState'

export default function Reports() {
  return (
    <div className="flex flex-col h-full bg-[var(--color-bg-surface)] rounded-[var(--radius-lg)] border border-[var(--color-border-default)]">
      <EmptyState 
        title="Reports" 
        description="Analytics and reporting dashboards will be implemented here." 
      />
    </div>
  )
}
