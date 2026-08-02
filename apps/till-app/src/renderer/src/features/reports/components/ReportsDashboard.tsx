import React from 'react'
import type { ReportSummary } from '../types'
import { AnalyticsCards } from './AnalyticsCards'

export interface ReportsDashboardProps {
  summary: ReportSummary
}

export const ReportsDashboard = React.memo<ReportsDashboardProps>(({ summary }) => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="mb-1 text-lg font-semibold text-[var(--color-text-main)]">
          Overview
        </h2>
        <p className="text-sm text-[var(--color-text-muted)]">
          Key performance indicators for your store.
        </p>
      </div>
      <AnalyticsCards summary={summary} />
    </div>
  )
})

ReportsDashboard.displayName = 'ReportsDashboard'
