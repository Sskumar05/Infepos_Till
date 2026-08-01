import React from 'react';
import type { ReceiptItem } from '../types';

export interface ReceiptItemRowProps {
  item: ReceiptItem;
}

export const ReceiptItemRow = React.memo<ReceiptItemRowProps>(({ item }) => {
  return (
    <div className="flex flex-col py-1.5 border-b border-gray-100 last:border-b-0 text-xs">
      <div className="flex justify-between items-start">
        <div className="flex-1 pr-2">
          <div className="font-medium text-gray-900">{item.name}</div>
          <div className="text-[10px] text-gray-500 font-sans">{item.sku}</div>
        </div>
        <div className="w-10 text-center text-gray-700">{item.quantity}</div>
        <div className="w-16 text-right text-gray-700">£{item.unitPrice.toFixed(2)}</div>
        <div className="w-16 text-right font-medium text-gray-900">£{item.totalPrice.toFixed(2)}</div>
      </div>
    </div>
  );
});

ReceiptItemRow.displayName = 'ReceiptItemRow';
