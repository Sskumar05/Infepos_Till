import React from 'react';
import { Badge } from '../../../components/common/Badge';
import { Button } from '../../../components/common/Button';
import { Divider } from '../../../components/common/Divider';

interface SalesHeaderProps {
  storeName: string;
  onRefresh: () => void;
  onSearch: () => void;
}

function formatCurrentDate(): string {
  return new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export const SalesHeader = React.memo(function SalesHeader({
  storeName,
  onRefresh,
  onSearch,
}: SalesHeaderProps) {
  return (
    <header className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">

        {/* Left: Title + badge + date */}
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl font-bold tracking-tight text-[var(--color-text-main)]">
              Sales
            </h1>
            <Badge variant="neutral" className="text-xs">
              {storeName}
            </Badge>
          </div>
          <p className="text-sm text-[var(--color-text-muted)] mt-1">
            {formatCurrentDate()}
          </p>
        </div>

        {/* Right: Action buttons */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Search Placeholder */}
          <Button
            id="btn-sales-search"
            variant="secondary"
            className="h-9 px-3 text-sm inline-flex items-center gap-2"
            onClick={() => {
              console.log('SalesHeader: Search clicked');
              onSearch();
            }}
            aria-label="Search products"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            Search
          </Button>

          {/* Refresh */}
          <Button
            id="btn-sales-refresh"
            variant="secondary"
            className="h-9 px-3"
            onClick={() => {
              console.log('SalesHeader: Refresh clicked');
              onRefresh();
            }}
            aria-label="Refresh sales data"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="23 4 23 10 17 10" />
              <polyline points="1 20 1 14 7 14" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
          </Button>
        </div>
      </div>

      <Divider />
    </header>
  );
});
