import { EmptyState } from '../components/feedback/EmptyState'

export default function Inventory() {
  return (
    <div className="flex flex-col h-full bg-[var(--color-bg-surface)] rounded-[var(--radius-lg)] border border-[var(--color-border-default)]">
      <EmptyState 
        title="Inventory" 
        description="Stock management UI will be implemented here." 
      />
    </div>
  )
}
