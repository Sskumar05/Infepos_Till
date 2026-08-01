import React from 'react';
import { SearchBar } from './SearchBar';
import { CategoryFilter } from './CategoryFilter';
import { BarcodeInput } from './BarcodeInput';
import { ViewToggle } from './ViewToggle';

/**
 * ProductToolbar — composes all product filtering controls.
 *
 * Desktop: Single horizontal row.
 * Tablet: Responsive wrapping.
 * Mobile: Stack vertically.
 *
 * All child components use local UI state only.
 * No props flow to ProductGrid or CartPanel.
 */
export const ProductToolbar = React.memo(function ProductToolbar() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
      {/* Left group: Search + Category */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-1 sm:min-w-0">
        <SearchBar />
        <CategoryFilter />
      </div>

      {/* Right group: Barcode + ViewToggle */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:shrink-0">
        <BarcodeInput />
        <ViewToggle />
      </div>
    </div>
  );
});
