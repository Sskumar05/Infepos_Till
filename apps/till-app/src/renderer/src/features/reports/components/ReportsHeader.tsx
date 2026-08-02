import React from 'react'
import { Button } from '../../../components/common/Button'
import { Badge } from '../../../components/common/Badge'

export interface ReportsHeaderProps {
  onRefresh: () => void
}

export const ReportsHeader = React.memo<ReportsHeaderProps>(({ onRefresh }) => {
  const currentDate = new Date().toLocaleDateString('en-GB', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  return (
    <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-divider)] mb-6">
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold tracking-tight text-[var(--color-text-main)]">
            Reports &amp; Analytics
          </h1>
          <Badge variant="neutral">Main Store</Badge>
        </div>
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">{currentDate}</p>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          onClick={() => console.log('Print clicked')}
          aria-label="Print report"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <rect x="6" y="14" width="12" height="8" />
          </svg>
          Print
        </Button>

        <Button
          variant="secondary"
          onClick={() => console.log('Export clicked')}
          aria-label="Export report"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Export
        </Button>

        <Button
          variant="primary"
          onClick={onRefresh}
          aria-label="Refresh reports"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <polyline points="23 4 23 10 17 10" />
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
          </svg>
          Refresh
        </Button>
      </div>
    </div>
  )
})

ReportsHeader.displayName = 'ReportsHeader'
