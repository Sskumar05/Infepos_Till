import React from 'react'
import type { SalesReport } from '../types'
import { Card, CardHeader, CardBody } from '../../../components/common/Card'
import { EmptyState } from '../../../components/feedback/EmptyState'
import { SalesReportRow } from './SalesReportRow'

export interface SalesReportsTableProps {
  salesReports: SalesReport[]
}

const TABLE_HEADERS = ['Date', 'Orders', 'Sales', 'Revenue', 'Profit', 'Actions']

export const SalesReportsTable = React.memo<SalesReportsTableProps>(({ salesReports }) => {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-sm font-semibold text-[var(--color-text-main)]">Daily Sales Records</h3>
      </CardHeader>
      <CardBody className="p-0">
        {salesReports.length === 0 ? (
          <EmptyState
            title="No sales records found"
            description="There are no sales reports available for the selected period."
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
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            }
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left">
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
                {salesReports.map((report) => (
                  <SalesReportRow key={report.id} report={report} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardBody>
    </Card>
  )
})

SalesReportsTable.displayName = 'SalesReportsTable'
