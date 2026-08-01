import React, { useState } from 'react';
import { PaymentMethodCard } from './PaymentMethodCard';
import type { PaymentMethod } from '../types';
import { PAYMENT_METHODS } from '../constants';

const AVAILABLE_METHODS: { id: PaymentMethod; name: string }[] = [
  { id: PAYMENT_METHODS.CASH, name: 'Cash' },
  { id: PAYMENT_METHODS.CARD, name: 'Card' },
  { id: PAYMENT_METHODS.GIFT_CARD, name: 'Gift Card' },
  { id: PAYMENT_METHODS.MOBILE_PAY, name: 'Mobile Pay' },
];

export const PaymentMethodSelector = React.memo(function PaymentMethodSelector() {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>(PAYMENT_METHODS.CASH);

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-semibold text-[var(--color-text-main)]">Payment Method</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {AVAILABLE_METHODS.map((method) => (
          <PaymentMethodCard
            key={method.id}
            id={method.id}
            name={method.name}
            isSelected={selectedMethod === method.id}
            onSelect={(id) => setSelectedMethod(id as PaymentMethod)}
          />
        ))}
      </div>
    </div>
  );
});
