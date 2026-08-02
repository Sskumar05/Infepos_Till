import React from 'react'
import type { InventoryReport } from '../types'
import { Card, CardBody } from '../../../components/common/Card'
import { Badge } from '../../../components/common/Badge'

export interface InventoryReportsSummaryProps {
  inventoryReports: InventoryReport[]
}

export const InventoryReportsSummary = React.memo<InventoryReportsSummaryProps>(
  ({ inventoryReports }) => {
    const firstCategory = inventoryReports.length > 0 ? inventoryReports[0].category : '—'

    const summaryItems = [
      {
        label: 'Total Categories',
        value: String(inventoryReports.length),
        badge: null
      },
      {
        label: 'First Category',
        value: firstCategory,
        badge: null
      },
      {
        label: 'Report Status',
        value: 'Inventory',
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

InventoryReportsSummary.displayName = 'InventoryReportsSummary'
