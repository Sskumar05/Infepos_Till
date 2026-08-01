import React from 'react';
import type { Customer } from '../types';
import { Card, CardHeader, CardBody } from '../../../components/common/Card';

export interface CustomerAddressCardProps {
  customer: Customer;
}

export const CustomerAddressCard = React.memo<CustomerAddressCardProps>(({ customer }) => {
  const rows: { label: string; value: string }[] = [
    { label: 'Address', value: customer.address },
    { label: 'Address Line 2', value: '—' },
    { label: 'City', value: customer.city },
    { label: 'Postcode', value: customer.postcode },
    { label: 'Country', value: customer.country },
  ];

  return (
    <Card>
      <CardHeader className="py-3 px-4">
        <h3 className="text-sm font-semibold text-[var(--color-text-main)]">Address</h3>
      </CardHeader>
      <CardBody className="p-4 space-y-3">
        {rows.map(({ label, value }) => (
          <div key={label} className="flex justify-between items-start gap-4 text-sm">
            <span className="shrink-0 font-medium text-[var(--color-text-muted)]">{label}</span>
            <span className="text-right text-[var(--color-text-main)]">{value}</span>
          </div>
        ))}
      </CardBody>
    </Card>
  );
});

CustomerAddressCard.displayName = 'CustomerAddressCard';
