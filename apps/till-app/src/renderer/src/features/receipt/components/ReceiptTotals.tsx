import React from 'react';
import type { ReceiptTotals as ReceiptTotalsType, ReceiptMetadata } from '../types';
import { ReceiptTotalsSection } from './ReceiptTotalsSection';

export interface ReceiptTotalsProps {
  totals: ReceiptTotalsType;
  metadata?: ReceiptMetadata;
}

export const ReceiptTotals = React.memo<ReceiptTotalsProps>(({ totals, metadata }) => {
  if (!totals) {
    return null;
  }

  return <ReceiptTotalsSection totals={totals} metadata={metadata} />;
});

ReceiptTotals.displayName = 'ReceiptTotals';
