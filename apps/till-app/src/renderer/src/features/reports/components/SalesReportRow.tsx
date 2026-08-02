import React from 'react'
import type { SalesReport } from '../types'

export interface SalesReportRowProps {
  report: SalesReport
}

export const SalesReportRow = React.memo<SalesReportRowProps>(({ report }) => {
  return (
    <tr className="border-b border-[var(--color-border-divider)] transition-colors hover:bg-[var(--color-action-hover)]">
      <td className="whitespace-nowrap px-4 py-3 text-sm text-[var(--color-text-main)]">
        {report.date}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-[var(--color-text-main)]">
        {report.orders}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-[var(--color-text-main)]">
        £{report.sales.toFixed(2)}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-[var(--color-text-main)]">
        £{report.revenue.toFixed(2)}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-[var(--color-brand-success)]">
        £{report.profit.toFixed(2)}
      </td>
      <td className="whitespace-nowrap px-4 py-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => console.log('View sales report:', report.id)}
            className="rounded-[var(--radius-sm)] px-2.5 py-1 text-xs font-medium text-[var(--color-brand-primary)] transition-colors hover:bg-[var(--color-action-hover)]"
          >
            View
          </button>
          <button
            type="button"
            onClick={() => console.log('Print sales report:', report.id)}
            className="rounded-[var(--radius-sm)] px-2.5 py-1 text-xs font-medium text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-action-hover)]"
          >
            Print
          </button>
        </div>
      </td>
    </tr>
  )
})

SalesReportRow.displayName = 'SalesReportRow'
