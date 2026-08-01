import React from 'react';
import { Card, CardBody, CardHeader } from '../../../components/common/Card';
import type { Product } from '../types';

interface ProductActivityCardProps {
  product: Product;
}

export const ProductActivityCard = React.memo(function ProductActivityCard({ product }: ProductActivityCardProps) {
  // Using static placeholders as per requirements
  const createdBy = 'Admin User';
  const updatedBy = 'Admin User';
  
  const createdDate = new Date(product.createdAt).toLocaleDateString(undefined, {
    year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
  });
  
  const updatedDate = new Date(product.updatedAt).toLocaleDateString(undefined, {
    year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
  });

  return (
    <Card className="h-full">
      <CardHeader>
        <h3 className="text-base font-semibold text-[var(--color-text-main)] leading-tight">
          System Activity
        </h3>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[var(--color-text-muted)]">Created By</p>
              <p className="text-sm font-medium text-[var(--color-text-main)] mt-0.5">{createdBy}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-[var(--color-text-muted)]">Created Date</p>
              <p className="text-sm text-[var(--color-text-main)] mt-0.5">{createdDate}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border-divider)]">
            <div>
              <p className="text-xs text-[var(--color-text-muted)]">Last Updated By</p>
              <p className="text-sm font-medium text-[var(--color-text-main)] mt-0.5">{updatedBy}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-[var(--color-text-muted)]">Last Updated Date</p>
              <p className="text-sm text-[var(--color-text-main)] mt-0.5">{updatedDate}</p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
});
