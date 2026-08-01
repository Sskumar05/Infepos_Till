import React from 'react';
import { Card } from '../../../components/common/Card';
import { CartHeader } from './CartHeader';
import { CustomerPanel } from './CustomerPanel';
import { CheckoutPanel } from './CheckoutPanel';
import { EmptyCart } from './EmptyCart';
import { useSalesCart, useSalesActions } from '../../../store/hooks';
import type { Customer } from '../types';
import type { CartItem as StoreCartItem } from '../../../store/modules/sales/types';

// ─── StoreCartItemRow ────────────────────────────────────────────────────────
// Renders a single cart item from the Zustand store with live +/− controls.
// Receives `updateQuantity` as a stable prop — no inline callbacks defined.

interface StoreCartItemRowProps {
  item: StoreCartItem;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

const StoreCartItemRow = React.memo(function StoreCartItemRow({
  item,
  onUpdateQuantity,
  onRemoveItem,
}: StoreCartItemRowProps) {
  const handleDecrease = () => {
    onUpdateQuantity(item.productId, item.quantity - 1);
  };

  const handleIncrease = () => {
    onUpdateQuantity(item.productId, item.quantity + 1);
  };

  const handleDelete = () => {
    onRemoveItem(item.productId);
  };

  return (
    <div className="flex gap-3 px-4 py-3 bg-[var(--color-bg-surface)] hover:bg-[var(--color-bg-base)] transition-colors border-b border-[var(--color-border-divider)] last:border-b-0">
      {/* Image Placeholder */}
      <div className="w-10 h-10 shrink-0 rounded-[var(--radius-sm)] bg-[var(--color-bg-base)] border border-[var(--color-border-default)] flex items-center justify-center text-[var(--color-text-muted)]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-between">
        {/* Top: Name, SKU, Delete */}
        <div className="flex justify-between items-start gap-1">
          <div className="min-w-0">
            <h3 className="text-xs font-semibold text-[var(--color-text-main)] truncate">{item.name}</h3>
            <p className="text-[10px] font-mono text-[var(--color-text-muted)] truncate">{item.sku}</p>
          </div>
          <button
            type="button"
            onClick={handleDelete}
            className="shrink-0 p-0.5 text-[var(--color-text-muted)] hover:text-[var(--color-brand-danger)] rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-danger)] transition-colors"
            aria-label="Remove item"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 6h18" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </button>
        </div>

        {/* Bottom: Price & Quantity Controls */}
        <div className="flex justify-between items-center mt-1.5">
          <p className="text-xs font-bold text-[var(--color-text-main)]">
            £{item.unitPrice.toFixed(2)}
          </p>

          <div className="flex items-center border border-[var(--color-border-default)] rounded-[var(--radius-sm)] bg-[var(--color-bg-surface)] overflow-hidden">
            <button
              type="button"
              onClick={handleDecrease}
              disabled={item.quantity <= 1}
              className="w-6 h-6 flex items-center justify-center text-[var(--color-text-muted)] hover:bg-[var(--color-bg-base)] hover:text-[var(--color-text-main)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors focus-visible:outline-none"
              aria-label="Decrease quantity"
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <div className="w-7 h-6 flex items-center justify-center text-xs font-semibold text-[var(--color-text-main)] border-x border-[var(--color-border-default)]">
              {item.quantity}
            </div>
            <button
              type="button"
              onClick={handleIncrease}
              className="w-6 h-6 flex items-center justify-center text-[var(--color-text-muted)] hover:bg-[var(--color-bg-base)] hover:text-[var(--color-text-main)] transition-colors focus-visible:outline-none"
              aria-label="Increase quantity"
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

// ─── CartPanel ───────────────────────────────────────────────────────────────

interface CartPanelProps {
  customers: Customer[];
  onCheckout: () => void;
  onClearCart: () => void;
}

export const CartPanel = React.memo(function CartPanel({
  customers,
  onCheckout,
  onClearCart,
}: CartPanelProps) {
  const storeCart = useSalesCart();
  const { updateQuantity, removeFromCart } = useSalesActions();

  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <CartHeader
        itemCount={storeCart.length}
        onClearCart={onClearCart}
      />

      {/* Live cart items from store */}
      {storeCart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex-1 overflow-y-auto">
          {storeCart.map((item) => (
            <StoreCartItemRow
              key={item.id}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemoveItem={removeFromCart}
            />
          ))}
        </div>
      )}

      <CustomerPanel
        customers={customers}
      />

      <CheckoutPanel
        onCheckout={onCheckout}
      />
    </Card>
  );
});
