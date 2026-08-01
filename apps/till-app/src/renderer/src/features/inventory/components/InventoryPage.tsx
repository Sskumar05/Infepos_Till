import React from 'react';
import { useInventory } from '../hooks/useInventory';
import { InventoryContent } from './InventoryContent';

/**
 * InventoryPage — the sole container component for the Inventory module.
 *
 * Responsibilities:
 *   - Consume useInventory() hook (the ONLY component that does so)
 *   - Forward data and callbacks downward via props
 *   - Render error state when data fetch fails
 *
 * No hardcoded product values. No direct data imports.
 */
export const InventoryPage = React.memo(function InventoryPage() {
  const { products, summary, isLoading, error } = useInventory();

  const handleRefresh = () => {
    console.log('InventoryPage: Refresh triggered');
  };

  const handleView = (id: string) => {
    console.log('InventoryPage: View product —', id);
  };

  const handleEdit = (id: string) => {
    console.log('InventoryPage: Edit product —', id);
  };

  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Error Banner */}
      {error && (
        <div className="text-sm text-[var(--color-brand-danger)] bg-red-50 border border-red-200 rounded-[var(--radius-md)] px-4 py-3">
          {error}
        </div>
      )}

      <InventoryContent
        products={products}
        summary={summary}
        isLoading={isLoading}
        onRefresh={handleRefresh}
        onView={handleView}
        onEdit={handleEdit}
      />
    </div>
  );
});
