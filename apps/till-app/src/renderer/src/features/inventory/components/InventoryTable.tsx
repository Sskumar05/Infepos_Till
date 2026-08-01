import React from 'react';
import { Card, CardBody } from '../../../components/common/Card';
import { EmptyState } from '../../../components/feedback/EmptyState';
import { InventoryTableRow } from './InventoryTableRow';
import type { Product } from '../types';

interface InventoryTableProps {
  products: Product[];
  onView: (id: string) => void;
  onEdit: (id: string) => void;
}

/** Column header definition — kept in one place for easy future extension */
const TABLE_COLUMNS = [
  { key: 'sku',          label: 'SKU',           className: '' },
  { key: 'barcode',      label: 'Barcode',        className: '' },
  { key: 'name',         label: 'Product Name',   className: 'min-w-[160px]' },
  { key: 'category',     label: 'Category',       className: '' },
  { key: 'costPrice',    label: 'Cost Price',     className: 'text-right' },
  { key: 'sellingPrice', label: 'Selling Price',  className: 'text-right' },
  { key: 'stock',        label: 'Stock',          className: 'text-center' },
  { key: 'status',       label: 'Status',         className: '' },
  { key: 'actions',      label: 'Actions',        className: 'text-right' },
] as const;

export const InventoryTable = React.memo(function InventoryTable({
  products,
  onView,
  onEdit,
}: InventoryTableProps) {
  if (products.length === 0) {
    return (
      <Card>
        <CardBody>
          <EmptyState
            title="No products found"
            description="No inventory records are available at this time."
          />
        </CardBody>
      </Card>
    );
  }

  return (
    <Card>
      {/* Responsive horizontal scroll container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse" aria-label="Inventory product table">
          {/* ── Table Head — hidden on mobile ──────────────────────────── */}
          <thead className="hidden sm:table-header-group bg-[var(--color-bg-base)] border-b border-[var(--color-border-default)]">
            <tr>
              {TABLE_COLUMNS.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className={`py-3 px-4 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider whitespace-nowrap ${col.className}`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          {/* ── Table Body ─────────────────────────────────────────────── */}
          <tbody className="block sm:table-row-group">
            {products.map((product) => (
              <InventoryTableRow
                key={product.id}
                product={product}
                onView={onView}
                onEdit={onEdit}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Row count footer */}
      <div className="px-4 py-3 border-t border-[var(--color-border-divider)] flex items-center justify-between">
        <span className="text-xs text-[var(--color-text-muted)]">
          Showing <span className="font-semibold text-[var(--color-text-main)]">{products.length}</span> product{products.length !== 1 ? 's' : ''}
        </span>
      </div>
    </Card>
  );
});
