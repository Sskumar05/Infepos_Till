import React from 'react'
import type { CustomerReport } from '../types'
import { CustomerReportsSummary } from './CustomerReportsSummary'
import { CustomerReportFilters } from './CustomerReportFilters'
import { CustomerReportsTable } from './CustomerReportsTable'
import { Divider } from '../../../components/common/Divider'

export interface CustomerReportsProps {
  customerReports: CustomerReport[]
}

export const CustomerReports = React.memo<CustomerReportsProps>(({ customerReports }) => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="mb-1 text-lg font-semibold text-[var(--color-text-main)]">
          Customer Reports
        </h2>
        <p className="text-sm text-[var(--color-text-muted)]">
          Customer acquisition, retention, and loyalty tier distribution.
        </p>
      </div>

      <CustomerReportsSummary customerReports={customerReports} />

      <Divider />

      <CustomerReportFilters />

      <CustomerReportsTable customerReports={customerReports} />
    </div>
  )
})

CustomerReports.displayName = 'CustomerReports'
