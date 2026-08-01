import React from 'react';
import { Button } from '../../../components/common/Button';
import { Divider } from '../../../components/common/Divider';
import type { SaleSummary } from '../types';

interface CartSummaryProps {
  summary: SaleSummary;
  onCheckout: () => void;
  onClearCart: () => void;
}

export const CartSummary = React.memo(function CartSummary({ summary, onCheckout, onClearCart }: CartSummaryProps) {
  const handleCheckout = () => {
    console.log('CartSummary: Checkout clicked');
    onCheckout();
  };

  const handleClearCart = () => {
    console.log('CartSummary: Clear Cart clicked');
    onClearCart();
  };

  return (
    <div className="p-4 bg-[var(--color-bg-surface)] border-t border-[var(--color-border-default)] flex flex-col gap-3">
      {/* Summary lines */}
      <div className="flex flex-col gap-1.5 text-sm">
        <div className="flex justify-between text-[var(--color-text-muted)]">
          <span>Subtotal</span>
          <span>£{summary.subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-[var(--color-text-muted)]">
          <span>Discount</span>
          <span>−£{summary.discountTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-[var(--color-text-muted)]">
          <span>Tax (VAT)</span>
          <span>£{summary.taxTotal.toFixed(2)}</span>
        </div>
        
        <Divider className="my-1" />
        
        <div className="flex justify-between font-bold text-lg text-[var(--color-text-main)]">
          <span>Grand Total</span>
          <span>£{summary.grandTotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-2">
        <Button
          id="btn-summary-clear"
          variant="secondary"
          className="flex-1 h-11 text-sm font-semibold text-[var(--color-text-main)]"
          onClick={handleClearCart}
        >
          Clear Cart
        </Button>
        <Button
          id="btn-summary-checkout"
          variant="primary"
          className="flex-1 h-11 text-sm font-semibold"
          onClick={handleCheckout}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
});
