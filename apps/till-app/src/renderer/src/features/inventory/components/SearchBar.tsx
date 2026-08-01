import React, { useState } from 'react';
import { Input } from '../../../components/forms/Input';

export const SearchBar = React.memo(function SearchBar() {
  const [query, setQuery] = useState('');

  const handleClear = () => {
    setQuery('');
  };

  return (
    <div className="relative flex-1 w-full sm:max-w-md flex items-center">
      {/* Search icon placeholder */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] pointer-events-none flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>
      
      <Input
        type="text"
        placeholder="Search products, SKU or barcode..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-9 pr-10"
        aria-label="Search products"
      />

      {query && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] rounded-[var(--radius-sm)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)]"
          aria-label="Clear search"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
});
