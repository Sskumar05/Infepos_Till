import React, { useState } from 'react';

type CustomerStatusOption = 'All Status' | 'Active' | 'Inactive' | 'Blocked';

const OPTIONS: CustomerStatusOption[] = ['All Status', 'Active', 'Inactive', 'Blocked'];

export const CustomerStatusFilter = React.memo(() => {
  const [selected, setSelected] = useState<CustomerStatusOption>('All Status');

  return (
    <div className="relative flex flex-col space-y-1">
      <label
        htmlFor="customer-status-filter"
        className="sr-only"
      >
        Filter by customer status
      </label>
      <select
        id="customer-status-filter"
        value={selected}
        onChange={(e) => setSelected(e.target.value as CustomerStatusOption)}
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

CustomerStatusFilter.displayName = 'CustomerStatusFilter';
