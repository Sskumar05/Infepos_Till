import React, { ReactNode } from 'react'
import { Card, CardBody } from '../../../components/common/Card'

export interface AnalyticsCardProps {
  title: string
  value: string
  icon: ReactNode
  color: string
}

export const AnalyticsCard = React.memo<AnalyticsCardProps>(({ title, value, icon, color }) => {
  return (
    <Card className="flex-1 min-w-0">
      <CardBody className="flex items-center gap-4 p-5">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-lg)]"
          style={{ backgroundColor: `${color}1a` }}
        >
          <span style={{ color }}>{icon}</span>
        </div>
        <div className="min-w-0">
          <p className="truncate text-xs font-medium uppercase tracking-wide text-[var(--color-text-muted)]">
            {title}
          </p>
          <p className="mt-1 truncate text-2xl font-bold text-[var(--color-text-main)]">{value}</p>
        </div>
      </CardBody>
    </Card>
  )
})

AnalyticsCard.displayName = 'AnalyticsCard'
