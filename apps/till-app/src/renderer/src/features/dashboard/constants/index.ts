export const DASHBOARD_CARD_IDS = {
  SALES_TODAY: 'card-sales-today',
  TOTAL_TRANSACTIONS: 'card-total-transactions',
  LOW_STOCK: 'card-low-stock',
  REVENUE: 'card-revenue',
} as const;

export const DASHBOARD_WIDGET_IDS = {
  SALES_CHART: 'widget-sales-chart',
  TOP_PRODUCTS: 'widget-top-products',
  RECENT_TRANSACTIONS: 'widget-recent-transactions',
  INVENTORY_STATUS: 'widget-inventory-status',
} as const;

export const DASHBOARD_LABELS = {
  SALES_TODAY: 'Sales Today',
  TOTAL_TRANSACTIONS: 'Total Transactions',
  LOW_STOCK_ALERTS: 'Low Stock Alerts',
  REVENUE: 'Revenue',
  TOP_PRODUCTS: 'Top Products',
  RECENT_TRANSACTIONS: 'Recent Transactions',
} as const;

export const DASHBOARD_REFRESH_INTERVAL_MS = 60_000; // 1 minute
