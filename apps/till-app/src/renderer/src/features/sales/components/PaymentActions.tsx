import React from 'react';
import { Button } from '../../../components/common/Button';

interface PaymentActionsProps {
  onCheckout: () => void;
}

export const PaymentActions = React.memo(function PaymentActions({ onCheckout }: PaymentActionsProps) {
  const handleSuspend = () => console.log('PaymentActions: Suspend Sale clicked');
  const handleHold = () => console.log('PaymentActions: Hold Sale clicked');
  const handleCancel = () => console.log('PaymentActions: Cancel Sale clicked');
  const handleCheckoutClick = () => {
    console.log('PaymentActions: Checkout clicked');
    onCheckout();
  };

  return (
    <div className="flex flex-col gap-2">
      <Button
        id="btn-action-checkout"
        variant="primary"
        className="w-full h-12 text-base font-bold"
        onClick={handleCheckoutClick}
      >
        Complete Checkout
      </Button>
      
      <div className="flex gap-2">
        <Button
          id="btn-action-suspend"
          variant="secondary"
          className="flex-1 text-xs h-9"
          onClick={handleSuspend}
        >
          Suspend
        </Button>
        <Button
          id="btn-action-hold"
          variant="secondary"
          className="flex-1 text-xs h-9"
          onClick={handleHold}
        >
          Hold
        </Button>
        <Button
          id="btn-action-cancel"
          variant="secondary"
          className="flex-1 text-xs h-9 text-[var(--color-brand-danger)] hover:bg-red-50"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
});
