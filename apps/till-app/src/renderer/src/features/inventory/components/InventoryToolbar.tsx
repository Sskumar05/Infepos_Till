import React from 'react';
import { SearchBar } from './SearchBar';
import { FilterBar } from './FilterBar';
import { Button } from '../../../components/common/Button';

export const InventoryToolbar = React.memo(function InventoryToolbar() {
  const handleAddProduct = () => {
    console.log('InventoryToolbar: Add Product clicked');
  };

  const handleExport = () => {
    console.log('InventoryToolbar: Export clicked');
  };

  const handleRefresh = () => {
    console.log('InventoryToolbar: Refresh clicked');
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      {/* Search left */}
      <SearchBar />

      {/* Filters center and Buttons right in a wrap container on tablet, stacked on mobile */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:flex-wrap">
        <FilterBar />

        {/* Buttons right */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="h-10 px-3 text-sm"
            onClick={handleExport}
            aria-label="Export inventory"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Export
          </Button>
          
          <Button
            variant="secondary"
            className="h-10 px-3"
            onClick={handleRefresh}
            aria-label="Refresh list"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="23 4 23 10 17 10" />
              <polyline points="1 20 1 14 7 14" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
          </Button>

          <Button
            variant="primary"
            className="h-10 px-4"
            onClick={handleAddProduct}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2" aria-hidden="true">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add Product
          </Button>
        </div>
      </div>
    </div>
  );
});
