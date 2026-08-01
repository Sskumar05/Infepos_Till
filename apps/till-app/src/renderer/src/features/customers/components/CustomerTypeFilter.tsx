import React, { useState } from 'react';

type CustomerTypeOption = 'All Types' | 'Regular' | 'Member' | 'VIP' | 'Wholesale';

const OPTIONS: CustomerTypeOption[] = ['All Types', 'Regular', 'Member', 'VIP', 'Wholesale'];

export const CustomerTypeFilter = React.memo(() => {
  const [selected, setSelected] = useState<CustomerTypeOption>('All Types');

  return (
    <div className="relative flex flex-col space-y-1">
      <label
        htmlFor="customer-type-filter"
        className="sr-only"
      >
        Filter by customer type
      </label>
      <select
        id="customer-type-filter"
        value={selected}
        onChange={(e) => setSelected(e.target.value as CustomerTypeOption)}
        className="h-10 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-2 text-sm text-[var(--color-text-main)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] cursor-pointer"
      >
        {OPTIONS.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
});

CustomerTypeFilter.displayName = 'CustomerTypeFilter';
