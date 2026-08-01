import React from 'react';

export const ReceiptItemsHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center pb-1 border-b border-gray-300 font-bold text-xs text-gray-800 uppercase tracking-wider">
      <div className="flex-1">Item</div>
      <div className="w-10 text-center">Qty</div>
      <div className="w-16 text-right">Price</div>
      <div className="w-16 text-right">Total</div>
    </div>
  );
};
