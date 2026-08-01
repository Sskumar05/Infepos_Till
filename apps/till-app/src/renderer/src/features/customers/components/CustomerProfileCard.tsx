import React from 'react';
import type { Customer } from '../types';
import { Card, CardBody } from '../../../components/common/Card';
import { Badge } from '../../../components/common/Badge';
import { Divider } from '../../../components/common/Divider';

export interface CustomerProfileCardProps {
  customer: Customer;
}

const getTypeVariant = (type: string): 'neutral' | 'warning' | 'success' | 'danger' => {
  switch (type) {
    case 'VIP': return 'warning';
    case 'MEMBER': return 'success';
    case 'BLOCKED': return 'danger';
    default: return 'neutral';
  }
};

const getStatusVariant = (status: string): 'neutral' | 'warning' | 'success' | 'danger' => {
  switch (status) {
    case 'ACTIVE': return 'success';
    case 'INACTIVE': return 'neutral';
    case 'BLOCKED': return 'danger';
    default: return 'neutral';
  }
};

export const CustomerProfileCard = React.memo<CustomerProfileCardProps>(({ customer }) => {
  const initials = customer.firstName.charAt(0) + customer.lastName.charAt(0);

  return (
    <Card>
      <CardBody className="p-5 flex flex-col items-center text-center space-y-4">
        {/* Avatar Placeholder */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-bg-tertiary)] text-2xl font-bold text-[var(--color-text-muted)] ring-4 ring-[var(--color-border-default)]">
          {initials}
        </div>

        {/* Name & Badges */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-[var(--color-text-main)]">{customer.fullName}</h3>
          <p className="text-xs font-mono text-[var(--color-text-muted)]">{customer.customerCode}</p>
          <div className="flex justify-center gap-2">
            <Badge variant={getTypeVariant(customer.customerType)}>{customer.customerType}</Badge>
            <Badge variant={getStatusVariant(customer.status)}>{customer.status}</Badge>
          </div>
        </div>

        <Divider className="w-full border-[var(--color-border-default)]" />

        {/* Info Rows */}
        <div className="w-full space-y-2 text-left text-sm">
          <div className="flex justify-between">
            <span className="text-[var(--color-text-muted)] font-medium">Gender</span>
            <span className="text-[var(--color-text-main)]">{customer.gender ?? '—'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--color-text-muted)] font-medium">Date of Birth</span>
            <span className="text-[var(--color-text-main)]">{customer.dateOfBirth ?? '—'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--color-text-muted)] font-medium">Member Since</span>
            <span className="text-[var(--color-text-main)]">{customer.createdAt.slice(0, 10)}</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
});

CustomerProfileCard.displayName = 'CustomerProfileCard';
