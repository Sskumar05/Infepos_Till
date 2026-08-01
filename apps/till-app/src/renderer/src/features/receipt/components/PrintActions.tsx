import React from 'react';
import { PrintButton } from './PrintButton';
import { ExportPdfButton } from './ExportPdfButton';
import { EmailReceiptButton } from './EmailReceiptButton';
import { ReceiptOptionsPanel } from './ReceiptOptionsPanel';
import { Card, CardHeader, CardBody } from '../../../components/common/Card';

export const PrintActions = React.memo(() => {
  return (
    <div className="flex flex-col space-y-4 w-full">
      <Card className="w-full">
        <CardHeader className="py-3 px-4">
          <h3 className="text-sm font-semibold text-[var(--color-text-main)]">Print & Export Actions</h3>
        </CardHeader>
        <CardBody className="p-4 space-y-3">
          <PrintButton />
          <ExportPdfButton />
          <EmailReceiptButton />
        </CardBody>
      </Card>

      <ReceiptOptionsPanel />
    </div>
  );
});

PrintActions.displayName = 'PrintActions';
