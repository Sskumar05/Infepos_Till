import React from 'react';

export interface ReceiptGrandTotalProps {
  grandTotal: number;
}

export const ReceiptGrandTotal: React.FC<ReceiptGrandTotalProps> = ({ grandTotal }) => {
  return (
    <div className="flex justify-between items-center py-2 border-t-2 border-b-2 border-gray-900 my-2 text-sm font-bold text-gray-900 tracking-wide uppercase">
      <span>GRAND TOTAL</span>
      <span className="text-base">£{grandTotal.toFixed(2)}</span>
    </div>
  );
};
