import React from 'react';
import { KPICard } from './KPICard';
import { DashboardSummary } from '../types';

interface KPIGridProps {
  summary: DashboardSummary;
}

export const KPIGrid = React.memo(function KPIGrid({ summary }: KPIGridProps) {
  // SVG Icons placeholders
  const SalesIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  );

  const OrdersIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
  );

  const StockIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  );

  const CashiersIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <KPICard
        title="Today's Sales"
        value={`£${summary.sales.totalSales.toFixed(2)}`}
        description="Total revenue for today"
        trendPercent={12.4}
        trendDirection="up"
        icon={SalesIcon}
      />
      <KPICard
        title="Today's Orders"
        value={summary.sales.totalTransactions}
        description="Total transactions processed"
        trendPercent={5.2}
        trendDirection="up"
        icon={OrdersIcon}
      />
      <KPICard
        title="Low Stock Items"
        value={summary.inventory.lowStockCount}
        description="Items requiring reorder"
        trendPercent={2.1}
        trendDirection="down"
        icon={StockIcon}
      />
      <KPICard
        title="Active Cashiers"
        value="3"
        description="Currently logged in"
        icon={CashiersIcon}
      />
    </div>
  );
}
);
