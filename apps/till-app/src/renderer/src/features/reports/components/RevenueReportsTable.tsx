import React from 'react'
import type { RevenueReport } from '../types'
import { Card, CardHeader, CardBody } from '../../../components/common/Card'
import { EmptyState } from '../../../components/feedback/EmptyState'
import { RevenueReportRow } from './RevenueReportRow'

export interface RevenueReportsTableProps {
  revenueReports: RevenueReport[]
}

const TABLE_HEADERS = ['Month', 'Revenue', 'Expenses', 'Profit', 'Actions']

export const RevenueReportsTable = React.memo<RevenueReportsTableProps>(({ revenueReports }) => {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-sm font-semibold text-[var(--color-text-main)]">
          Monthly Revenue Records
        </h3>
      </CardHeader>
      <CardBody className="p-0">
        {revenueReports.length === 0 ? (
          <EmptyState
            title="No revenue records found"
            description="There are no revenue reports available for the selected period."
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
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
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
                {revenueReports.map((report) => (
                  <RevenueReportRow key={report.id} report={report} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardBody>
    </Card>
  )
})

RevenueReportsTable.displayName = 'RevenueReportsTable'
