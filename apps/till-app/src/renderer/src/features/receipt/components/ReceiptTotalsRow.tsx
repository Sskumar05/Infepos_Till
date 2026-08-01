import React from 'react';

export interface ReceiptTotalsRowProps {
  label: string;
  value: string | number;
  isBold?: boolean;
}

export const ReceiptTotalsRow = React.memo<ReceiptTotalsRowProps>(({ label, value, isBold = false }) => {
  return (
    <div className={`flex justify-between items-center py-1 text-xs ${isBold ? 'font-bold text-gray-900' : 'text-gray-700'}`}>
      <span>{label}</span>
      <span>{typeof value === 'number' ? `£${value.toFixed(2)}` : value}</span>
    </div>
  );
});

ReceiptTotalsRow.displayName = 'ReceiptTotalsRow';
