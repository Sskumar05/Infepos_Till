import React from 'react';
import { Badge } from '../../../components/common/Badge';
import type { Customer } from '../types';

interface CustomerCardProps {
  customer: Customer;
  isSelected: boolean;
  onSelect: () => void;
}

export const CustomerCard = React.memo(function CustomerCard({ customer, isSelected, onSelect }: CustomerCardProps) {
  const handleClick = () => {
    onSelect();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`w-full flex items-center justify-between p-3 text-left rounded-[var(--radius-md)] border transition-all ${
        isSelected
          ? 'border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)] bg-opacity-10'
          : 'border-[var(--color-border-default)] bg-[var(--color-bg-surface)] hover:bg-[var(--color-bg-base)]'
      }`}
      aria-pressed={isSelected}
    >
      <div>
        <h4 className={`text-sm font-semibold ${isSelected ? 'text-[var(--color-brand-primary)]' : 'text-[var(--color-text-main)]'}`}>
          {customer.name}
        </h4>
        <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
          {customer.phone || customer.email || 'No contact info'}
        </p>
      </div>
      <div className="flex flex-col items-end gap-1">
        <Badge variant={customer.loyaltyPoints > 100 ? 'success' : 'neutral'} className="text-[10px] px-1.5 py-0.5">
          {customer.loyaltyPoints} pts
        </Badge>
        {isSelected && (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-primary)]" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
    </button>
  );
});
