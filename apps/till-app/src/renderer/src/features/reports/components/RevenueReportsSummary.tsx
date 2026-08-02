import React from 'react'
import type { RevenueReport } from '../types'
import { Card, CardBody } from '../../../components/common/Card'
import { Badge } from '../../../components/common/Badge'

export interface RevenueReportsSummaryProps {
  revenueReports: RevenueReport[]
}

export const RevenueReportsSummary = React.memo<RevenueReportsSummaryProps>(({ revenueReports }) => {
  const firstMonth = revenueReports.length > 0 ? revenueReports[0].month : '—'
  const lastMonth = revenueReports.length > 0 ? revenueReports[revenueReports.length - 1].month : '—'
  const yearRange = revenueReports.length > 0 ? `${firstMonth} – ${lastMonth}` : '—'

  const summaryItems = [
    {
      label: 'Total Records',
      value: String(revenueReports.length),
      badge: null,
    },
    {
      label: 'Year Range',
      value: yearRange,
      badge: null,
    },
    {
      label: 'Report Category',
      value: 'Revenue',
      badge: <Badge variant="success">Active</Badge>,
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {summaryItems.map((item) => (
        <Card key={item.label}>
          <CardBody className="flex items-center justify-between py-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-text-muted)]">
                {item.label}
              </p>
              <p className="mt-1 text-lg font-semibold text-[var(--color-text-main)]">
                {item.value}
              </p>
            </div>
            {item.badge && <div>{item.badge}</div>}
          </CardBody>
        </Card>
      ))}
    </div>
  )
})

RevenueReportsSummary.displayName = 'RevenueReportsSummary'
