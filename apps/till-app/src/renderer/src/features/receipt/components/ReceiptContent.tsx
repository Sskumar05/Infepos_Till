import React from 'react';
import type { ReceiptData } from '../types';
import { ReceiptPreview } from './ReceiptPreview';
import { ReceiptContainer } from './ReceiptContainer';
import { PrintActions } from './PrintActions';

export interface ReceiptContentProps {
  receipt: ReceiptData | null;
}

export const ReceiptContent: React.FC<ReceiptContentProps> = ({ receipt }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full h-full min-h-0">
      {/* Left side: ReceiptPreview (65% on Desktop, 60% on Tablet, 100% on Mobile) */}
      <div className="w-full lg:w-[65%] md:w-[60%] flex flex-col min-h-0">
        <ReceiptContainer>
          <ReceiptPreview receipt={receipt} />
        </ReceiptContainer>
      </div>

      {/* Right side: PrintActions Panel (35% on Desktop, 40% on Tablet, 100% on Mobile) */}
      <div className="w-full lg:w-[35%] md:w-[40%] flex flex-col min-h-0">
        <PrintActions />
      </div>
    </div>
  );
};
