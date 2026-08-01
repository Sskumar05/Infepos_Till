# types/

> **Status:** Architecture scaffold only — no TypeScript types implemented yet.

## Purpose

This folder is the **single source of truth for all TypeScript interfaces, types, and enums** used across the Inventory module. Centralising types here prevents duplication, makes refactoring safe, and provides a self-documenting contract for the entire module.

## Design Principles

- All inventory-domain types are defined here — no inline type definitions in components.
- Types are exported from a single `index.ts` barrel file for clean imports.
- Types describe the **domain model**, not implementation details (no DB column names, no API quirks).
- Enums and union types for status fields live here alongside interface definitions.

## Planned Type Definitions

### `Product`
Core entity representing a sellable item.

```ts
// Not yet implemented
interface Product {
  id: string;
  name: string;
  sku: string;
  barcode?: string;
  categoryId: string;
  price: number;           // selling price (inc. VAT)
  costPrice: number;       // purchase cost
  vatRate: number;         // e.g. 0.20 for 20%
  currentStock: number;
  minimumStock: number;
  unit: string;            // e.g. 'each', 'kg', 'litre'
  status: ProductStatus;
  stockStatus: StockStatus;
  imageUrl?: string;
  createdAt: string;       // ISO 8601
  updatedAt: string;       // ISO 8601
}
```

### `Category`
Groups products into logical families for filtering and reporting.

```ts
// Not yet implemented
interface Category {
  id: string;
  name: string;
  slug: string;
  parentId?: string;       // supports sub-categories
  createdAt: string;
}
```

### `StockMovement`
Records every change to a product's stock level for full audit trail.

```ts
// Not yet implemented
interface StockMovement {
  id: string;
  productId: string;
  type: StockMovementType;  // 'RECEIPT' | 'SALE' | 'ADJUSTMENT' | 'TRANSFER' | 'WASTE'
  quantity: number;         // positive = in, negative = out
  reference?: string;       // PO number, sale ID, etc.
  notes?: string;
  performedBy: string;      // userId
  timestamp: string;        // ISO 8601
}
```

### `InventorySummary`
Aggregated snapshot consumed by the Dashboard module.

```ts
// Not yet implemented
interface InventorySummary {
  totalProducts: number;
  activeProducts: number;
  lowStockCount: number;
  outOfStockCount: number;
  totalStockValue: number;  // cost price × current stock across all products
}
```

### Status Enums / Union Types

```ts
// Not yet implemented
type ProductStatus = 'ACTIVE' | 'INACTIVE' | 'DISCONTINUED';
type StockStatus = 'IN_STOCK' | 'LOW_STOCK' | 'OUT_OF_STOCK';
type StockMovementType = 'RECEIPT' | 'SALE' | 'ADJUSTMENT' | 'TRANSFER' | 'WASTE';
```

### Payload / Input Types

```ts
// Not yet implemented
type CreateProductPayload = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'stockStatus'>;
type UpdateProductPayload = Partial<CreateProductPayload>;

interface InventoryFilters {
  categoryId?: string;
  status?: ProductStatus;
  stockStatus?: StockStatus;
  searchQuery?: string;
}
```

## What Does NOT Belong Here

- Constants or enum values → `../constants/`
- Data transformation logic → `../utils/`
- React component prop types → co-located in `../components/`
