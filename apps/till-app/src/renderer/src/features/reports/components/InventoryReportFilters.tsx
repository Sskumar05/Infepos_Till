import React from 'react'
import { Input } from '../../../components/forms/Input'
import { Button } from '../../../components/common/Button'

const CATEGORY_OPTIONS = [
  'All Categories',
  'Beverages',
  'Snacks & Confectionery',
  'Dairy & Chilled',
  'Bakery',
  'Fresh Produce',
  'Frozen Foods',
  'Toiletries & Health',
  'Household Essentials',
  'Tobacco & Vape',
  'Alcohol & Spirits'
]

const STOCK_STATUS_OPTIONS = ['All Statuses', 'In Stock', 'Low Stock', 'Out of Stock']

export const InventoryReportFilters = React.memo(() => {
  return (
    <div className="flex flex-wrap items-end gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-4">
      {/* Search */}
      <div className="min-w-[180px] flex-1">
        <Input
          placeholder="Search inventory category..."
          aria-label="Search inventory reports"
          onChange={() => console.log('Inventory search changed')}
        />
      </div>

      {/* Category dropdown */}
      <div className="min-w-[160px]">
        <select
          aria-label="Filter by category"
          className="flex h-10 w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-2 text-sm text-[var(--color-text-main)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)]"
          defaultValue=""
          onChange={() => console.log('Category filter changed')}
        >
          <option value="" disabled>
            Category
          </option>
          {CATEGORY_OPTIONS.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Stock Status dropdown */}
      <div className="min-w-[150px]">
        <select
          aria-label="Filter by stock status"
          className="flex h-10 w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-2 text-sm text-[var(--color-text-main)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)]"
          defaultValue=""
          onChange={() => console.log('Stock status filter changed')}
        >
          <option value="" disabled>
            Stock Status
          </option>
          {STOCK_STATUS_OPTIONS.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      {/* Reset */}
      <Button
        variant="secondary"
        onClick={() => console.log('Reset inventory filters clicked')}
        aria-label="Reset filters"
      >
        Reset
      </Button>
    </div>
  )
})

InventoryReportFilters.displayName = 'InventoryReportFilters'
