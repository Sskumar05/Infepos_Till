import React from 'react';
import { RecentSale } from '../types';
import { Badge } from '../../../components/common/Badge';

interface RecentSaleRowProps {
  sale: RecentSale;
}

export const RecentSaleRow = React.memo(function RecentSaleRow({ sale }: RecentSaleRowProps) {
  const getStatusVariant = (status: RecentSale['status']) => {
    switch (status) {
      case 'PAID':
        return 'success';
      case 'PENDING':
        return 'warning';
      case 'REFUNDED':
        return 'danger';
      default:
        return 'neutral';
    }
  };

  return (
    <>
      {/* Desktop & Tablet Table Row */}
      <tr className="hidden sm:table-row hover:bg-[var(--color-bg-base)] transition-colors border-b border-[var(--color-border-default)] last:border-0">
        <td className="py-3 px-4 text-sm font-medium text-[var(--color-text-primary)] whitespace-nowrap">
          {sale.id}
        </td>
        <td className="py-3 px-4 text-sm text-[var(--color-text-primary)]">
          {sale.customer}
        </td>
        <td className="py-3 px-4 text-sm font-semibold text-[var(--color-text-primary)]">
          £{sale.total.toFixed(2)}
        </td>
        <td className="py-3 px-4 text-sm text-[var(--color-text-muted)]">
          {sale.paymentMethod}
        </td>
        <td className="py-3 px-4">
          <Badge variant={getStatusVariant(sale.status)} className="text-xs">
            {sale.status}
          </Badge>
        </td>
        <td className="py-3 px-4 text-sm text-[var(--color-text-muted)] text-right whitespace-nowrap">
          {sale.time}
        </td>
      </tr>

      {/* Mobile Stacked Layout */}
      <tr className="sm:hidden block border-b border-[var(--color-border-default)] last:border-0 p-4">
        <td className="block">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-sm font-medium text-[var(--color-text-primary)]">
                {sale.id}
              </p>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                {sale.customer}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                £{sale.total.toFixed(2)}
              </p>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                {sale.time}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-[var(--color-text-muted)] bg-[var(--color-bg-base)] px-2 py-1 rounded-[var(--radius-sm)]">
              {sale.paymentMethod}
            </span>
            <Badge variant={getStatusVariant(sale.status)} className="text-xs">
              {sale.status}
            </Badge>
          </div>
        </td>
      </tr>
    </>
  );
}
);
