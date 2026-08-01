import React from 'react';
import type { ReceiptItem } from '../types';
import { ReceiptItemsSection } from './ReceiptItemsSection';

export interface ReceiptItemsProps {
  items: ReceiptItem[];
}

export const ReceiptItems = React.memo<ReceiptItemsProps>(({ items }) => {
  if (!items || items.length === 0) {
    return (
      <div className="py-4 text-center text-gray-400 italic text-xs">
        No items in receipt.
      </div>
    );
  }

  return <ReceiptItemsSection items={items} />;
});

ReceiptItems.displayName = 'ReceiptItems';
