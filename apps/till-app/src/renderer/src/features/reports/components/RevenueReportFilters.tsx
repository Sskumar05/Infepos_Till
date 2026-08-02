import React from 'react'
import { Input } from '../../../components/forms/Input'
import { Button } from '../../../components/common/Button'

const YEAR_OPTIONS = ['2024', '2025', '2026']
const CATEGORY_OPTIONS = ['All Categories', 'Retail', 'Wholesale', 'Online']

export const RevenueReportFilters = React.memo(() => {
  return (
    <div className="flex flex-wrap items-end gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-4">
      {/* Search */}
      <div className="min-w-[180px] flex-1">
        <Input
          placeholder="Search by month..."
          aria-label="Search revenue reports"
          onChange={() => console.log('Revenue search changed')}
        />
      </div>

      {/* Year dropdown */}
      <div className="min-w-[140px]">
        <select
          aria-label="Filter by year"
          className="flex h-10 w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-2 text-sm text-[var(--color-text-main)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)]"
          defaultValue=""
          onChange={() => console.log('Year filter changed')}
        >
          <option value="" disabled>
            Year
          </option>
          {YEAR_OPTIONS.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
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

      {/* Reset */}
      <Button
        variant="secondary"
        onClick={() => console.log('Reset revenue filters clicked')}
        aria-label="Reset filters"
      >
        Reset
      </Button>
    </div>
  )
})

RevenueReportFilters.displayName = 'RevenueReportFilters'
