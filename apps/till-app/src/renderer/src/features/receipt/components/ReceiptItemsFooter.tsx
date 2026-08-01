import React from 'react';
import { Divider } from '../../../components/common/Divider';

export interface ReceiptItemsFooterProps {
  itemCount: number;
}

export const ReceiptItemsFooter: React.FC<ReceiptItemsFooterProps> = ({ itemCount }) => {
  return (
    <div className="mt-2 space-y-2 text-xs">
      <Divider className="my-2 border-dashed border-gray-300" />
      <div className="flex justify-between items-center text-gray-600 font-medium">
        <span>Total Items Count:</span>
        <span>{itemCount}</span>
      </div>
      <div className="text-center pt-2 text-gray-500 italic text-[11px]">
        Thank you for shopping with us!
      </div>
    </div>
  );
};
