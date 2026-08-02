import React from 'react'
import type { SalesReport } from '../types'
import { Card, CardBody } from '../../../components/common/Card'
import { Badge } from '../../../components/common/Badge'

export interface SalesReportsSummaryProps {
  salesReports: SalesReport[]
}

export const SalesReportsSummary = React.memo<SalesReportsSummaryProps>(({ salesReports }) => {
  const firstDate = salesReports.length > 0 ? salesReports[0].date : '—'
  const lastDate = salesReports.length > 0 ? salesReports[salesReports.length - 1].date : '—'
  const dateRange = salesReports.length > 0 ? `${firstDate} – ${lastDate}` : '—'

  const summaryItems = [
    {
      label: 'Total Records',
      value: String(salesReports.length),
      badge: null,
    },
    {
      label: 'Date Range',
      value: dateRange,
      badge: null,
    },
    {
      label: 'Report Type',
      value: 'Sales',
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

SalesReportsSummary.displayName = 'SalesReportsSummary'
