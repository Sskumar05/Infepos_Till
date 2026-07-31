import { EmptyState } from '../components/feedback/EmptyState'

export default function Products() {
  return (
    <div className="flex flex-col h-full bg-[var(--color-bg-surface)] rounded-[var(--radius-lg)] border border-[var(--color-border-default)]">
      <EmptyState 
        title="Products" 
        description="Product catalog management UI will be implemented here." 
      />
    </div>
  )
}
