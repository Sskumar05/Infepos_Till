import React from 'react'
import { Input } from '../../../components/forms/Input'
import { Button } from '../../../components/common/Button'
import { REPORT_PERIODS } from '../constants'

export const SalesReportFilters = React.memo(() => {
  return (
    <div className="flex flex-wrap items-end gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-4">
      {/* Search */}
      <div className="min-w-[180px] flex-1">
        <Input
          placeholder="Search by date..."
          aria-label="Search sales reports"
          onChange={() => console.log('Search changed')}
        />
      </div>

      {/* Period dropdown */}
      <div className="min-w-[150px]">
        <select
          aria-label="Filter by period"
          className="flex h-10 w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-2 text-sm text-[var(--color-text-main)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)]"
          defaultValue=""
          onChange={() => console.log('Period filter changed')}
        >
          <option value="" disabled>
            Period
          </option>
          {Object.values(REPORT_PERIODS).map((period) => (
            <option key={period} value={period}>
              {period}
            </option>
          ))}
        </select>
      </div>

      {/* Status dropdown */}
      <div className="min-w-[150px]">
        <select
          aria-label="Filter by status"
          className="flex h-10 w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-2 text-sm text-[var(--color-text-main)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)]"
          defaultValue=""
          onChange={() => console.log('Status filter changed')}
        >
          <option value="" disabled>
            Status
          </option>
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      {/* Reset */}
      <Button
        variant="secondary"
        onClick={() => console.log('Reset filters clicked')}
        aria-label="Reset filters"
      >
        Reset
      </Button>
    </div>
  )
})

SalesReportFilters.displayName = 'SalesReportFilters'
