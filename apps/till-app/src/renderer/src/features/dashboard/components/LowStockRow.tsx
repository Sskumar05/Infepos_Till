import React from 'react';
import { LowStockProduct } from '../types';
import { Badge } from '../../../components/common/Badge';

interface LowStockRowProps {
  product: LowStockProduct;
}

export const LowStockRow = React.memo(function LowStockRow({ product }: LowStockRowProps) {
  const getStatusVariant = (status: LowStockProduct['status']) => {
    switch (status) {
      case 'CRITICAL':
        return 'danger';
      case 'LOW':
        return 'warning';
      case 'NORMAL':
        return 'success';
      default:
        return 'neutral';
    }
  };

  return (
    <>
      {/* Desktop & Tablet Table Row */}
      <tr className="hidden sm:table-row hover:bg-[var(--color-bg-base)] transition-colors border-b border-[var(--color-border-default)] last:border-0">
        <td className="py-3 px-4">
          <p className="text-sm font-medium text-[var(--color-text-primary)]">
            {product.name}
          </p>
        </td>
        <td className="py-3 px-4 text-sm text-[var(--color-text-muted)]">
          {product.sku}
        </td>
        <td className="py-3 px-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-[var(--color-text-primary)]">
              {product.currentStock}
            </span>
            <span className="text-xs text-[var(--color-text-muted)]">
              / {product.minimumStock}
            </span>
          </div>
        </td>
        <td className="py-3 px-4 text-right">
          <Badge variant={getStatusVariant(product.status)} className="text-xs">
            {product.status}
          </Badge>
        </td>
      </tr>

      {/* Mobile Stacked Layout */}
      <tr className="sm:hidden block border-b border-[var(--color-border-default)] last:border-0 p-4">
        <td className="block">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-sm font-medium text-[var(--color-text-primary)]">
                {product.name}
              </p>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                {product.sku}
              </p>
            </div>
            <div className="text-right">
              <Badge variant={getStatusVariant(product.status)} className="text-xs">
                {product.status}
              </Badge>
            </div>
          </div>
          <div className="flex items-center justify-between mt-3 bg-[var(--color-bg-base)] p-2 rounded-[var(--radius-sm)]">
            <span className="text-xs text-[var(--color-text-muted)]">Current Stock</span>
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                {product.currentStock}
              </span>
              <span className="text-xs text-[var(--color-text-muted)]">
                (Min: {product.minimumStock})
              </span>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}
);
