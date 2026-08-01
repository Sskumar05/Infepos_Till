import React from 'react';
import type { Customer } from '../types';
import { Card, CardHeader, CardBody } from '../../../components/common/Card';
import { Badge } from '../../../components/common/Badge';

export interface CustomerStatisticsCardProps {
  customer: Customer;
}

const getLoyaltyVariant = (level: string): 'neutral' | 'warning' | 'success' | 'danger' => {
  switch (level) {
    case 'GOLD': return 'warning';
    case 'SILVER': return 'neutral';
    case 'PLATINUM': return 'neutral';
    default: return 'neutral';
  }
};

export const CustomerStatisticsCard = React.memo<CustomerStatisticsCardProps>(({ customer }) => {
  return (
    <Card>
      <CardHeader className="py-3 px-4">
        <h3 className="text-sm font-semibold text-[var(--color-text-main)]">Statistics</h3>
      </CardHeader>
      <CardBody className="p-4 space-y-3">
        <div className="flex justify-between items-center text-sm">
          <span className="font-medium text-[var(--color-text-muted)]">Loyalty Level</span>
          <Badge variant={getLoyaltyVariant(customer.loyaltyLevel)}>{customer.loyaltyLevel}</Badge>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="font-medium text-[var(--color-text-muted)]">Loyalty Points</span>
          <span className="font-semibold text-[var(--color-text-main)]">{customer.loyaltyPoints.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="font-medium text-[var(--color-text-muted)]">Total Orders</span>
          <span className="text-[var(--color-text-main)]">—</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="font-medium text-[var(--color-text-muted)]">Total Spend</span>
          <span className="text-[var(--color-text-main)]">—</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="font-medium text-[var(--color-text-muted)]">Average Order</span>
          <span className="text-[var(--color-text-main)]">—</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="font-medium text-[var(--color-text-muted)]">Customer Since</span>
          <span className="text-[var(--color-text-main)]">{customer.createdAt.slice(0, 10)}</span>
        </div>
      </CardBody>
    </Card>
  );
});

CustomerStatisticsCard.displayName = 'CustomerStatisticsCard';
