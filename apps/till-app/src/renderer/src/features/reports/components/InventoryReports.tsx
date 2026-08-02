import React from 'react'
import type { InventoryReport } from '../types'
import { InventoryReportsSummary } from './InventoryReportsSummary'
import { InventoryReportFilters } from './InventoryReportFilters'
import { InventoryReportsTable } from './InventoryReportsTable'
import { Divider } from '../../../components/common/Divider'

export interface InventoryReportsProps {
  inventoryReports: InventoryReport[]
}

export const InventoryReports = React.memo<InventoryReportsProps>(({ inventoryReports }) => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="mb-1 text-lg font-semibold text-[var(--color-text-main)]">
          Inventory Reports
        </h2>
        <p className="text-sm text-[var(--color-text-muted)]">
          Stock valuation, counts, and reorder warnings by category.
        </p>
      </div>

      <InventoryReportsSummary inventoryReports={inventoryReports} />

      <Divider />

      <InventoryReportFilters />

      <InventoryReportsTable inventoryReports={inventoryReports} />
    </div>
  )
})

InventoryReports.displayName = 'InventoryReports'
