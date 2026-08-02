import React from 'react'
import type { TaxReport } from '../types'

export interface TaxReportRowProps {
  report: TaxReport
}

export const TaxReportRow = React.memo<TaxReportRowProps>(({ report }) => {
  return (
    <tr className="border-b border-[var(--color-border-divider)] transition-colors hover:bg-[var(--color-action-hover)]">
      <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-[var(--color-text-main)]">
        £{report.vat.toFixed(2)}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-[var(--color-text-main)]">
        £{report.serviceTax.toFixed(2)}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-[var(--color-text-main)]">
        £{report.otherTax.toFixed(2)}
      </td>
      <td className="whitespace-nowrap px-4 py-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => console.log('View tax report:', report.id)}
            className="rounded-[var(--radius-sm)] px-2.5 py-1 text-xs font-medium text-[var(--color-brand-primary)] transition-colors hover:bg-[var(--color-action-hover)]"
          >
            View
          </button>
          <button
            type="button"
            onClick={() => console.log('Export tax report:', report.id)}
            className="rounded-[var(--radius-sm)] px-2.5 py-1 text-xs font-medium text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-action-hover)]"
          >
            Export
          </button>
        </div>
      </td>
    </tr>
  )
})

TaxReportRow.displayName = 'TaxReportRow'
