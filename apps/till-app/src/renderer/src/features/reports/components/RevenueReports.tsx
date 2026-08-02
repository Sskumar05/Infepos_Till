import React from 'react'
import type { RevenueReport } from '../types'
import { RevenueReportsSummary } from './RevenueReportsSummary'
import { RevenueReportFilters } from './RevenueReportFilters'
import { RevenueReportsTable } from './RevenueReportsTable'
import { Divider } from '../../../components/common/Divider'

export interface RevenueReportsProps {
  revenueReports: RevenueReport[]
}

export const RevenueReports = React.memo<RevenueReportsProps>(({ revenueReports }) => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="mb-1 text-lg font-semibold text-[var(--color-text-main)]">
          Revenue Reports
        </h2>
        <p className="text-sm text-[var(--color-text-muted)]">
          Monthly revenue, expenses, and profit overview for your store.
        </p>
      </div>

      <RevenueReportsSummary revenueReports={revenueReports} />

      <Divider />

      <RevenueReportFilters />

      <RevenueReportsTable revenueReports={revenueReports} />
    </div>
  )
})

RevenueReports.displayName = 'RevenueReports'
