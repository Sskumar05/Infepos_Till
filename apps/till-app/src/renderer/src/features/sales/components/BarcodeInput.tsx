import React from 'react';
import { Input } from '../../../components/forms/Input';
import { Button } from '../../../components/common/Button';

export const BarcodeInput = React.memo(function BarcodeInput() {
  const handleScan = () => {
    console.log('BarcodeInput: Scan Barcode');
  };

  return (
    <div className="flex items-center gap-2">
      <div className="relative flex-1 min-w-[140px]">
        {/* Barcode icon */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)]">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="3" y1="5" x2="3" y2="19" />
            <line x1="7" y1="5" x2="7" y2="19" />
            <line x1="11" y1="5" x2="11" y2="19" />
            <line x1="15" y1="5" x2="15" y2="19" />
            <line x1="19" y1="5" x2="19" y2="19" />
          </svg>
        </div>
        <Input
          type="text"
          placeholder="Scan barcode..."
          className="pl-9"
          aria-label="Barcode input"
          readOnly
        />
      </div>
      <Button
        id="btn-barcode-scan"
        variant="secondary"
        className="h-10 px-3 shrink-0 text-sm"
        onClick={handleScan}
        aria-label="Activate barcode scanner"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5" aria-hidden="true">
          <polyline points="16 3 21 3 21 8" />
          <line x1="4" y1="20" x2="21" y2="3" />
          <polyline points="21 16 21 21 16 21" />
          <line x1="15" y1="15" x2="21" y2="21" />
        </svg>
        Scan
      </Button>
    </div>
  );
});
