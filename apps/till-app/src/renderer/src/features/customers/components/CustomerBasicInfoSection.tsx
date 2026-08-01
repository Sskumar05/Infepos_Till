import React from 'react';
import { Card, CardHeader, CardBody } from '../../../components/common/Card';
import { Input } from '../../../components/forms/Input';

const GENDER_OPTIONS = ['Prefer not to say', 'Male', 'Female', 'Non-binary', 'Other'];
const TYPE_OPTIONS = ['REGULAR', 'MEMBER', 'VIP', 'WHOLESALE'];
const STATUS_OPTIONS = ['ACTIVE', 'INACTIVE', 'BLOCKED'];

export const CustomerBasicInfoSection = React.memo(() => {
  return (
    <Card>
      <CardHeader className="py-3 px-4">
        <h3 className="text-sm font-semibold text-[var(--color-text-main)]">Basic Information</h3>
      </CardHeader>
      <CardBody className="p-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          label="Customer Code"
          placeholder="e.g. CUS-1001"
          readOnly
          className="bg-[var(--color-bg-secondary)] cursor-not-allowed"
        />
        <div />

        <Input
          label="First Name"
          placeholder="e.g. James"
        />
        <Input
          label="Last Name"
          placeholder="e.g. Smith"
        />

        <div className="flex flex-col space-y-1.5">
          <label className="block text-sm font-medium text-[var(--color-text-main)]">Gender</label>
          <select className="h-10 w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-2 text-sm text-[var(--color-text-main)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] cursor-pointer">
            {GENDER_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <Input
          type="date"
          label="Date of Birth"
        />

        <div className="flex flex-col space-y-1.5">
          <label className="block text-sm font-medium text-[var(--color-text-main)]">Customer Type</label>
          <select className="h-10 w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-2 text-sm text-[var(--color-text-main)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] cursor-pointer">
            {TYPE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col space-y-1.5">
          <label className="block text-sm font-medium text-[var(--color-text-main)]">Status</label>
          <select className="h-10 w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-2 text-sm text-[var(--color-text-main)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] cursor-pointer">
            {STATUS_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </CardBody>
    </Card>
  );
});

CustomerBasicInfoSection.displayName = 'CustomerBasicInfoSection';
