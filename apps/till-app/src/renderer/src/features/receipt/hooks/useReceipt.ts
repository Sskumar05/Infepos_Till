/**
 * Receipt Module — useReceipt Hook
 *
 * Custom React hook that exposes receipt data and actions to UI components.
 * Data is sourced exclusively from ReceiptService — no direct store access,
 * no Electron IPC, no business logic inside the hook.
 *
 * Day 9 – Step 2
 */

import { useState, useEffect, useCallback } from 'react';
import type { ReceiptData } from '../types';
import { ReceiptService } from '../services/ReceiptService';

// ── Return type ────────────────────────────────────────────────────────────────
interface UseReceiptResult {
  /** Fully assembled receipt, or null while loading / on error */
  receipt: ReceiptData | null;
  /** True while the service fetch is in progress */
  isLoading: boolean;
  /** Error message if the fetch failed; null otherwise */
  error: string | null;
  /** Re-fetches the receipt from ReceiptService */
  refresh: () => void;
}

// ── Hook ───────────────────────────────────────────────────────────────────────
export function useReceipt(): UseReceiptResult {
  const [receipt, setReceipt] = useState<ReceiptData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Stable callback so components can trigger a manual re-fetch without
  // causing infinite render loops when passed as a dependency.
  const [fetchTrigger, setFetchTrigger] = useState<number>(0);

  const refresh = useCallback(() => {
    setFetchTrigger((prev) => prev + 1);
  }, []);

  useEffect(() => {
    let mounted = true;

    const fetchReceipt = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await ReceiptService.getReceipt();

        if (mounted) {
          setReceipt(data);
        }
      } catch (err) {
        if (mounted) {
          setError(
            err instanceof Error
              ? err.message
              : 'An unknown error occurred while fetching receipt data.',
          );
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    fetchReceipt();

    return () => {
      mounted = false;
    };
  }, [fetchTrigger]); // re-runs when refresh() is called

  return {
    receipt,
    isLoading,
    error,
    refresh,
  };
}
