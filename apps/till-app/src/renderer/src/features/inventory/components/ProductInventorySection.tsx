import React from 'react';
import { Input } from '../../../components/forms/Input';
import { ProductFormSection } from './ProductFormSection';
import { PRODUCT_STATUS } from '../constants';

export const ProductInventorySection = React.memo(function ProductInventorySection() {
  return (
    <ProductFormSection title="Inventory">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          type="number"
          label="Current Stock"
          placeholder="0"
          min="0"
        />
        <div className="flex flex-col gap-1.5 w-full">
          <label className="block text-sm font-medium text-[var(--color-text-main)]">
            Status
          </label>
          <div className="relative">
            <select
              className="flex h-10 w-full appearance-none rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-2 pr-8 text-sm text-[var(--color-text-main)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)]"
              aria-label="Product status"
              defaultValue={PRODUCT_STATUS.ACTIVE}
            >
              <option value={PRODUCT_STATUS.ACTIVE}>Active</option>
              <option value={PRODUCT_STATUS.INACTIVE}>Inactive</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>
        <Input
          type="number"
          label="Minimum Stock"
          placeholder="0"
          min="0"
        />
        <Input
          type="number"
          label="Maximum Stock"
          placeholder="0"
          min="0"
        />
      </div>
    </ProductFormSection>
  );
});
