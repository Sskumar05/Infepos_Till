import React from 'react'
import { Input } from '../../../components/forms/Input'
import { Button } from '../../../components/common/Button'

const CUSTOMER_TYPES = ['All Types', 'New', 'Returning', 'VIP', 'Inactive']
const LOYALTY_LEVELS = ['All Loyalty Levels', 'Bronze', 'Silver', 'Gold', 'Platinum']

export const CustomerReportFilters = React.memo(() => {
  return (
    <div className="flex flex-wrap items-end gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-4">
      {/* Search */}
      <div className="min-w-[180px] flex-1">
        <Input
          placeholder="Search customer report..."
          aria-label="Search customer reports"
          onChange={() => console.log('Customer search changed')}
        />
      </div>

      {/* Customer Type select */}
      <div className="min-w-[160px]">
        <select
          aria-label="Filter by customer type"
          className="flex h-10 w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-2 text-sm text-[var(--color-text-main)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)]"
          defaultValue=""
          onChange={() => console.log('Customer type filter changed')}
        >
          <option value="" disabled>
            Customer Type
          </option>
          {CUSTOMER_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Loyalty select */}
      <div className="min-w-[160px]">
        <select
          aria-label="Filter by loyalty level"
          className="flex h-10 w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-2 text-sm text-[var(--color-text-main)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)]"
          defaultValue=""
          onChange={() => console.log('Loyalty filter changed')}
        >
          <option value="" disabled>
            Loyalty Level
          </option>
          {LOYALTY_LEVELS.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>

      {/* Reset */}
      <Button
        variant="secondary"
        onClick={() => console.log('Reset customer filters clicked')}
        aria-label="Reset filters"
      >
        Reset
      </Button>
    </div>
  )
})

CustomerReportFilters.displayName = 'CustomerReportFilters'
