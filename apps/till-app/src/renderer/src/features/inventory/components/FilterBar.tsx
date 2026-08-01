import React from 'react';
import { CategoryFilter } from './CategoryFilter';
import { StockStatusFilter } from './StockStatusFilter';

export const FilterBar = React.memo(function FilterBar() {
  return (
    <div className="flex items-center gap-3">
      <CategoryFilter />
      <StockStatusFilter />
      
      {/* Future Placeholder: Sort By Dropdown */}
      <div className="relative min-w-[140px] hidden sm:block">
        <select
          disabled
          className="flex h-10 w-full appearance-none rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-2 pr-8 text-sm text-[var(--color-text-muted)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Sort by"
        >
          <option value="">Sort By</option>
        </select>
        
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)] flex items-center justify-center opacity-50">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </div>
  );
});
