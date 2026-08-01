import React from 'react';
import type { Customer } from '../types';
import { Card, CardBody } from '../../../components/common/Card';
import { CustomerTableRow } from './CustomerTableRow';
import { EmptyState } from '../../../components/feedback/EmptyState';

export interface CustomerTableProps {
  customers: Customer[];
}

export const CustomerTable = React.memo<CustomerTableProps>(({ customers }) => {
  if (!customers || customers.length === 0) {
    return (
      <Card className="w-full h-full flex items-center justify-center">
        <CardBody>
          <EmptyState
            title="No Customers Found"
            description="Try adjusting your search or add a new customer."
          />
        </CardBody>
      </Card>
    );
  }

  return (
    <Card className="w-full flex-1 flex flex-col overflow-hidden">
      <CardBody className="p-0 flex-1 overflow-x-auto overflow-y-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead className="bg-[var(--color-bg-secondary)] sticky top-0 z-10 border-b border-[var(--color-border)]">
            <tr>
              <th className="p-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                Code
              </th>
              <th className="p-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                Full Name
              </th>
              <th className="p-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                Email
              </th>
              <th className="p-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                Phone
              </th>
              <th className="p-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                Type
              </th>
              <th className="p-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                Loyalty
              </th>
              <th className="p-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                Status
              </th>
              <th className="p-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border)]">
            {customers.map((customer) => (
              <CustomerTableRow key={customer.id} customer={customer} />
            ))}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
});

CustomerTable.displayName = 'CustomerTable';
