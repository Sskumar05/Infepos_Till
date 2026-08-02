import React from 'react'
import type { PaymentReport } from '../types'
import { PaymentReportsSummary } from './PaymentReportsSummary'
import { PaymentReportFilters } from './PaymentReportFilters'
import { PaymentReportsTable } from './PaymentReportsTable'
import { Divider } from '../../../components/common/Divider'

export interface PaymentReportsProps {
  paymentReports: PaymentReport[]
}

export const PaymentReports = React.memo<PaymentReportsProps>(({ paymentReports }) => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="mb-1 text-lg font-semibold text-[var(--color-text-main)]">
          Payment Reports
        </h2>
        <p className="text-sm text-[var(--color-text-muted)]">
          Payment method breakdown across Cash, Card, Mobile, and Gift Card transactions.
        </p>
      </div>

      <PaymentReportsSummary paymentReports={paymentReports} />

      <Divider />

      <PaymentReportFilters />

      <PaymentReportsTable paymentReports={paymentReports} />
    </div>
  )
})

PaymentReports.displayName = 'PaymentReports'
