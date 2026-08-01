import React from 'react';
import { ProductGrid } from './ProductGrid';
import { CartPanel } from './CartPanel';
import { ProductToolbar } from './ProductToolbar';
import type { Product, Customer } from '../types';

interface SalesContentProps {
  products: Product[];
  customers: Customer[];
  isLoading: boolean;
  onAddToCart: (productId: string) => void;
  onCheckout: () => void;
  onClearCart: () => void;
}

/**
 * SalesContent — layout container only.
 *
 * Layout:
 *   ProductToolbar (full width)
 *   ├── ProductGrid (70%) | CartPanel (30%) on desktop
 *   └── Stacked vertically on mobile
 *
 * No calculations. No business logic.
 */
export const SalesContent = React.memo(function SalesContent({
  products,
  customers,
  isLoading,
  onAddToCart,
  onCheckout,
  onClearCart,
}: SalesContentProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center flex-1 h-48 text-[var(--color-text-muted)] text-sm">
        Loading products...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 flex-1 min-h-0">
      {/* Toolbar */}
      <ProductToolbar />

      {/* Desktop: row | Mobile: column */}
      <div className="flex flex-col md:flex-row gap-6 flex-1 min-h-0">
        
        {/* Left: Product Grid — 70% on desktop */}
        <div className="flex-1 md:basis-[70%] lg:basis-[70%] min-w-0 min-h-0">
          <ProductGrid products={products} onAdd={onAddToCart} />
        </div>

        {/* Right: Cart Panel — 30% on desktop */}
        <div className="w-full md:w-[30%] lg:w-[30%] md:min-w-[260px] md:max-w-[360px] min-h-[400px] md:min-h-0 flex flex-col">
          <CartPanel
            customers={customers}
            onCheckout={onCheckout}
            onClearCart={onClearCart}
          />
        </div>
      </div>
    </div>
  );
});
