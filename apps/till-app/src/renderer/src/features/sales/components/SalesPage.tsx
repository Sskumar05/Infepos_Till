import React from 'react';
import { useSales } from '../hooks/useSales';
import { SalesHeader } from './SalesHeader';
import { SalesContent } from './SalesContent';
import { RECEIPT_SETTINGS } from '../constants';

/**
 * SalesPage — the sole container component for the Sales module.
 *
 * Responsibilities:
 *   - Call useSales() — the ONLY component that does so.
 *   - Forward data and callbacks downward via props.
 *   - Render error state when data fetch fails.
 *
 * No hardcoded product values. No direct data imports.
 */
export const SalesPage = React.memo(function SalesPage() {
  const { products, customers, isLoading, error } = useSales();

  const handleRefresh = () => {
    console.log('SalesPage: Refresh triggered');
  };

  const handleSearch = () => {
    console.log('SalesPage: Search triggered');
  };

  const handleAddToCart = (productId: string) => {
    console.log('SalesPage: Add to cart —', productId);
  };

  const handleCheckout = () => {
    console.log('SalesPage: Checkout triggered');
  };

  const handleClearCart = () => {
    console.log('SalesPage: Clear cart triggered');
  };

  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Error Banner */}
      {error && (
        <div className="text-sm text-[var(--color-brand-danger)] bg-red-50 border border-red-200 rounded-[var(--radius-md)] px-4 py-3">
          {error}
        </div>
      )}

      <SalesHeader
        storeName={RECEIPT_SETTINGS.storeName}
        onRefresh={handleRefresh}
        onSearch={handleSearch}
      />

      <SalesContent
        products={products}
        customers={customers}
        isLoading={isLoading}
        onAddToCart={handleAddToCart}
        onCheckout={handleCheckout}
        onClearCart={handleClearCart}
      />
    </div>
  );
});
