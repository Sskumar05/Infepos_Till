import React from 'react'
import type { PaymentReport } from '../types'

export interface PaymentReportRowProps {
  report: PaymentReport
}

export const PaymentReportRow = React.memo<PaymentReportRowProps>(({ report }) => {
  return (
    <tr className="border-b border-[var(--color-border-divider)] transition-colors hover:bg-[var(--color-action-hover)]">
      <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-[var(--color-text-main)]">
        £{report.cash.toFixed(2)}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-[var(--color-text-main)]">
        £{report.card.toFixed(2)}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-[var(--color-text-main)]">
        £{report.mobile.toFixed(2)}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-[var(--color-text-main)]">
        £{report.giftCard.toFixed(2)}
      </td>
      <td className="whitespace-nowrap px-4 py-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => console.log('View payment report:', report.id)}
            className="rounded-[var(--radius-sm)] px-2.5 py-1 text-xs font-medium text-[var(--color-brand-primary)] transition-colors hover:bg-[var(--color-action-hover)]"
          >
            View
          </button>
          <button
            type="button"
            onClick={() => console.log('Export payment report:', report.id)}
            className="rounded-[var(--radius-sm)] px-2.5 py-1 text-xs font-medium text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-action-hover)]"
          >
            Export
          </button>
        </div>
      </td>
    </tr>
  )
})

PaymentReportRow.displayName = 'PaymentReportRow'
