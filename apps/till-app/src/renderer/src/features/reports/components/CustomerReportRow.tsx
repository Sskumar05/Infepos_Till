import React from 'react'
import type { CustomerReport } from '../types'

export interface CustomerReportRowProps {
  report: CustomerReport
}

export const CustomerReportRow = React.memo<CustomerReportRowProps>(({ report }) => {
  return (
    <tr className="border-b border-[var(--color-border-divider)] transition-colors hover:bg-[var(--color-action-hover)]">
      <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-[var(--color-text-main)]">
        {report.id}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-[var(--color-text-main)]">
        {report.newCustomers}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-[var(--color-text-main)]">
        {report.returningCustomers}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-[var(--color-brand-primary)]">
        {report.vipCustomers}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-[var(--color-text-muted)]">
        {report.inactiveCustomers}
      </td>
      <td className="whitespace-nowrap px-4 py-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => console.log('View customer report:', report.id)}
            className="rounded-[var(--radius-sm)] px-2.5 py-1 text-xs font-medium text-[var(--color-brand-primary)] transition-colors hover:bg-[var(--color-action-hover)]"
          >
            View
          </button>
          <button
            type="button"
            onClick={() => console.log('Export customer report:', report.id)}
            className="rounded-[var(--radius-sm)] px-2.5 py-1 text-xs font-medium text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-action-hover)]"
          >
            Export
          </button>
        </div>
      </td>
    </tr>
  )
})

CustomerReportRow.displayName = 'CustomerReportRow'
