import { useState, useEffect } from 'react';
import type { Product, InventorySummary } from '../types';
import { InventoryService } from '../services/InventoryService';

/**
 * Primary Inventory hook.
 *
 * Encapsulates all data-fetching for the Inventory module.
 * Components MUST use this hook — never import services or data directly.
 *
 * Current implementation: returns static dummy data via InventoryService.
 * Future: will manage filter/search state, pagination, and real-time sync.
 */
export function useInventory() {
  const [products, setProducts] = useState<Product[]>([]);
  const [summary, setSummary] = useState<InventorySummary | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchInventory() {
      setIsLoading(true);
      setError(null);

      try {
        const [fetchedProducts, fetchedSummary] = await Promise.all([
          InventoryService.getProducts(),
          InventoryService.getInventorySummary(),
        ]);

        if (!cancelled) {
          setProducts(fetchedProducts);
          setSummary(fetchedSummary);
        }
      } catch (err) {
        if (!cancelled) {
          const message = err instanceof Error ? err.message : 'Failed to load inventory data.';
          setError(message);
          console.error('useInventory error:', err);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    fetchInventory();

    // Cleanup: prevent state updates if component unmounts before fetch completes.
    return () => {
      cancelled = true;
    };
  }, []);

  return {
    products,
    summary,
    isLoading,
    error,
  };
}
