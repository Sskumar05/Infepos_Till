import React from 'react';
import { CustomerSelector } from './CustomerSelector';
import { CustomerInfo } from './CustomerInfo';
import { CustomerActions } from './CustomerActions';
import { Divider } from '../../../components/common/Divider';
import type { Customer } from '../types';

interface CustomerPanelProps {
  customers: Customer[];
}

export const CustomerPanel = React.memo(function CustomerPanel({ customers }: CustomerPanelProps) {
  return (
    <div className="flex flex-col border-t border-[var(--color-border-default)]">
      <div className="py-4">
        <CustomerSelector customers={customers} />
      </div>
      
      <Divider />
      
      <div className="py-4">
        <CustomerInfo />
      </div>

      <Divider />

      <div className="pt-4">
        <CustomerActions />
      </div>
    </div>
  );
});
