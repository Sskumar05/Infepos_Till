// =============================================================================
// Inventory Module — Placeholder Service
// src/renderer/src/features/inventory/services/InventoryService.ts
//
// All methods return static dummy data via Promise.resolve().
// No API calls. No SQLite. No Zustand.
//
// Future integration roadmap:
//   Phase 2 → Electron IPC → SQLite queries
//   Phase 3 → REST API via shared ApiClient
//   Phase 4 → Hybrid offline-first (SQLite + sync)
// =============================================================================

import type { Product, Category, InventorySummary } from '../types';
import {
  DUMMY_PRODUCTS,
  DUMMY_CATEGORIES,
  DUMMY_INVENTORY_SUMMARY,
} from '../data/inventoryData';

/**
 * Placeholder Inventory Service.
 *
 * All methods return dummy data only.
 * Real backend integration will be added in a future sprint.
 * Method signatures are intentionally future-proof for API/SQLite replacement.
 */
export const InventoryService = {
  /**
   * Returns the full product list.
   * Future: will accept pagination/filter params and query SQLite or REST API.
   */
  async getProducts(): Promise<Product[]> {
    console.log('InventoryService.getProducts (dummy)');
    return Promise.resolve(DUMMY_PRODUCTS);
  },

  /**
   * Returns a single product by its ID, or null if not found.
   * Future: will execute `SELECT * FROM products WHERE id = ?` via Electron IPC.
   */
  async getProductById(id: string): Promise<Product | null> {
    console.log(`InventoryService.getProductById (dummy) — id: ${id}`);
    const product = DUMMY_PRODUCTS.find((p) => p.id === id) ?? null;
    return Promise.resolve(product);
  },

  /**
   * Returns the aggregated inventory summary snapshot.
   * Future: will be a computed query across the products and stock_movements tables.
   */
  async getInventorySummary(): Promise<InventorySummary> {
    console.log('InventoryService.getInventorySummary (dummy)');
    return Promise.resolve(DUMMY_INVENTORY_SUMMARY);
  },

  /**
   * Returns the full list of product categories.
   * Future: will query the `categories` table via Electron IPC.
   */
  async getCategories(): Promise<Category[]> {
    console.log('InventoryService.getCategories (dummy)');
    return Promise.resolve(DUMMY_CATEGORIES);
  },
};
