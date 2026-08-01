import React, { useState } from 'react';

type LoyaltyLevelOption = 'All Levels' | 'Bronze' | 'Silver' | 'Gold' | 'Platinum';

const OPTIONS: LoyaltyLevelOption[] = ['All Levels', 'Bronze', 'Silver', 'Gold', 'Platinum'];

export const LoyaltyLevelFilter = React.memo(() => {
  const [selected, setSelected] = useState<LoyaltyLevelOption>('All Levels');

  return (
    <div className="relative flex flex-col space-y-1">
      <label
        htmlFor="loyalty-level-filter"
        className="sr-only"
      >
        Filter by loyalty level
      </label>
      <select
        id="loyalty-level-filter"
        value={selected}
        onChange={(e) => setSelected(e.target.value as LoyaltyLevelOption)}
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

LoyaltyLevelFilter.displayName = 'LoyaltyLevelFilter';
