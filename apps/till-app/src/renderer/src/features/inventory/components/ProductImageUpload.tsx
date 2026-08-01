import React from 'react';
import { Button } from '../../../components/common/Button';
import { ProductFormSection } from './ProductFormSection';

export const ProductImageUpload = React.memo(function ProductImageUpload() {
  const handleUpload = () => {
    console.log('ProductImageUpload: Upload clicked');
  };

  const handleRemove = () => {
    console.log('ProductImageUpload: Remove clicked');
  };

  return (
    <ProductFormSection title="Product Image">
      <div className="flex flex-col items-center gap-4">
        {/* Image Placeholder */}
        <div className="w-48 h-48 rounded-[var(--radius-lg)] border-2 border-dashed border-[var(--color-border-default)] bg-[var(--color-bg-base)] flex items-center justify-center text-[var(--color-text-muted)] overflow-hidden">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
        
        <div className="flex items-center gap-3 w-full justify-center">
          <Button variant="secondary" onClick={handleUpload}>
            Upload Image
          </Button>
          <Button variant="ghost" onClick={handleRemove} className="text-[var(--color-brand-danger)] hover:text-red-700">
            Remove
          </Button>
        </div>
        <p className="text-xs text-[var(--color-text-muted)] text-center">
          Recommended size: 500x500px (Max 2MB)
        </p>
      </div>
    </ProductFormSection>
  );
});
