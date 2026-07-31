import React from 'react';
import { Card, CardBody } from '../../../components/common/Card';
import { LowStockRow } from './LowStockRow';
import { LowStockProduct } from '../types';

interface LowStockWidgetProps {
  products: LowStockProduct[];
}

export const LowStockWidget = React.memo(function LowStockWidget({ products }: LowStockWidgetProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardBody className="p-0 flex-1 overflow-hidden flex flex-col">
        <div className="p-5 border-b border-[var(--color-border-default)]">
          <h3 className="text-base font-semibold text-[var(--color-text-primary)] leading-tight">
            Low Stock Alerts
          </h3>
          <p className="text-sm text-[var(--color-text-muted)] mt-0.5">
            Products below minimum stock levels
          </p>
        </div>
        
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left border-collapse">
            <thead className="hidden sm:table-header-group bg-[var(--color-bg-base)] border-b border-[var(--color-border-default)]">
              <tr>
                <th className="py-3 px-4 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                  Product
                </th>
                <th className="py-3 px-4 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                  SKU
                </th>
                <th className="py-3 px-4 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                  Stock
                </th>
                <th className="py-3 px-4 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider text-right">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="block sm:table-row-group">
              {products.map((product) => (
                <LowStockRow key={product.id} product={product} />
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-sm text-[var(--color-text-muted)]">
                    No low stock alerts
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
);
