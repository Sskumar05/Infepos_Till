// =============================================================================
// Inventory Module — Centralized Constants
// src/renderer/src/features/inventory/constants/index.ts
//
// Immutable, as-const objects. No business logic or derived values.
// All string literals here must align with union types in ../types/index.ts.
// =============================================================================

import type { ProductStatus, StockStatus } from '../types';

// ---------------------------------------------------------------------------
// Product Status
// ---------------------------------------------------------------------------

/** Mirrors the `ProductStatus` union type as a runtime-safe constant object. */
export const PRODUCT_STATUS: Record<ProductStatus, ProductStatus> = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
} as const;

// ---------------------------------------------------------------------------
// Stock Status
// ---------------------------------------------------------------------------

/** Mirrors the `StockStatus` union type as a runtime-safe constant object. */
export const STOCK_STATUS: Record<StockStatus, StockStatus> = {
  IN_STOCK: 'IN_STOCK',
  LOW_STOCK: 'LOW_STOCK',
  OUT_OF_STOCK: 'OUT_OF_STOCK',
} as const;

// ---------------------------------------------------------------------------
// Product Units
// ---------------------------------------------------------------------------

/** Standardised units of measure used across all product records. */
export const PRODUCT_UNITS = {
  EACH: 'each',
  KG: 'kg',
  GRAM: 'g',
  LITRE: 'litre',
  ML: 'ml',
  PACK: 'pack',
  BOX: 'box',
  BOTTLE: 'bottle',
  CAN: 'can',
  ROLL: 'roll',
  PAIR: 'pair',
  DOZEN: 'dozen',
} as const;

export type ProductUnit = (typeof PRODUCT_UNITS)[keyof typeof PRODUCT_UNITS];

// ---------------------------------------------------------------------------
// Product Categories
// ---------------------------------------------------------------------------

/** Canonical category names. Must stay in sync with DUMMY_CATEGORIES in data/. */
export const PRODUCT_CATEGORIES = {
  BEVERAGES: 'Beverages',
  DAIRY: 'Dairy',
  SNACKS: 'Snacks',
  BAKERY: 'Bakery',
  FROZEN: 'Frozen',
  HOUSEHOLD: 'Household',
  PERSONAL_CARE: 'Personal Care',
} as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[keyof typeof PRODUCT_CATEGORIES];

// ---------------------------------------------------------------------------
// Inventory UI Configuration Constants
// ---------------------------------------------------------------------------

/** Number of products rendered per page in the inventory table. */
export const INVENTORY_TABLE_PAGE_SIZE = 25 as const;

/** Debounce delay (ms) applied to the product search input. */
export const INVENTORY_SEARCH_DEBOUNCE_MS = 300 as const;

/** Default low-stock threshold used when a product has no custom minimumStock set. */
export const INVENTORY_DEFAULT_LOW_STOCK_THRESHOLD = 10 as const;

/** Default VAT rate applied to new products (20% UK standard rate). */
export const INVENTORY_DEFAULT_TAX_RATE = 0.20 as const;
