import React from 'react';
import { CustomerBasicInfoSection } from './CustomerBasicInfoSection';
import { CustomerContactSection } from './CustomerContactSection';
import { CustomerAddressSection } from './CustomerAddressSection';
import { CustomerLoyaltySection } from './CustomerLoyaltySection';
import { Button } from '../../../components/common/Button';
import { Divider } from '../../../components/common/Divider';

export const CustomerForm = React.memo(() => {
  return (
    <div className="flex h-full w-full flex-col bg-[var(--color-bg-base)] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto w-full max-w-5xl">

        {/* Form title */}
        <div className="mb-6">
          <h2 className="text-xl font-bold tracking-tight text-[var(--color-text-main)]">
            Customer Details
          </h2>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">
            Fill in the customer information below.
          </p>
        </div>

        {/* Two-column grid on desktop, single column on mobile */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Left column */}
          <div className="flex flex-col gap-6">
            <CustomerBasicInfoSection />
            <CustomerContactSection />
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            <CustomerAddressSection />
            <CustomerLoyaltySection />
          </div>

        </div>

        {/* Divider before actions */}
        <Divider className="my-6 border-[var(--color-border-default)]" />

        {/* Bottom action bar */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button
            variant="secondary"
            onClick={() => console.log('Cancel clicked')}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => console.log('Save Customer clicked')}
          >
            Save Customer
          </Button>
        </div>

      </div>
    </div>
  );
});

CustomerForm.displayName = 'CustomerForm';
