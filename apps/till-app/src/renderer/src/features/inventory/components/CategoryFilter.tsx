import React, { useState } from 'react';
import { PRODUCT_CATEGORIES } from '../constants';

export const CategoryFilter = React.memo(function CategoryFilter() {
  const [selected, setSelected] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelected(value);
    console.log('CategoryFilter changed:', value || 'All Categories');
  };

  return (
    <div className="relative min-w-[160px]">
      <select
        value={selected}
        onChange={handleChange}
        className="flex h-10 w-full appearance-none rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-2 pr-8 text-sm text-[var(--color-text-main)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Filter by category"
      >
        <option value="">All Categories</option>
        {Object.values(PRODUCT_CATEGORIES).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      
      {/* Dropdown chevron icon */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)] flex items-center justify-center">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
});
