import React from 'react';
import { useCustomers } from '../hooks/useCustomers';
import { CustomersContent } from './CustomersContent';
import { Spinner } from '../../../components/feedback/Spinner';

export const CustomersPage: React.FC = () => {
  const { customers, summary, isLoading, error, refresh } = useCustomers();

  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center p-8 bg-[var(--color-bg-base)]">
        <Spinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center p-8 bg-[var(--color-bg-base)] text-[var(--color-text-main)]">
        <div className="text-red-500 mb-2">Error loading customers: {error}</div>
        <button
          onClick={refresh}
          className="px-4 py-2 bg-[var(--color-primary)] text-white rounded-md hover:opacity-90"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <CustomersContent
      customers={customers}
      summary={summary}
      onRefresh={refresh}
    />
  );
};
