import React from 'react';
import { Card, CardBody, CardHeader } from '../../../components/common/Card';
import { Badge } from '../../../components/common/Badge';
import type { Product, ProductStatus } from '../types';

interface ProductInfoCardProps {
  product: Product;
}

function getProductStatusVariant(status: ProductStatus): 'success' | 'neutral' {
  switch (status) {
    case 'ACTIVE':
      return 'success';
    case 'INACTIVE':
    default:
      return 'neutral';
  }
}

export const ProductInfoCard = React.memo(function ProductInfoCard({ product }: ProductInfoCardProps) {
  const statusVariant = getProductStatusVariant(product.status);

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-[var(--color-text-main)] leading-tight">
            Product Information
          </h3>
          <Badge variant={statusVariant}>
            {product.status === 'ACTIVE' ? 'Active' : 'Inactive'}
          </Badge>
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Image Placeholder */}
          <div className="w-32 h-32 shrink-0 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-base)] flex items-center justify-center text-[var(--color-text-muted)] overflow-hidden">
            {product.image ? (
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            ) : (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            )}
          </div>
          
          {/* Info Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <p className="text-xs text-[var(--color-text-muted)]">Product Name</p>
              <p className="text-sm font-medium text-[var(--color-text-main)] mt-0.5">{product.name}</p>
            </div>
            
            <div>
              <p className="text-xs text-[var(--color-text-muted)]">SKU</p>
              <p className="text-sm font-mono text-[var(--color-text-main)] mt-0.5">{product.sku}</p>
            </div>
            
            <div>
              <p className="text-xs text-[var(--color-text-muted)]">Barcode</p>
              <p className="text-sm font-mono text-[var(--color-text-main)] mt-0.5">{product.barcode || '—'}</p>
            </div>
            
            <div>
              <p className="text-xs text-[var(--color-text-muted)]">Category</p>
              <p className="text-sm text-[var(--color-text-main)] mt-0.5">{product.category}</p>
            </div>
            
            <div>
              <p className="text-xs text-[var(--color-text-muted)]">Brand</p>
              <p className="text-sm text-[var(--color-text-main)] mt-0.5">{product.brand || '—'}</p>
            </div>
            
            <div>
              <p className="text-xs text-[var(--color-text-muted)]">Unit</p>
              <p className="text-sm text-[var(--color-text-main)] mt-0.5 capitalize">{product.unit}</p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
});
