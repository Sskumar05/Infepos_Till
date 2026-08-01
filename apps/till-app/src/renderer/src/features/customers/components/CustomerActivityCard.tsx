import React from 'react';
import type { Customer } from '../types';
import { Card, CardHeader, CardBody } from '../../../components/common/Card';

export interface CustomerActivityCardProps {
  customer: Customer;
}

export const CustomerActivityCard = React.memo<CustomerActivityCardProps>(({ customer }) => {
  const rows: { label: string; value: string }[] = [
    { label: 'Created By', value: 'System' },
    { label: 'Created At', value: customer.createdAt.slice(0, 10) },
    { label: 'Updated By', value: 'System' },
    { label: 'Updated At', value: customer.updatedAt.slice(0, 10) },
    { label: 'Last Purchase', value: '—' },
    { label: 'Last Login', value: '—' },
  ];

  return (
    <Card>
      <CardHeader className="py-3 px-4">
        <h3 className="text-sm font-semibold text-[var(--color-text-main)]">Activity</h3>
      </CardHeader>
      <CardBody className="p-4 space-y-3">
        {rows.map(({ label, value }) => (
          <div key={label} className="flex justify-between items-center text-sm">
            <span className="font-medium text-[var(--color-text-muted)]">{label}</span>
            <span className="text-[var(--color-text-main)]">{value}</span>
          </div>
        ))}
      </CardBody>
    </Card>
  );
});

CustomerActivityCard.displayName = 'CustomerActivityCard';
