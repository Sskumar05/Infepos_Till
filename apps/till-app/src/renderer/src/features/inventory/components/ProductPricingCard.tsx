import React from 'react';
import { Card, CardBody, CardHeader } from '../../../components/common/Card';
import type { Product } from '../types';

interface ProductPricingCardProps {
  product: Product;
  profitMargin: string;
}

function formatCurrency(value: number): string {
  return `£${value.toFixed(2)}`;
}

export const ProductPricingCard = React.memo(function ProductPricingCard({ product, profitMargin }: ProductPricingCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <h3 className="text-base font-semibold text-[var(--color-text-main)] leading-tight">
          Pricing Details
        </h3>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-[var(--color-text-muted)]">Cost Price</p>
            <p className="text-sm font-medium text-[var(--color-text-main)] mt-0.5">
              {formatCurrency(product.costPrice)}
            </p>
          </div>
          
          <div>
            <p className="text-xs text-[var(--color-text-muted)]">Selling Price</p>
            <p className="text-sm font-semibold text-[var(--color-text-main)] mt-0.5">
              {formatCurrency(product.sellingPrice)}
            </p>
          </div>
          
          <div>
            <p className="text-xs text-[var(--color-text-muted)]">Tax Rate</p>
            <p className="text-sm text-[var(--color-text-main)] mt-0.5">
              {(product.taxRate * 100).toFixed(0)}%
            </p>
          </div>
          
          <div>
            <p className="text-xs text-[var(--color-text-muted)]">Profit Margin</p>
            <p className="text-sm font-medium text-[var(--color-brand-success)] mt-0.5">
              {profitMargin}
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
});
