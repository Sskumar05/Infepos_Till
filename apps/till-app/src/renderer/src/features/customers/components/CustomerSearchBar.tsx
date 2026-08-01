import React, { useState } from 'react';
import { Input } from '../../../components/forms/Input';

export const CustomerSearchBar = React.memo(() => {
  const [query, setQuery] = useState('');

  return (
    <div className="relative flex items-center w-full sm:w-72">
      {/* Search Icon */}
      <svg
        className="pointer-events-none absolute left-3 h-4 w-4 text-[var(--color-text-muted)]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
        />
      </svg>

      <Input
        placeholder="Search customers..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-9 pr-9"
      />

      {/* Clear button — clears local state only */}
      {query.length > 0 && (
        <button
          type="button"
          onClick={() => setQuery('')}
          className="absolute right-3 flex items-center text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors"
          aria-label="Clear search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
});

CustomerSearchBar.displayName = 'CustomerSearchBar';
