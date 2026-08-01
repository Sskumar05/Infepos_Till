import React from 'react';
import type { Customer, CustomerType, CustomerStatus, LoyaltyLevel } from '../types';
import { Badge } from '../../../components/common/Badge';
import { Button } from '../../../components/common/Button';

export interface CustomerTableRowProps {
  customer: Customer;
}

const getTypeVariant = (type: CustomerType): 'neutral' | 'warning' | 'success' | 'danger' => {
  switch (type) {
    case 'VIP': return 'warning';
    case 'WHOLESALE': return 'neutral';
    case 'MEMBER': return 'success';
    default: return 'neutral';
  }
};

const getStatusVariant = (status: CustomerStatus): 'neutral' | 'warning' | 'success' | 'danger' => {
  switch (status) {
    case 'ACTIVE': return 'success';
    case 'INACTIVE': return 'neutral';
    case 'BLOCKED': return 'danger';
    default: return 'neutral';
  }
};

const getLoyaltyVariant = (level: LoyaltyLevel): 'neutral' | 'warning' | 'success' | 'danger' => {
  switch (level) {
    case 'PLATINUM': return 'neutral';
    case 'GOLD': return 'warning';
    case 'SILVER': return 'neutral';
    case 'BRONZE':
    default: return 'neutral';
  }
};

export const CustomerTableRow = React.memo<CustomerTableRowProps>(({ customer }) => {
  const avatarInitials = customer.firstName.charAt(0) + customer.lastName.charAt(0);

  return (
    <tr className="border-b border-[var(--color-border)] last:border-b-0 hover:bg-[var(--color-bg-secondary)] transition-colors">
      <td className="p-3 text-sm font-medium text-[var(--color-text-main)] whitespace-nowrap">
        {customer.customerCode}
      </td>
      <td className="p-3 whitespace-nowrap">
        <div className="flex items-center space-x-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-bg-tertiary)] text-xs font-bold text-[var(--color-text-muted)]">
            {avatarInitials}
          </div>
          <span className="text-sm font-semibold text-[var(--color-text-main)]">
            {customer.fullName}
          </span>
        </div>
      </td>
      <td className="p-3 text-sm text-[var(--color-text-muted)] whitespace-nowrap">
        {customer.email}
      </td>
      <td className="p-3 text-sm text-[var(--color-text-muted)] whitespace-nowrap">
        {customer.phone}
      </td>
      <td className="p-3 whitespace-nowrap">
        <Badge variant={getTypeVariant(customer.customerType)}>
          {customer.customerType}
        </Badge>
      </td>
      <td className="p-3 whitespace-nowrap">
        <Badge variant={getLoyaltyVariant(customer.loyaltyLevel)}>
          {customer.loyaltyLevel}
        </Badge>
      </td>
      <td className="p-3 whitespace-nowrap">
        <Badge variant={getStatusVariant(customer.status)}>
          {customer.status}
        </Badge>
      </td>
      <td className="p-3 whitespace-nowrap text-right">
        <div className="flex justify-end space-x-2">
          <Button
            variant="secondary"
            onClick={() => console.log('View clicked', customer.id)}
          >
            View
          </Button>
          <Button
            variant="secondary"
            onClick={() => console.log('Edit clicked', customer.id)}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            onClick={() => console.log('Delete clicked', customer.id)}
          >
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
});

CustomerTableRow.displayName = 'CustomerTableRow';
