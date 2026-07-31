export interface DashboardMetric {
  id: string;
  label: string;
  value: number | string;
  unit?: string;
  trend?: 'UP' | 'DOWN' | 'NEUTRAL';
  changePercent?: number;
}

export interface DashboardCard {
  id: string;
  title: string;
  metrics: DashboardMetric[];
  icon?: string;
  color?: string;
}

export interface DashboardWidget {
  id: string;
  title: string;
  type: 'CHART' | 'LIST' | 'METRIC' | 'TABLE';
  data?: unknown;
}

export interface SalesSummary {
  totalSales: number;
  totalTransactions: number;
  averageOrderValue: number;
  refunds: number;
}

export interface InventorySummary {
  totalProducts: number;
  lowStockCount: number;
  outOfStockCount: number;
  totalValue: number;
}

export interface RecentSale {
  id: string;
  customer: string;
  total: number;
  paymentMethod: string;
  time: string;
  status: 'PAID' | 'PENDING' | 'REFUNDED';
}

export interface LowStockProduct {
  id: string;
  name: string;
  sku: string;
  currentStock: number;
  minimumStock: number;
  status: 'CRITICAL' | 'LOW' | 'NORMAL';
}

export interface DashboardSummary {
  sales: SalesSummary;
  inventory: InventorySummary;
  recentSales: RecentSale[];
  lowStockProducts: LowStockProduct[];
  updatedAt: string;
}
