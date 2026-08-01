import React from 'react';
import { Input } from '../../../components/forms/Input';
import { ProductFormSection } from './ProductFormSection';

export const ProductPricingSection = React.memo(function ProductPricingSection() {
  return (
    <ProductFormSection title="Pricing">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          type="number"
          label="Cost Price (£)"
          placeholder="0.00"
          step="0.01"
          min="0"
        />
        <Input
          type="number"
          label="Selling Price (£)"
          placeholder="0.00"
          step="0.01"
          min="0"
        />
        <div className="sm:col-span-2">
          <Input
            type="number"
            label="Tax Rate (%)"
            placeholder="20"
            step="0.1"
            min="0"
          />
        </div>
      </div>
    </ProductFormSection>
  );
});
