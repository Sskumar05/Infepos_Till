import React from 'react';
import { CustomerSearchBar } from './CustomerSearchBar';
import { CustomerTypeFilter } from './CustomerTypeFilter';
import { CustomerStatusFilter } from './CustomerStatusFilter';
import { LoyaltyLevelFilter } from './LoyaltyLevelFilter';
import { Button } from '../../../components/common/Button';
import { Divider } from '../../../components/common/Divider';

export const CustomersToolbar = React.memo(() => {
  return (
    <div className="mb-4 w-full space-y-3 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] p-3">
      {/* Search + Filters row */}
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        {/* Search takes the most space */}
        <div className="flex-1 min-w-[180px]">
          <CustomerSearchBar />
        </div>

        {/* Filter dropdowns — wrap on tablet, stack on mobile */}
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
          <CustomerTypeFilter />
          <CustomerStatusFilter />
          <LoyaltyLevelFilter />
        </div>
      </div>

      <Divider className="border-[var(--color-border-default)]" />

      {/* Export / Import actions row */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
        <Button
          variant="secondary"
          onClick={() => console.log('Import Customers clicked')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="mr-2 h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
          </svg>
          Import
        </Button>
        <Button
          variant="secondary"
          onClick={() => console.log('Export Customers clicked')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="mr-2 h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Export
        </Button>
      </div>
    </div>
  );
});

CustomersToolbar.displayName = 'CustomersToolbar';
