import React from 'react';
import { Badge } from '../../../components/common/Badge';
import { Button } from '../../../components/common/Button';
import type { Product, ProductStatus, StockStatus } from '../types';

interface InventoryTableRowProps {
  product: Product;
  onView: (id: string) => void;
  onEdit: (id: string) => void;
}

// ---------------------------------------------------------------------------
// Helpers — map domain status values to Badge variants
// ---------------------------------------------------------------------------

function getProductStatusVariant(status: ProductStatus): 'success' | 'neutral' {
  switch (status) {
    case 'ACTIVE':
      return 'success';
    case 'INACTIVE':
    default:
      return 'neutral';
  }
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

function formatCurrency(value: number): string {
  return `£${value.toFixed(2)}`;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export const InventoryTableRow = React.memo(function InventoryTableRow({
  product,
  onView,
  onEdit,
}: InventoryTableRowProps) {
  const stockStatus = deriveStockStatus(product.currentStock, product.minimumStock);
  const productStatusVariant = getProductStatusVariant(product.status);
  const stockVariant = getStockStatusVariant(stockStatus);

  return (
    <>
      {/* ── Desktop / Tablet Table Row ─────────────────────────────────── */}
      <tr
        className="hidden sm:table-row hover:bg-[var(--color-bg-base)] transition-colors border-b border-[var(--color-border-default)] last:border-0"
        aria-label={`Product row: ${product.name}`}
      >
        {/* SKU */}
        <td className="py-3 px-4 text-xs font-mono text-[var(--color-text-muted)] whitespace-nowrap">
          {product.sku}
        </td>

        {/* Barcode */}
        <td className="py-3 px-4 text-xs font-mono text-[var(--color-text-muted)] whitespace-nowrap">
          {product.barcode}
        </td>

        {/* Product Name + Brand */}
        <td className="py-3 px-4 min-w-[160px]">
          <p className="text-sm font-medium text-[var(--color-text-main)] leading-tight">
            {product.name}
          </p>
          <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
            {product.brand}
          </p>
        </td>

        {/* Category */}
        <td className="py-3 px-4 text-sm text-[var(--color-text-muted)] whitespace-nowrap">
          {product.category}
        </td>

        {/* Cost Price */}
        <td className="py-3 px-4 text-sm text-[var(--color-text-muted)] whitespace-nowrap text-right">
          {formatCurrency(product.costPrice)}
        </td>

        {/* Selling Price */}
        <td className="py-3 px-4 text-sm font-semibold text-[var(--color-text-main)] whitespace-nowrap text-right">
          {formatCurrency(product.sellingPrice)}
        </td>

        {/* Current Stock */}
        <td className="py-3 px-4 text-center">
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-sm font-semibold text-[var(--color-text-main)]">
              {product.currentStock}
            </span>
            <span className="text-xs text-[var(--color-text-muted)]">
              min {product.minimumStock}
            </span>
          </div>
        </td>

        {/* Status — Product Lifecycle + Stock Availability */}
        <td className="py-3 px-4 whitespace-nowrap">
          <div className="flex flex-col gap-1 items-start">
            <Badge variant={productStatusVariant} className="text-xs">
              {product.status === 'ACTIVE' ? 'Active' : 'Inactive'}
            </Badge>
            <Badge variant={stockVariant} className="text-xs">
              {getStockStatusLabel(stockStatus)}
            </Badge>
          </div>
        </td>

        {/* Actions */}
        <td className="py-3 px-4 text-right whitespace-nowrap">
          <div className="flex items-center justify-end gap-2">
            <Button
              id={`btn-view-${product.id}`}
              variant="ghost"
              className="h-8 px-3 text-xs"
              onClick={() => {
                console.log('InventoryTableRow: View clicked — productId:', product.id);
                onView(product.id);
              }}
              aria-label={`View product ${product.name}`}
            >
              View
            </Button>
            <Button
              id={`btn-edit-${product.id}`}
              variant="secondary"
              className="h-8 px-3 text-xs"
              onClick={() => {
                console.log('InventoryTableRow: Edit clicked — productId:', product.id);
                onEdit(product.id);
              }}
              aria-label={`Edit product ${product.name}`}
            >
              Edit
            </Button>
          </div>
        </td>
      </tr>

      {/* ── Mobile Stacked Card Layout ──────────────────────────────────── */}
      <tr className="sm:hidden block border-b border-[var(--color-border-default)] last:border-0">
        <td className="block p-4">
          {/* Top row: Name + Status badges */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[var(--color-text-main)] leading-tight truncate">
                {product.name}
              </p>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                {product.brand} · {product.category}
              </p>
            </div>
            <div className="flex flex-col gap-1 items-end shrink-0">
              <Badge variant={productStatusVariant} className="text-xs">
                {product.status === 'ACTIVE' ? 'Active' : 'Inactive'}
              </Badge>
              <Badge variant={stockVariant} className="text-xs">
                {getStockStatusLabel(stockStatus)}
              </Badge>
            </div>
          </div>

          {/* Detail grid */}
          <div className="grid grid-cols-2 gap-2 mb-3 bg-[var(--color-bg-base)] rounded-[var(--radius-md)] p-3">
            <div>
              <p className="text-xs text-[var(--color-text-muted)]">SKU</p>
              <p className="text-xs font-mono font-medium text-[var(--color-text-main)] mt-0.5">
                {product.sku}
              </p>
            </div>
            <div>
              <p className="text-xs text-[var(--color-text-muted)]">Stock</p>
              <p className="text-xs font-semibold text-[var(--color-text-main)] mt-0.5">
                {product.currentStock}
                <span className="text-[var(--color-text-muted)] font-normal"> / min {product.minimumStock}</span>
              </p>
            </div>
            <div>
              <p className="text-xs text-[var(--color-text-muted)]">Cost</p>
              <p className="text-xs font-medium text-[var(--color-text-muted)] mt-0.5">
                {formatCurrency(product.costPrice)}
              </p>
            </div>
            <div>
              <p className="text-xs text-[var(--color-text-muted)]">Selling</p>
              <p className="text-xs font-semibold text-[var(--color-text-main)] mt-0.5">
                {formatCurrency(product.sellingPrice)}
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <Button
              id={`btn-view-mobile-${product.id}`}
              variant="ghost"
              className="flex-1 h-8 text-xs"
              onClick={() => {
                console.log('InventoryTableRow (mobile): View clicked — productId:', product.id);
                onView(product.id);
              }}
              aria-label={`View product ${product.name}`}
            >
              View
            </Button>
            <Button
              id={`btn-edit-mobile-${product.id}`}
              variant="secondary"
              className="flex-1 h-8 text-xs"
              onClick={() => {
                console.log('InventoryTableRow (mobile): Edit clicked — productId:', product.id);
                onEdit(product.id);
              }}
              aria-label={`Edit product ${product.name}`}
            >
              Edit
            </Button>
          </div>
        </td>
      </tr>
    </>
  );
});
