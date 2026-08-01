import React from 'react';
import type { ReceiptTotals, ReceiptMetadata } from '../types';
import { ReceiptTotalsRow } from './ReceiptTotalsRow';
import { ReceiptGrandTotal } from './ReceiptGrandTotal';
import { ReceiptFooter } from './ReceiptFooter';
import { Divider } from '../../../components/common/Divider';

export interface ReceiptTotalsSectionProps {
  totals: ReceiptTotals;
  metadata?: ReceiptMetadata;
}

export const ReceiptTotalsSection: React.FC<ReceiptTotalsSectionProps> = ({ totals, metadata }) => {
  return (
    <div className="flex flex-col py-2">
      <Divider className="my-2 border-dashed border-gray-300" />
      
      {/* Subtotal, Tax, Discount Rows */}
      <ReceiptTotalsRow label="Subtotal" value={totals.subtotal} />
      <ReceiptTotalsRow label="Tax" value={totals.tax} />
      <ReceiptTotalsRow label="Discount" value={`-£${totals.discount.toFixed(2)}`} />

      {/* Grand Total */}
      <ReceiptGrandTotal grandTotal={totals.grandTotal} />

      {/* Footer */}
      <ReceiptFooter metadata={metadata} />
    </div>
  );
};
