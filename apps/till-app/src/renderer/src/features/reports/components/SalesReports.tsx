import React from 'react'
import type { SalesReport } from '../types'
import { SalesReportsSummary } from './SalesReportsSummary'
import { SalesReportFilters } from './SalesReportFilters'
import { SalesReportsTable } from './SalesReportsTable'
import { Divider } from '../../../components/common/Divider'

export interface SalesReportsProps {
  salesReports: SalesReport[]
}

export const SalesReports = React.memo<SalesReportsProps>(({ salesReports }) => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="mb-1 text-lg font-semibold text-[var(--color-text-main)]">Sales Reports</h2>
        <p className="text-sm text-[var(--color-text-muted)]">
          Daily sales performance records for your store.
        </p>
      </div>

      <SalesReportsSummary salesReports={salesReports} />

      <Divider />

      <SalesReportFilters />

      <SalesReportsTable salesReports={salesReports} />
    </div>
  )
})

SalesReports.displayName = 'SalesReports'
