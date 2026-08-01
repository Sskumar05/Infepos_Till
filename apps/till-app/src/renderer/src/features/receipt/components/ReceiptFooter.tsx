import React from 'react';
import type { ReceiptMetadata } from '../types';
import { Divider } from '../../../components/common/Divider';

export interface ReceiptFooterProps {
  metadata?: ReceiptMetadata;
}

export const ReceiptFooter = React.memo<ReceiptFooterProps>(({ metadata }) => {
  return (
    <div className="mt-4 space-y-2 text-center text-xs text-gray-600">
      <Divider className="my-2 border-dashed border-gray-300" />

      {metadata && (
        <div className="space-y-0.5 text-[11px] text-gray-500 font-mono">
          <div>Payment Method: <span className="font-semibold text-gray-700">{metadata.paymentMethod}</span></div>
          <div>Receipt No: <span className="font-semibold text-gray-700">{metadata.receiptNumber}</span></div>
          <div>Txn ID: <span className="font-semibold text-gray-700">{metadata.transactionId}</span></div>
        </div>
      )}

      <Divider className="my-2 border-dashed border-gray-300" />

      <div className="space-y-1 font-sans pt-1">
        <p className="font-medium text-gray-700">Please keep this receipt.</p>
        <p className="font-semibold text-gray-900 tracking-wide uppercase text-[11px]">Thank you. Visit Again!</p>
      </div>
    </div>
  );
});

ReceiptFooter.displayName = 'ReceiptFooter';
