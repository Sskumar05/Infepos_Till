import React from 'react';
import { Card, CardBody } from '../../../components/common/Card';
import { RecentSaleRow } from './RecentSaleRow';
import { RecentSale } from '../types';

interface RecentSalesWidgetProps {
  sales: RecentSale[];
}

export const RecentSalesWidget = React.memo(function RecentSalesWidget({ sales }: RecentSalesWidgetProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardBody className="p-0 flex-1 overflow-hidden flex flex-col">
        <div className="p-5 border-b border-[var(--color-border-default)]">
          <h3 className="text-base font-semibold text-[var(--color-text-primary)] leading-tight">
            Recent Sales
          </h3>
          <p className="text-sm text-[var(--color-text-muted)] mt-0.5">
            Latest transactions processed today
          </p>
        </div>
        
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left border-collapse">
            <thead className="hidden sm:table-header-group bg-[var(--color-bg-base)] border-b border-[var(--color-border-default)]">
              <tr>
                <th className="py-3 px-4 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider whitespace-nowrap">
                  Invoice
                </th>
                <th className="py-3 px-4 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                  Customer
                </th>
                <th className="py-3 px-4 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                  Amount
                </th>
                <th className="py-3 px-4 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                  Payment
                </th>
                <th className="py-3 px-4 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                  Status
                </th>
                <th className="py-3 px-4 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider text-right whitespace-nowrap">
                  Time
                </th>
              </tr>
            </thead>
            <tbody className="block sm:table-row-group">
              {sales.map((sale) => (
                <RecentSaleRow key={sale.id} sale={sale} />
              ))}
              {sales.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-sm text-[var(--color-text-muted)]">
                    No recent sales found
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
