import React from 'react';
import { InventoryHeader } from './InventoryHeader';
import { InventoryToolbar } from './InventoryToolbar';
import { InventoryTable } from './InventoryTable';
import type { Product, InventorySummary } from '../types';

interface InventoryContentProps {
  products: Product[];
  summary: InventorySummary | null;
  isLoading: boolean;
  onRefresh: () => void;
  onView: (id: string) => void;
  onEdit: (id: string) => void;
}

/**
 * InventoryContent — layout container only.
 *
 * Responsibilities:
 *   - Render InventoryHeader
 *   - Render InventoryToolbar
 *   - Render InventoryTable
 *   - Handle loading state display
 *
 * No data fetching. No business logic. Props-only.
 */
export const InventoryContent = React.memo(function InventoryContent({
  products,
  summary,
  isLoading,
  onRefresh,
  onView,
  onEdit,
}: InventoryContentProps) {
  return (
    <div className="flex flex-col gap-6">
      <InventoryHeader summary={summary} onRefresh={onRefresh} />
      
      <InventoryToolbar />

      {isLoading ? (
        <div className="flex items-center justify-center h-48 text-[var(--color-text-muted)] text-sm">
          Loading inventory...
        </div>
      ) : (
        <InventoryTable
          products={products}
          onView={onView}
          onEdit={onEdit}
        />
      )}
    </div>
  );
});
