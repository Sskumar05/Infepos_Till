import React from 'react';
import { EmptyState } from '../../../components/feedback/EmptyState';
import { useSalesCustomer } from '../../../store/hooks';

export const CustomerInfo = React.memo(function CustomerInfo() {
  const customer = useSalesCustomer();
  
  if (!customer) {
    return (
      <div className="px-4 py-2">
        <EmptyState
          title="No Customer Selected"
          description="Select a customer from the list above or add a new one."
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          }
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 px-4 text-sm">
      <h3 className="font-semibold text-[var(--color-text-main)] mb-1">Customer Details</h3>
      <div className="flex justify-between text-[var(--color-text-muted)]">
        <span>Name</span>
        <span className="font-medium text-[var(--color-text-main)]">{customer.name}</span>
      </div>
      <div className="flex justify-between text-[var(--color-text-muted)]">
        <span>Phone</span>
        <span className="font-medium text-[var(--color-text-main)]">{customer.phone || 'N/A'}</span>
      </div>
      <div className="flex justify-between text-[var(--color-text-muted)]">
        <span>Email</span>
        <span className="font-medium text-[var(--color-text-main)]">{customer.email || 'N/A'}</span>
      </div>
      <div className="flex justify-between text-[var(--color-text-muted)]">
        <span>Loyalty Points</span>
        <span className="font-medium text-[var(--color-text-main)]">{customer.loyaltyPoints}</span>
      </div>
      <div className="flex justify-between text-[var(--color-text-muted)]">
        <span>Member Since</span>
        <span className="font-medium text-[var(--color-text-main)]">Today</span>
      </div>
    </div>
  );
});
