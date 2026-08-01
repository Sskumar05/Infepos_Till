import React from 'react';
import { Button } from '../../../components/common/Button';
import { Badge } from '../../../components/common/Badge';

export interface CustomersHeaderProps {
  onRefresh: () => void;
}

export const CustomersHeader = React.memo<CustomersHeaderProps>(({ onRefresh }) => {
  const currentDate = new Date().toLocaleDateString('en-GB', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border)] mb-4">
      <div className="flex flex-col">
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl font-bold tracking-tight text-[var(--color-text-main)]">
            Customers
          </h1>
          <Badge variant="neutral">Main Store</Badge>
        </div>
        <p className="text-sm text-[var(--color-text-muted)] mt-1">{currentDate}</p>
      </div>

      <div className="flex space-x-3">
        <Button variant="secondary" onClick={onRefresh}>
          Refresh
        </Button>
        <Button
          variant="primary"
          onClick={() => console.log('Add Customer clicked')}
        >
          Add Customer
        </Button>
      </div>
    </div>
  );
});

CustomersHeader.displayName = 'CustomersHeader';
