import { useState } from 'react';
import { DashboardSummary } from '../types';
import { DUMMY_DASHBOARD_SUMMARY, DUMMY_RECENT_TRANSACTIONS, DUMMY_TOP_PRODUCTS } from '../data/dashboardData';

/**
 * Placeholder hook for the Dashboard module.
 * Returns static dummy data only. No API or Zustand dependency.
 */
export function useDashboard() {
  const [summary] = useState<DashboardSummary>(DUMMY_DASHBOARD_SUMMARY);
  const [recentTransactions] = useState(DUMMY_RECENT_TRANSACTIONS);
  const [topProducts] = useState(DUMMY_TOP_PRODUCTS);
  const [isLoading] = useState(false);
  const [error] = useState<string | null>(null);

  return {
    summary,
    recentTransactions,
    topProducts,
    isLoading,
    error,
  };
}
