import React from 'react';
import type { ReceiptData } from '../types';
import { Divider } from '../../../components/common/Divider';
import { ReceiptItems } from './ReceiptItems';
import { ReceiptTotals } from './ReceiptTotals';

// No import from receiptData.ts — storeInfo flows through receipt prop.

export interface ReceiptPreviewProps {
  receipt: ReceiptData | null;
}

export const ReceiptPreview = React.memo<ReceiptPreviewProps>(({ receipt }) => {
  if (!receipt) {
    return null;
  }

  const { storeInfo, metadata, items, totals } = receipt;

  return (
    <div className="flex flex-col space-y-4 text-xs">
      {/* Store Header Info — read from receipt.storeInfo, not a direct import */}
      <div className="text-center space-y-1">
        <h2 className="text-base font-bold tracking-wide uppercase">{storeInfo.name}</h2>
        <p className="text-gray-600 leading-tight">{storeInfo.address}</p>
        <p className="text-gray-600">Tel: {storeInfo.phone}</p>
      </div>

      <Divider className="my-2 border-dashed border-gray-300" />

      {/* Transaction & Customer Metadata */}
      <div className="space-y-1 text-gray-700">
        <div className="flex justify-between">
          <span className="font-semibold">Receipt No:</span>
          <span>{metadata.receiptNumber}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Txn ID:</span>
          <span>{metadata.transactionId}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Date:</span>
          <span>{metadata.createdAt}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Cashier:</span>
          <span>{metadata.cashierName}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Customer:</span>
          <span>{metadata.customerName}</span>
        </div>
      </div>

      <Divider className="my-2 border-dashed border-gray-300" />

      {/* Receipt Items Section */}
      <ReceiptItems items={items} />

      {/* Receipt Totals Section */}
      <ReceiptTotals totals={totals} metadata={metadata} />
    </div>
  );
});

ReceiptPreview.displayName = 'ReceiptPreview';
