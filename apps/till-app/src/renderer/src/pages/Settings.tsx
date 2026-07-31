import { EmptyState } from '../components/feedback/EmptyState'

export default function Settings() {
  return (
    <div className="flex flex-col h-full bg-[var(--color-bg-surface)] rounded-[var(--radius-lg)] border border-[var(--color-border-default)]">
      <EmptyState 
        title="Settings" 
        description="Application configuration UI will be implemented here." 
      />
    </div>
  )
}
