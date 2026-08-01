import React from 'react';
import type { Customer, CustomerSummary } from '../types';
import { CustomersHeader } from './CustomersHeader';
import { CustomersToolbar } from './CustomersToolbar';
import { CustomerTable } from './CustomerTable';

export interface CustomersContentProps {
  customers: Customer[];
  summary: CustomerSummary | null;
  onRefresh: () => void;
}

export const CustomersContent = React.memo<CustomersContentProps>(({
  customers,
  summary: _summary,
  onRefresh,
}) => {
  return (
    <div className="flex h-full w-full flex-col bg-[var(--color-bg-base)] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col">
        <CustomersHeader onRefresh={onRefresh} />
        <CustomersToolbar />
        <CustomerTable customers={customers} />
      </div>
    </div>
  );
});

CustomersContent.displayName = 'CustomersContent';
