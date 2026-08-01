import React from 'react';
import { Card, CardHeader, CardBody } from '../../../components/common/Card';
import { Input } from '../../../components/forms/Input';

export const CustomerAddressSection = React.memo(() => {
  return (
    <Card>
      <CardHeader className="py-3 px-4">
        <h3 className="text-sm font-semibold text-[var(--color-text-main)]">Address</h3>
      </CardHeader>
      <CardBody className="p-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Input
            label="Address Line 1"
            placeholder="e.g. 221B Baker Street"
          />
        </div>
        <div className="sm:col-span-2">
          <Input
            label="Address Line 2"
            placeholder="e.g. Flat 4 (optional)"
          />
        </div>
        <Input
          label="City"
          placeholder="e.g. London"
        />
        <Input
          label="Postcode"
          placeholder="e.g. NW1 6XE"
        />
        <div className="sm:col-span-2">
          <Input
            label="Country"
            placeholder="e.g. United Kingdom"
            defaultValue="United Kingdom"
          />
        </div>
      </CardBody>
    </Card>
  );
});

CustomerAddressSection.displayName = 'CustomerAddressSection';
