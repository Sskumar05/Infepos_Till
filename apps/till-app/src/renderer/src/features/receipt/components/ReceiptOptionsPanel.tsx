import React from 'react';
import { Card, CardHeader, CardBody } from '../../../components/common/Card';
import { Badge } from '../../../components/common/Badge';
import { Divider } from '../../../components/common/Divider';

export const ReceiptOptionsPanel = React.memo(() => {
  return (
    <Card className="w-full">
      <CardHeader className="py-3 px-4">
        <h3 className="text-sm font-semibold text-[var(--color-text-main)]">Receipt Settings Placeholder</h3>
      </CardHeader>
      <CardBody className="p-4 space-y-3 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-[var(--color-text-muted)] font-medium">Paper Size</span>
          <div className="flex gap-1">
            <Badge variant="neutral">58mm</Badge>
            <Badge variant="success">80mm</Badge>
            <Badge variant="neutral">A4</Badge>
          </div>
        </div>

        <Divider className="my-1 border-gray-100" />

        <div className="flex justify-between items-center">
          <span className="text-[var(--color-text-muted)] font-medium">Currency</span>
          <span className="font-semibold text-[var(--color-text-main)]">GBP (£)</span>
        </div>

        <Divider className="my-1 border-gray-100" />

        <div className="flex justify-between items-center">
          <span className="text-[var(--color-text-muted)] font-medium">Tax Label</span>
          <span className="font-semibold text-[var(--color-text-main)]">VAT (20%)</span>
        </div>

        <Divider className="my-1 border-gray-100" />

        <div className="flex justify-between items-center">
          <span className="text-[var(--color-text-muted)] font-medium">Show Logo</span>
          <Badge variant="success">ON</Badge>
        </div>

        <Divider className="my-1 border-gray-100" />

        <div className="flex justify-between items-center">
          <span className="text-[var(--color-text-muted)] font-medium">Show Tax</span>
          <Badge variant="success">ON</Badge>
        </div>

        <Divider className="my-1 border-gray-100" />

        <div className="flex justify-between items-center">
          <span className="text-[var(--color-text-muted)] font-medium">Footer Message</span>
          <Badge variant="success">ON</Badge>
        </div>
      </CardBody>
    </Card>
  );
});

ReceiptOptionsPanel.displayName = 'ReceiptOptionsPanel';
