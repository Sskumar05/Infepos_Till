import React from 'react';
import { Button } from '../../../components/common/Button'
import { Badge } from '../../../components/common/Badge'
import { Divider } from '../../../components/common/Divider'

interface DashboardHeaderProps {
  storeName?: string;
  date?: string;
  onRefresh?: () => void;
}

export const DashboardHeader = React.memo(function DashboardHeader({ 
  storeName = 'Downtown Central', 
  date, 
  onRefresh 
}: DashboardHeaderProps) {
  const displayDate = date ?? new Date().toLocaleDateString(undefined, {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <header className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        {/* Left: Title + store */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Dashboard
          </h1>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <Badge variant="neutral" className="text-xs font-medium">
              {storeName}
            </Badge>
            <span className="text-xs text-[var(--color-text-muted)]">{displayDate}</span>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Notification placeholder */}
          <button
            type="button"
            aria-label="Notifications"
            className="relative w-9 h-9 rounded-[var(--radius-md)] flex items-center justify-center text-[var(--color-text-muted)] hover:bg-[var(--color-action-hover)] hover:text-[var(--color-text-primary)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)]"
          >
            {/* Bell icon via SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
            {/* Notification dot */}
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[var(--color-brand-danger)]" />
          </button>

          <Button
            variant="secondary"
            className="text-sm h-9 px-3 gap-2 inline-flex items-center"
            onClick={onRefresh}
          >
            {/* Refresh icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 4 23 10 17 10"/>
              <polyline points="1 20 1 14 7 14"/>
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
            </svg>
            Refresh
          </Button>
        </div>
      </div>
      <Divider />
    </header>
  )
}
);
