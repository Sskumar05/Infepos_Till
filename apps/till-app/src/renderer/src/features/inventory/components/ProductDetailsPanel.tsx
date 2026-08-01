import React from 'react';
import { Button } from '../../../components/common/Button';
import { Divider } from '../../../components/common/Divider';
import { ProductInfoCard } from './ProductInfoCard';
import { ProductPricingCard } from './ProductPricingCard';
import { ProductStockCard } from './ProductStockCard';
import { ProductActivityCard } from './ProductActivityCard';
import type { Product } from '../types';

interface ProductDetailsPanelProps {
  product: Product;
  onClose: () => void;
}

export const ProductDetailsPanel = React.memo(function ProductDetailsPanel({ product, onClose }: ProductDetailsPanelProps) {
  
  // Dummy profit margin for presentation purposes
  const profitMargin = '42%';

  const handleClose = () => {
    console.log('ProductDetailsPanel: Close clicked');
    onClose();
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto pb-8 h-full">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[var(--color-text-main)]">
          Product Details
        </h2>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </div>
      
      <Divider />

      {/* Grid Layout:
          Desktop: 2 columns
          Tablet: 2 columns (handled by sm/md/lg breakpoints)
          Mobile: 1 column
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        
        {/* Top-left: Full width Info on tablet, left column on desktop */}
        <div className="lg:col-span-2">
          <ProductInfoCard product={product} />
        </div>
        
        {/* Bottom row: Pricing, Stock, Activity */}
        <div className="flex flex-col gap-6">
          <ProductPricingCard product={product} profitMargin={profitMargin} />
        </div>
        
        <div className="flex flex-col gap-6">
          <ProductStockCard product={product} />
          <ProductActivityCard product={product} />
        </div>
        
      </div>
      
    </div>
  );
});
