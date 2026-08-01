import React from 'react';
import { Card, CardHeader, CardBody } from '../../../components/common/Card';
import { Input } from '../../../components/forms/Input';

export const CustomerContactSection = React.memo(() => {
  return (
    <Card>
      <CardHeader className="py-3 px-4">
        <h3 className="text-sm font-semibold text-[var(--color-text-main)]">Contact Details</h3>
      </CardHeader>
      <CardBody className="p-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          type="email"
          label="Email Address"
          placeholder="e.g. james.smith@example.co.uk"
        />
        <Input
          type="tel"
          label="Phone Number"
          placeholder="e.g. 07700 900101"
        />
        <Input
          type="tel"
          label="Alternate Phone"
          placeholder="e.g. 07700 900202"
        />
      </CardBody>
    </Card>
  );
});

CustomerContactSection.displayName = 'CustomerContactSection';
