import React from 'react';
import { Badge } from '../../../components/common/Badge';
import { Button } from '../../../components/common/Button';

export interface ReceiptHeaderProps {
  onRefresh?: () => void;
}

export const ReceiptHeader: React.FC<ReceiptHeaderProps> = ({ onRefresh }) => {
  const currentDate = new Date().toLocaleDateString();

  const handleRefreshClick = () => {
    console.log('Refresh receipt clicked');
    if (onRefresh) {
      onRefresh();
    }
  };

  const handlePrintPreviewClick = () => {
    console.log('Print preview clicked');
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-[var(--color-border-divider)] mb-6">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold text-[var(--color-text-main)]">Receipt Module</h1>
        <Badge variant="neutral">INFYPOS Superstore</Badge>
        <Badge variant="success">Print Preview</Badge>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm text-[var(--color-text-muted)]">{currentDate}</span>
        <Button variant="secondary" onClick={handleRefreshClick}>
          Refresh
        </Button>
        <Button variant="primary" onClick={handlePrintPreviewClick}>
          Print Preview
        </Button>
      </div>
    </div>
  );
};
