import { EmptyState } from '../components/feedback/EmptyState'
import { Button } from '../components/common/Button'

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-[var(--color-bg-surface)] rounded-[var(--radius-lg)] border border-[var(--color-border-default)]">
      <EmptyState 
        title="Home Screen" 
        description="Welcome to INFYPOS Till Application." 
        action={<Button variant="primary">Get Started</Button>}
      />
    </div>
  )
}
