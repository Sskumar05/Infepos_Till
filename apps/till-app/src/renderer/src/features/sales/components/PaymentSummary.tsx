import React from 'react';
import { Divider } from '../../../components/common/Divider';
import { useSalesSummary } from '../../../store/hooks';

export const PaymentSummary = React.memo(function PaymentSummary() {
  const summary = useSalesSummary();

  return (
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
  );
});
