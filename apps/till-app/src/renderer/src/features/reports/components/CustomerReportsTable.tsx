import React from 'react'
import type { CustomerReport } from '../types'
import { Card, CardHeader, CardBody } from '../../../components/common/Card'
import { EmptyState } from '../../../components/feedback/EmptyState'
import { CustomerReportRow } from './CustomerReportRow'

export interface CustomerReportsTableProps {
  customerReports: CustomerReport[]
}

const TABLE_HEADERS = [
  'Customer ID',
  'New Customers',
  'Returning Customers',
  'VIP Customers',
  'Inactive Customers',
  'Actions'
]

export const CustomerReportsTable = React.memo<CustomerReportsTableProps>(
  ({ customerReports }) => {
    return (
      <Card>
        <CardHeader>
          <h3 className="text-sm font-semibold text-[var(--color-text-main)]">
            Customer Demographics & Engagement
          </h3>
        </CardHeader>
        <CardBody className="p-0">
          {customerReports.length === 0 ? (
            <EmptyState
              title="No customer records found"
              description="There are no customer reports available at this time."
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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
                  {customerReports.map((report) => (
                    <CustomerReportRow key={report.id} report={report} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardBody>
      </Card>
    )
  }
)

CustomerReportsTable.displayName = 'CustomerReportsTable'
