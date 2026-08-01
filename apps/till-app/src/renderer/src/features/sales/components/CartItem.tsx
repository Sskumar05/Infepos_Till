import React from 'react';

import type { CartItem as CartItemType } from '../types';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem = React.memo(function CartItem({ item }: CartItemProps) {
  const handleDecrease = () => {
    console.log('CartItem: Decrease quantity -', item.productId);
  };

  const handleIncrease = () => {
    console.log('CartItem: Increase quantity -', item.productId);
  };

  const handleDelete = () => {
    console.log('CartItem: Delete item -', item.productId);
  };

  return (
    <div className="flex gap-3 px-4 py-3 bg-[var(--color-bg-surface)] hover:bg-[var(--color-bg-base)] transition-colors">
      {/* Image Placeholder */}
      <div className="w-12 h-12 shrink-0 rounded-[var(--radius-sm)] bg-[var(--color-bg-base)] border border-[var(--color-border-default)] flex items-center justify-center text-[var(--color-text-muted)]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-between">
        {/* Top: Name, SKU, Delete */}
        <div className="flex justify-between items-start gap-2">
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-[var(--color-text-main)] truncate">
              {item.product.name}
            </h3>
            <p className="text-xs font-mono text-[var(--color-text-muted)] truncate">
              {item.product.sku}
            </p>
          </div>
          <button
            type="button"
            onClick={handleDelete}
            className="shrink-0 p-1 text-[var(--color-text-muted)] hover:text-[var(--color-brand-danger)] rounded-[var(--radius-sm)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-danger)] transition-colors"
            aria-label="Remove item"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 6h18" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </button>
        </div>

        {/* Bottom: Price & Quantity Controls */}
        <div className="flex justify-between items-center mt-2">
          <p className="text-sm font-bold text-[var(--color-text-main)]">
            £{item.unitPrice.toFixed(2)}
          </p>

          <div className="flex items-center border border-[var(--color-border-default)] rounded-[var(--radius-sm)] bg-[var(--color-bg-surface)] overflow-hidden">
            <button
              type="button"
              onClick={handleDecrease}
              className="w-7 h-7 flex items-center justify-center text-[var(--color-text-muted)] hover:bg-[var(--color-bg-base)] hover:text-[var(--color-text-main)] transition-colors focus-visible:outline-none focus-visible:bg-[var(--color-bg-base)]"
              aria-label="Decrease quantity"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <div className="w-8 h-7 flex items-center justify-center text-xs font-medium text-[var(--color-text-main)] border-x border-[var(--color-border-default)]">
              {item.quantity}
            </div>
            <button
              type="button"
              onClick={handleIncrease}
              className="w-7 h-7 flex items-center justify-center text-[var(--color-text-muted)] hover:bg-[var(--color-bg-base)] hover:text-[var(--color-text-main)] transition-colors focus-visible:outline-none focus-visible:bg-[var(--color-bg-base)]"
              aria-label="Increase quantity"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});
