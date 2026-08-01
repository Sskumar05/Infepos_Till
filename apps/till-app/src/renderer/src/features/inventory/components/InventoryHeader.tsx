import React from 'react';
import { Badge } from '../../../components/common/Badge';
import { Button } from '../../../components/common/Button';
import { Divider } from '../../../components/common/Divider';
import type { InventorySummary } from '../types';

interface InventoryHeaderProps {
  summary: InventorySummary | null;
  onRefresh: () => void;
}

export const InventoryHeader = React.memo(function InventoryHeader({
  summary,
  onRefresh,
}: InventoryHeaderProps) {
  return (
    <header className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

        {/* Left: Title + summary badges */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[var(--color-text-main)]">
            Inventory
          </h1>
          <div className="flex items-center gap-2 mt-1.5 flex-wrap">
            {summary !== null && (
              <>
                <Badge variant="neutral" className="text-xs">
                  {summary.totalProducts} Products
                </Badge>
                {summary.lowStockProducts > 0 && (
                  <Badge variant="warning" className="text-xs">
                    {summary.lowStockProducts} Low Stock
                  </Badge>
                )}
                {summary.outOfStockProducts > 0 && (
                  <Badge variant="danger" className="text-xs">
                    {summary.outOfStockProducts} Out of Stock
                  </Badge>
                )}
              </>
            )}
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <Button
            id="btn-inventory-refresh"
            variant="secondary"
            className="text-sm h-9 px-3 gap-2 inline-flex items-center"
            onClick={() => {
              console.log('InventoryHeader: Refresh clicked');
              onRefresh();
            }}
            aria-label="Refresh inventory data"
          >
            {/* Refresh icon */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="23 4 23 10 17 10" />
              <polyline points="1 20 1 14 7 14" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
            Refresh
          </Button>
        </div>
      </div>

      <Divider />
    </header>
  );
});
