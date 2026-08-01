import React from 'react';
import type { ReceiptItem } from '../types';
import { ReceiptItemsHeader } from './ReceiptItemsHeader';
import { ReceiptItemRow } from './ReceiptItemRow';
import { ReceiptItemsFooter } from './ReceiptItemsFooter';

export interface ReceiptItemsSectionProps {
  items: ReceiptItem[];
}

export const ReceiptItemsSection: React.FC<ReceiptItemsSectionProps> = ({ items }) => {
  return (
    <div className="flex flex-col space-y-2 py-2">
      <ReceiptItemsHeader />
      <div className="divide-y divide-gray-100">
        {items.map((item) => (
          <ReceiptItemRow key={item.id} item={item} />
        ))}
      </div>
      <ReceiptItemsFooter itemCount={items.length} />
    </div>
  );
};
