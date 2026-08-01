import React from 'react';
import { CustomerCard } from './CustomerCard';
import { useSalesCustomer, useSalesActions } from '../../../store/hooks';
import type { Customer } from '../types';

interface CustomerSelectorProps {
  customers: Customer[];
}

export const CustomerSelector = React.memo(function CustomerSelector({ customers }: CustomerSelectorProps) {
  const selectedCustomer = useSalesCustomer();
  const { setCustomer } = useSalesActions();

  const handleSelect = (customer: Customer) => {
    setCustomer(customer);
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-semibold text-[var(--color-text-main)] px-4">Select Customer</h3>
      <div className="flex flex-col gap-2 px-4 max-h-48 overflow-y-auto">
        {customers.map((customer) => (
          <CustomerCard
            key={customer.id}
            customer={customer}
            isSelected={selectedCustomer?.id === customer.id}
            onSelect={() => handleSelect(customer)}
          />
        ))}
      </div>
    </div>
  );
});
