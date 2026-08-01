/**
 * Customers Module — useCustomers Hook
 *
 * Custom React hook that exposes customer data and actions to UI components.
 * Day 10 - Step 2
 */

import { useState, useEffect, useCallback } from 'react';
import type { Customer, CustomerSummary } from '../types';
import { CustomersService } from '../services/CustomersService';

interface UseCustomersResult {
  customers: Customer[];
  summary: CustomerSummary | null;
  isLoading: boolean;
  error: string | null;
  refresh: () => void;
}

export function useCustomers(): UseCustomersResult {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [summary, setSummary] = useState<CustomerSummary | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [fetchTrigger, setFetchTrigger] = useState<number>(0);

  const refresh = useCallback(() => {
    setFetchTrigger((prev) => prev + 1);
  }, []);

  useEffect(() => {
    let mounted = true;

    const fetchCustomers = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await CustomersService.getCustomers();

        if (mounted) {
          setSummary(data);
          setCustomers(data.customers);
        }
      } catch (err) {
        if (mounted) {
          setError(
            err instanceof Error
              ? err.message
              : 'An unknown error occurred while fetching customers.'
          );
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    fetchCustomers();

    return () => {
      mounted = false;
    };
  }, [fetchTrigger]);

  return {
    customers,
    summary,
    isLoading,
    error,
    refresh,
  };
}
