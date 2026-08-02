import React from 'react'
import type { PaymentReport } from '../types'
import { Card, CardBody } from '../../../components/common/Card'
import { Badge } from '../../../components/common/Badge'

export interface PaymentReportsSummaryProps {
  paymentReports: PaymentReport[]
}

export const PaymentReportsSummary = React.memo<PaymentReportsSummaryProps>(
  ({ paymentReports }) => {
    const firstId = paymentReports.length > 0 ? paymentReports[0].id : '—'

    const summaryItems = [
      {
        label: 'Total Records',
        value: String(paymentReports.length),
        badge: null
      },
      {
        label: 'First Report ID',
        value: firstId,
        badge: null
      },
      {
        label: 'Report Status',
        value: 'Payment',
        badge: <Badge variant="success">Active</Badge>
      }
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
  }
)

PaymentReportsSummary.displayName = 'PaymentReportsSummary'
