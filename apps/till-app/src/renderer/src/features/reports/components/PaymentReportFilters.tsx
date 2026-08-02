import React from 'react'
import { Input } from '../../../components/forms/Input'
import { Button } from '../../../components/common/Button'
import { REPORT_PERIODS } from '../constants'

const PAYMENT_METHODS = ['All Methods', 'Cash', 'Card', 'Mobile', 'Gift Card']

export const PaymentReportFilters = React.memo(() => {
  return (
    <div className="flex flex-wrap items-end gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-4">
      {/* Search */}
      <div className="min-w-[180px] flex-1">
        <Input
          placeholder="Search payment report..."
          aria-label="Search payment reports"
          onChange={() => console.log('Payment search changed')}
        />
      </div>

      {/* Payment Method select */}
      <div className="min-w-[160px]">
        <select
          aria-label="Filter by payment method"
          className="flex h-10 w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-2 text-sm text-[var(--color-text-main)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)]"
          defaultValue=""
          onChange={() => console.log('Payment method filter changed')}
        >
          <option value="" disabled>
            Payment Method
          </option>
          {PAYMENT_METHODS.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
      </div>

      {/* Period select */}
      <div className="min-w-[150px]">
        <select
          aria-label="Filter by period"
          className="flex h-10 w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-2 text-sm text-[var(--color-text-main)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)]"
          defaultValue=""
          onChange={() => console.log('Payment period filter changed')}
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

      {/* Reset */}
      <Button
        variant="secondary"
        onClick={() => console.log('Reset payment filters clicked')}
        aria-label="Reset filters"
      >
        Reset
      </Button>
    </div>
  )
})

PaymentReportFilters.displayName = 'PaymentReportFilters'
