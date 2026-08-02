import React from 'react'
import type { TaxReport } from '../types'
import { TaxReportsSummary } from './TaxReportsSummary'
import { TaxReportFilters } from './TaxReportFilters'
import { TaxReportsTable } from './TaxReportsTable'
import { Divider } from '../../../components/common/Divider'

export interface TaxReportsProps {
  taxReports: TaxReport[]
}

export const TaxReports = React.memo<TaxReportsProps>(({ taxReports }) => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="mb-1 text-lg font-semibold text-[var(--color-text-main)]">
          Tax Reports
        </h2>
        <p className="text-sm text-[var(--color-text-muted)]">
          VAT, service tax, and additional statutory tax liability breakdown.
        </p>
      </div>

      <TaxReportsSummary taxReports={taxReports} />

      <Divider />

      <TaxReportFilters />

      <TaxReportsTable taxReports={taxReports} />
    </div>
  )
})

TaxReports.displayName = 'TaxReports'
