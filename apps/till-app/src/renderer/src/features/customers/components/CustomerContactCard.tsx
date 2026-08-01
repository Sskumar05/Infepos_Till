import React from 'react';
import type { Customer } from '../types';
import { Card, CardHeader, CardBody } from '../../../components/common/Card';

export interface CustomerContactCardProps {
  customer: Customer;
}

export const CustomerContactCard = React.memo<CustomerContactCardProps>(({ customer }) => {
  const rows: { label: string; value: string }[] = [
    { label: 'Email', value: customer.email },
    { label: 'Phone', value: customer.phone },
    { label: 'Alternate Phone', value: '—' },
    { label: 'Preferred Contact', value: 'Email' },
  ];

  return (
    <Card>
      <CardHeader className="py-3 px-4">
        <h3 className="text-sm font-semibold text-[var(--color-text-main)]">Contact Details</h3>
      </CardHeader>
      <CardBody className="p-4 space-y-3">
        {rows.map(({ label, value }) => (
          <div key={label} className="flex justify-between items-start gap-4 text-sm">
            <span className="shrink-0 font-medium text-[var(--color-text-muted)]">{label}</span>
            <span className="text-right text-[var(--color-text-main)] break-all">{value}</span>
          </div>
        ))}
      </CardBody>
    </Card>
  );
});

CustomerContactCard.displayName = 'CustomerContactCard';
