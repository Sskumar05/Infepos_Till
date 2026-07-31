import { DashboardSummary } from '../types';
import {
  DUMMY_DASHBOARD_SUMMARY,
  DUMMY_RECENT_TRANSACTIONS,
  DUMMY_TOP_PRODUCTS,
} from '../data/dashboardData';

/**
 * Placeholder Dashboard Service.
 * All methods return dummy data only.
 * Real backend integration will be added in a future sprint.
 */
export const DashboardService = {
  async getDashboardSummary(): Promise<DashboardSummary> {
    console.log('DashboardService.getDashboardSummary (dummy)');
    return DUMMY_DASHBOARD_SUMMARY;
  },

  async getTodaySales(): Promise<number> {
    console.log('DashboardService.getTodaySales (dummy)');
    return DUMMY_DASHBOARD_SUMMARY.sales.totalSales;
  },

  async getLowStock(): Promise<number> {
    console.log('DashboardService.getLowStock (dummy)');
    return DUMMY_DASHBOARD_SUMMARY.inventory.lowStockCount;
  },

  async getRecentTransactions() {
    console.log('DashboardService.getRecentTransactions (dummy)');
    return DUMMY_RECENT_TRANSACTIONS;
  },

  async getTopProducts() {
    console.log('DashboardService.getTopProducts (dummy)');
    return DUMMY_TOP_PRODUCTS;
  },
};
