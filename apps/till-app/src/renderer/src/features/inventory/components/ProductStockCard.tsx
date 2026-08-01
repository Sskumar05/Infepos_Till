import React from 'react';
import { Card, CardBody, CardHeader } from '../../../components/common/Card';
import { Badge } from '../../../components/common/Badge';
import type { Product, StockStatus } from '../types';

interface ProductStockCardProps {
  product: Product;
}

function deriveStockStatus(currentStock: number, minimumStock: number): StockStatus {
  if (currentStock === 0) return 'OUT_OF_STOCK';
  if (currentStock <= minimumStock) return 'LOW_STOCK';
  return 'IN_STOCK';
}

function getStockStatusVariant(stockStatus: StockStatus): 'success' | 'warning' | 'danger' {
  switch (stockStatus) {
    case 'IN_STOCK':
      return 'success';
    case 'LOW_STOCK':
      return 'warning';
    case 'OUT_OF_STOCK':
    default:
      return 'danger';
  }
}

function getStockStatusLabel(stockStatus: StockStatus): string {
  switch (stockStatus) {
    case 'IN_STOCK':    return 'In Stock';
    case 'LOW_STOCK':   return 'Low Stock';
    case 'OUT_OF_STOCK': return 'Out of Stock';
  }
}

export const ProductStockCard = React.memo(function ProductStockCard({ product }: ProductStockCardProps) {
  const stockStatus = deriveStockStatus(product.currentStock, product.minimumStock);
  const stockVariant = getStockStatusVariant(stockStatus);

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-[var(--color-text-main)] leading-tight">
            Inventory & Stock
          </h3>
          <Badge variant={stockVariant}>
            {getStockStatusLabel(stockStatus)}
          </Badge>
        </div>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-[var(--color-text-muted)]">Current Stock</p>
            <p className="text-sm font-semibold text-[var(--color-text-main)] mt-0.5">
              {product.currentStock} {product.unit}s
            </p>
          </div>
          
          <div>
            <p className="text-xs text-[var(--color-text-muted)]">Minimum Stock</p>
            <p className="text-sm font-medium text-[var(--color-text-main)] mt-0.5">
              {product.minimumStock}
            </p>
          </div>
          
          <div>
            <p className="text-xs text-[var(--color-text-muted)]">Maximum Stock</p>
            <p className="text-sm font-medium text-[var(--color-text-main)] mt-0.5">
              {product.maximumStock}
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
});
