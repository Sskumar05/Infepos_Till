import React from 'react';
import { useReceipt } from '../hooks/useReceipt';
import { ReceiptHeader } from './ReceiptHeader';
import { ReceiptContent } from './ReceiptContent';
import { Spinner } from '../../../components/feedback/Spinner';
import { EmptyState } from '../../../components/feedback/EmptyState';

export const ReceiptPage: React.FC = () => {
  const { receipt, isLoading, error, refresh } = useReceipt();

  return (
    <div className="flex flex-col h-full w-full p-6 bg-[var(--color-bg-base)]">
      <ReceiptHeader onRefresh={refresh} />

      {isLoading ? (
        <div className="flex-1 flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      ) : error ? (
        <div className="flex-1 flex items-center justify-center">
          <EmptyState
            title="Error Loading Receipt"
            description={error}
          />
        </div>
      ) : !receipt ? (
        <div className="flex-1 flex items-center justify-center">
          <EmptyState
            title="No Receipt Data"
            description="No receipt metadata or transaction details available."
          />
        </div>
      ) : (
        <div className="flex-1 min-h-0">
          <ReceiptContent receipt={receipt} />
        </div>
      )}
    </div>
  );
};
