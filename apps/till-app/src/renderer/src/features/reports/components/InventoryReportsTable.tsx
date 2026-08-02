import React from 'react'
import type { InventoryReport } from '../types'
import { Card, CardHeader, CardBody } from '../../../components/common/Card'
import { EmptyState } from '../../../components/feedback/EmptyState'
import { InventoryReportRow } from './InventoryReportRow'

export interface InventoryReportsTableProps {
  inventoryReports: InventoryReport[]
}

const TABLE_HEADERS = [
  'Category',
  'Stock Value',
  'Stock Count',
  'Low Stock',
  'Out of Stock',
  'Actions'
]

export const InventoryReportsTable = React.memo<InventoryReportsTableProps>(
  ({ inventoryReports }) => {
    return (
      <Card>
        <CardHeader>
          <h3 className="text-sm font-semibold text-[var(--color-text-main)]">
            Category Stock Valuation & Status
          </h3>
        </CardHeader>
        <CardBody className="p-0">
          {inventoryReports.length === 0 ? (
            <EmptyState
              title="No inventory records found"
              description="There are no inventory reports available at this time."
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
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
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
                  {inventoryReports.map((report) => (
                    <InventoryReportRow key={report.id} report={report} />
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

InventoryReportsTable.displayName = 'InventoryReportsTable'
