import React from 'react';
import { PaymentSummary } from './PaymentSummary';
import { PaymentMethodSelector } from './PaymentMethodSelector';
import { PaymentActions } from './PaymentActions';
import { Divider } from '../../../components/common/Divider';


interface CheckoutPanelProps {
  onCheckout: () => void;
}

export const CheckoutPanel = React.memo(function CheckoutPanel({ onCheckout }: CheckoutPanelProps) {
  return (
    <div className="flex flex-col h-full bg-[var(--color-bg-surface)] border-t border-[var(--color-border-default)]">
      {/* Scrollable area on small screens if needed, otherwise flex-col fills naturally */}
      <div className="p-4 flex flex-col gap-4 overflow-y-auto">
        <PaymentSummary />
        
        <Divider />
        
        <PaymentMethodSelector />
        
        <Divider />
        
        <PaymentActions onCheckout={onCheckout} />
      </div>
    </div>
  );
});
