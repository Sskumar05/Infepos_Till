import React from 'react';

interface PaymentMethodCardProps {
  id: string;
  name: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export const PaymentMethodCard = React.memo(function PaymentMethodCard({
  id,
  name,
  isSelected,
  onSelect,
}: PaymentMethodCardProps) {
  const handleClick = () => {
    console.log(`PaymentMethodCard: Selected ${name}`);
    onSelect(id);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex flex-col items-center justify-center p-3 rounded-[var(--radius-md)] border transition-all ${
        isSelected
          ? 'border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)] bg-opacity-10 text-[var(--color-brand-primary)]'
          : 'border-[var(--color-border-default)] bg-[var(--color-bg-surface)] text-[var(--color-text-muted)] hover:border-[var(--color-text-muted)]'
      }`}
      aria-pressed={isSelected}
    >
      {/* Icon Placeholder */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mb-2">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
      <span className={`text-xs font-semibold ${isSelected ? 'text-[var(--color-brand-primary)]' : 'text-[var(--color-text-main)]'}`}>
        {name}
      </span>
    </button>
  );
});
