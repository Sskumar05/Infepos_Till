import { DashboardSummary, SalesSummary, InventorySummary, RecentSale, LowStockProduct } from '../types';

export const DUMMY_SALES_SUMMARY: SalesSummary = {
  totalSales: 4250.00,
  totalTransactions: 38,
  averageOrderValue: 111.84,
  refunds: 2,
};

export const DUMMY_INVENTORY_SUMMARY: InventorySummary = {
  totalProducts: 312,
  lowStockCount: 14,
  outOfStockCount: 3,
  totalValue: 87430.00,
};

export const DUMMY_RECENT_TRANSACTIONS: RecentSale[] = [
  { id: 'TXN-001', customer: 'Walk-in', total: 89.50, paymentMethod: 'Card', time: '10:42 AM', status: 'PAID' },
  { id: 'TXN-002', customer: 'Jane Smith', total: 215.00, paymentMethod: 'Cash', time: '10:28 AM', status: 'PAID' },
  { id: 'TXN-003', customer: 'Walk-in', total: 34.00, paymentMethod: 'Card', time: '10:05 AM', status: 'REFUNDED' },
  { id: 'TXN-004', customer: 'Corporate A', total: 450.00, paymentMethod: 'Invoice', time: '09:15 AM', status: 'PENDING' },
];

export const DUMMY_LOW_STOCK_PRODUCTS: LowStockProduct[] = [
  { id: 'PROD-010', name: 'Almond Milk 1L', sku: 'MILK-ALM', currentStock: 2, minimumStock: 10, status: 'CRITICAL' },
  { id: 'PROD-042', name: 'Paper Cups 8oz', sku: 'CUP-8', currentStock: 45, minimumStock: 100, status: 'LOW' },
  { id: 'PROD-005', name: 'Caramel Syrup', sku: 'SYR-CAR', currentStock: 1, minimumStock: 5, status: 'CRITICAL' },
  { id: 'PROD-018', name: 'Oat Milk 1L', sku: 'MILK-OAT', currentStock: 6, minimumStock: 10, status: 'LOW' },
];

export const DUMMY_DASHBOARD_SUMMARY: DashboardSummary = {
  sales: DUMMY_SALES_SUMMARY,
  inventory: DUMMY_INVENTORY_SUMMARY,
  recentSales: DUMMY_RECENT_TRANSACTIONS,
  lowStockProducts: DUMMY_LOW_STOCK_PRODUCTS,
  updatedAt: new Date().toISOString(),
};

export const DUMMY_TOP_PRODUCTS = [
  { id: 'P-001', name: 'Espresso Blend 250g', unitsSold: 24, revenue: 576.00 },
  { id: 'P-002', name: 'Ceramic Mug Set', unitsSold: 17, revenue: 459.00 },
  { id: 'P-003', name: 'Filter Papers x100', unitsSold: 15, revenue: 135.00 },
];
