import React from 'react'
import type { RevenueReport } from '../types'

export interface RevenueReportRowProps {
  report: RevenueReport
}

export const RevenueReportRow = React.memo<RevenueReportRowProps>(({ report }) => {
  return (
    <tr className="border-b border-[var(--color-border-divider)] transition-colors hover:bg-[var(--color-action-hover)]">
      <td className="whitespace-nowrap px-4 py-3 text-sm text-[var(--color-text-main)]">
        {report.month}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-[var(--color-text-main)]">
        £{report.revenue.toFixed(2)}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-[var(--color-brand-danger)]">
        £{report.expenses.toFixed(2)}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-[var(--color-brand-success)]">
        £{report.profit.toFixed(2)}
      </td>
      <td className="whitespace-nowrap px-4 py-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => console.log('View revenue report:', report.id)}
            className="rounded-[var(--radius-sm)] px-2.5 py-1 text-xs font-medium text-[var(--color-brand-primary)] transition-colors hover:bg-[var(--color-action-hover)]"
          >
            View
          </button>
          <button
            type="button"
            onClick={() => console.log('Export revenue report:', report.id)}
            className="rounded-[var(--radius-sm)] px-2.5 py-1 text-xs font-medium text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-action-hover)]"
          >
            Export
          </button>
        </div>
      </td>
    </tr>
  )
})

RevenueReportRow.displayName = 'RevenueReportRow'
