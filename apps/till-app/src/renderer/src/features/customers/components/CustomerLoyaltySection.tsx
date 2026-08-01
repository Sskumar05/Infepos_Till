import React from 'react';
import { Card, CardHeader, CardBody } from '../../../components/common/Card';
import { Input } from '../../../components/forms/Input';

const LOYALTY_OPTIONS = ['BRONZE', 'SILVER', 'GOLD', 'PLATINUM'];

export const CustomerLoyaltySection = React.memo(() => {
  return (
    <Card>
      <CardHeader className="py-3 px-4">
        <h3 className="text-sm font-semibold text-[var(--color-text-main)]">Loyalty & Membership</h3>
      </CardHeader>
      <CardBody className="p-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col space-y-1.5">
          <label className="block text-sm font-medium text-[var(--color-text-main)]">Loyalty Level</label>
          <select className="h-10 w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-2 text-sm text-[var(--color-text-main)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] cursor-pointer">
            {LOYALTY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <Input
          type="number"
          label="Loyalty Points"
          placeholder="e.g. 500"
          min={0}
        />

        <Input
          label="Membership Number"
          placeholder="e.g. MBR-2026-0001"
        />

        <div className="sm:col-span-2 flex flex-col space-y-1.5">
          <label className="block text-sm font-medium text-[var(--color-text-main)]">Notes</label>
          <textarea
            rows={3}
            placeholder="Any internal notes about this customer..."
            className="w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-2 text-sm text-[var(--color-text-main)] placeholder:text-[var(--color-text-muted)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] resize-none"
          />
        </div>
      </CardBody>
    </Card>
  );
});

CustomerLoyaltySection.displayName = 'CustomerLoyaltySection';
