import React from 'react'
import type { PaymentReport } from '../types'
import { Card, CardHeader, CardBody } from '../../../components/common/Card'
import { EmptyState } from '../../../components/feedback/EmptyState'
import { PaymentReportRow } from './PaymentReportRow'

export interface PaymentReportsTableProps {
  paymentReports: PaymentReport[]
}

const TABLE_HEADERS = ['Cash', 'Card', 'Mobile', 'Gift Card', 'Actions']

export const PaymentReportsTable = React.memo<PaymentReportsTableProps>(({ paymentReports }) => {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-sm font-semibold text-[var(--color-text-main)]">
          Payment Method Reconciliation
        </h3>
      </CardHeader>
      <CardBody className="p-0">
        {paymentReports.length === 0 ? (
          <EmptyState
            title="No payment records found"
            description="There are no payment reports available at this time."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
            }
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[580px] text-left">
              <thead>
                <tr className="border-b border-[var(--color-border-divider)] bg-[var(--color-bg-surface)]">
                  {TABLE_HEADERS.map((header) => (
                    <th
                      key={header}
                      className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paymentReports.map((report) => (
                  <PaymentReportRow key={report.id} report={report} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardBody>
    </Card>
  )
})

PaymentReportsTable.displayName = 'PaymentReportsTable'
