import React from 'react';
import type { Customer } from '../types';
import { CustomerProfileCard } from './CustomerProfileCard';
import { CustomerContactCard } from './CustomerContactCard';
import { CustomerAddressCard } from './CustomerAddressCard';
import { CustomerStatisticsCard } from './CustomerStatisticsCard';
import { CustomerActivityCard } from './CustomerActivityCard';
import { Button } from '../../../components/common/Button';
import { Divider } from '../../../components/common/Divider';

export interface CustomerDetailsPanelProps {
  customer: Customer;
}

export const CustomerDetailsPanel = React.memo<CustomerDetailsPanelProps>(({ customer }) => {
  return (
    <div className="flex h-full w-full flex-col bg-[var(--color-bg-base)] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto w-full max-w-5xl">

        {/* Panel title */}
        <div className="mb-6">
          <h2 className="text-xl font-bold tracking-tight text-[var(--color-text-main)]">
            Customer Profile
          </h2>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">
            Read-only view of customer information.
          </p>
        </div>

        {/* 2-column grid on desktop, single column on mobile */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Left column */}
          <div className="flex flex-col gap-6">
            <CustomerProfileCard customer={customer} />
            <CustomerContactCard customer={customer} />
            <CustomerAddressCard customer={customer} />
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            <CustomerStatisticsCard customer={customer} />
            <CustomerActivityCard customer={customer} />
          </div>

        </div>

        <Divider className="my-6 border-[var(--color-border-default)]" />

        {/* Bottom action bar */}
        <div className="flex justify-end">
          <Button
            variant="secondary"
            onClick={() => console.log('Close Customer Details Panel clicked')}
          >
            Close
          </Button>
        </div>

      </div>
    </div>
  );
});

CustomerDetailsPanel.displayName = 'CustomerDetailsPanel';
