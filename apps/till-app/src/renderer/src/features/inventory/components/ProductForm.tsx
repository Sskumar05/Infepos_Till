import React from 'react';
import { Button } from '../../../components/common/Button';
import { Input } from '../../../components/forms/Input';
import { ProductFormSection } from './ProductFormSection';
import { ProductImageUpload } from './ProductImageUpload';
import { ProductPricingSection } from './ProductPricingSection';
import { ProductInventorySection } from './ProductInventorySection';
import { PRODUCT_CATEGORIES, PRODUCT_UNITS } from '../constants';

export const ProductForm = React.memo(function ProductForm() {
  const handleSave = () => {
    console.log('ProductForm: Save clicked');
  };

  const handleCancel = () => {
    console.log('ProductForm: Cancel clicked');
  };

  return (
    <div className="flex flex-col gap-6 h-full max-w-5xl mx-auto w-full pb-8">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[var(--color-text-main)]">
          Product Details
        </h2>
        <div className="flex items-center gap-3">
          <Button variant="ghost" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Product
          </Button>
        </div>
      </div>

      {/* Main Grid: 2 columns on desktop, 1 on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Left Column (2/3 width) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          <ProductFormSection title="Basic Information">
            <div className="flex flex-col gap-4">
              <Input
                type="text"
                label="Product Name"
                placeholder="Enter product name"
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  label="SKU"
                  placeholder="e.g. BEV-001"
                />
                <Input
                  type="text"
                  label="Barcode (EAN/UPC)"
                  placeholder="Scan or enter barcode"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-1.5 w-full">
                  <label className="block text-sm font-medium text-[var(--color-text-main)]">
                    Category
                  </label>
                  <div className="relative">
                    <select
                      className="flex h-10 w-full appearance-none rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-2 pr-8 text-sm text-[var(--color-text-main)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)]"
                      aria-label="Category"
                      defaultValue=""
                    >
                      <option value="" disabled>Select category</option>
                      {Object.values(PRODUCT_CATEGORIES).map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)] flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </div>

                <Input
                  type="text"
                  label="Brand"
                  placeholder="Brand name"
                />

                <div className="flex flex-col gap-1.5 w-full">
                  <label className="block text-sm font-medium text-[var(--color-text-main)]">
                    Unit
                  </label>
                  <div className="relative">
                    <select
                      className="flex h-10 w-full appearance-none rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-2 pr-8 text-sm text-[var(--color-text-main)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)]"
                      aria-label="Unit"
                      defaultValue=""
                    >
                      <option value="" disabled>Select unit</option>
                      {Object.values(PRODUCT_UNITS).map(unit => (
                        <option key={unit} value={unit}>{unit}</option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)] flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ProductFormSection>

          <ProductPricingSection />
          <ProductInventorySection />

        </div>

        {/* Right Column (1/3 width) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <ProductImageUpload />
        </div>
      </div>
      
      {/* Footer Buttons for mobile mostly */}
      <div className="flex items-center justify-end gap-3 mt-4 pt-6 border-t border-[var(--color-border-divider)] lg:hidden">
        <Button variant="ghost" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Product
        </Button>
      </div>

    </div>
  );
});
