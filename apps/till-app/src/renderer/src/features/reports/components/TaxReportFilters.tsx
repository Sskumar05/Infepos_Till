import React from 'react'
import { Input } from '../../../components/forms/Input'
import { Button } from '../../../components/common/Button'

const TAX_TYPES = ['All Tax Types', 'Standard VAT (20%)', 'Reduced VAT (5%)', 'Zero-rated (0%)']
const YEAR_OPTIONS = ['2024', '2025', '2026']

export const TaxReportFilters = React.memo(() => {
  return (
    <div className="flex flex-wrap items-end gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-4">
      {/* Search */}
      <div className="min-w-[180px] flex-1">
        <Input
          placeholder="Search tax report..."
          aria-label="Search tax reports"
          onChange={() => console.log('Tax search changed')}
        />
      </div>

      {/* Tax Type select */}
      <div className="min-w-[160px]">
        <select
          aria-label="Filter by tax type"
          className="flex h-10 w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-2 text-sm text-[var(--color-text-main)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)]"
          defaultValue=""
          onChange={() => console.log('Tax type filter changed')}
        >
          <option value="" disabled>
            Tax Type
          </option>
          {TAX_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Year select */}
      <div className="min-w-[140px]">
        <select
          aria-label="Filter by year"
          className="flex h-10 w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-2 text-sm text-[var(--color-text-main)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)]"
          defaultValue=""
          onChange={() => console.log('Tax year filter changed')}
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

      {/* Reset */}
      <Button
        variant="secondary"
        onClick={() => console.log('Reset tax filters clicked')}
        aria-label="Reset filters"
      >
        Reset
      </Button>
    </div>
  )
})

TaxReportFilters.displayName = 'TaxReportFilters'
