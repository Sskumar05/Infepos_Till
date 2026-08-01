// =============================================================================
// Inventory Module — TypeScript Type Definitions
// src/renderer/src/features/inventory/types/index.ts
//
// Single source of truth for all domain types within the Inventory module.
// No business logic — pure structural contracts only.
// =============================================================================

// ---------------------------------------------------------------------------
// Status Union Types
// ---------------------------------------------------------------------------

/** Lifecycle status of a product record. */
export type ProductStatus = 'ACTIVE' | 'INACTIVE';

/** Computed stock availability status derived from currentStock vs minimumStock. */
export type StockStatus = 'IN_STOCK' | 'LOW_STOCK' | 'OUT_OF_STOCK';

// ---------------------------------------------------------------------------
// Category
// ---------------------------------------------------------------------------

/** A logical grouping of products (e.g. Beverages, Dairy, Snacks). */
export interface Category {
  /** Unique identifier — format: CAT-XXX */
  id: string;
  /** Human-readable category name. */
  name: string;
  /** Optional description of what belongs in this category. */
  description: string;
}

// ---------------------------------------------------------------------------
// Product
// ---------------------------------------------------------------------------

/**
 * Core entity representing a sellable inventory item.
 * This is the primary domain model of the Inventory module.
 */
export interface Product {
  /** Unique identifier — format: PROD-XXXX */
  id: string;
  /** Stock Keeping Unit — human-readable unique code, e.g. BEV-CC-330 */
  sku: string;
  /** EAN-13 / UPC barcode string for scanner lookup. */
  barcode: string;
  /** Full display name of the product. */
  name: string;
  /** Category name this product belongs to. */
  category: string;
  /** Brand or manufacturer name. */
  brand: string;
  /** Unit of measure — e.g. 'each', 'kg', 'litre', 'pack'. */
  unit: string;
  /** Purchase cost price (ex-VAT), in local currency. */
  costPrice: number;
  /** Retail selling price (ex-VAT), in local currency. */
  sellingPrice: number;
  /** VAT / tax rate as a decimal — e.g. 0.20 for 20%. */
  taxRate: number;
  /** Current quantity on hand. */
  currentStock: number;
  /** Reorder threshold — triggers LOW_STOCK status when currentStock drops to this level. */
  minimumStock: number;
  /** Maximum storage capacity — used for over-stock warnings. */
  maximumStock: number;
  /** Lifecycle status of the product record. */
  status: ProductStatus;
  /** URL or local path to the product image. */
  image: string;
  /** ISO 8601 timestamp — when the record was first created. */
  createdAt: string;
  /** ISO 8601 timestamp — when the record was last modified. */
  updatedAt: string;
}

// ---------------------------------------------------------------------------
// Inventory Summary
// ---------------------------------------------------------------------------

/**
 * Aggregated snapshot of the entire inventory state.
 * Consumed by the Dashboard module and future Inventory Overview page.
 */
export interface InventorySummary {
  /** Total number of product records in the system. */
  totalProducts: number;
  /** Number of products with status = ACTIVE. */
  activeProducts: number;
  /** Number of products with stockStatus = LOW_STOCK. */
  lowStockProducts: number;
  /** Number of products with stockStatus = OUT_OF_STOCK (currentStock === 0). */
  outOfStockProducts: number;
  /** Total value of all inventory at cost price (sum of costPrice × currentStock). */
  totalInventoryValue: number;
}
