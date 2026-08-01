# constants/

> **Status:** Architecture scaffold only — no constants implemented yet.

## Purpose

This folder contains all **centralized, immutable constants** used across the Inventory module. Having constants in one place eliminates magic strings, prevents typo-driven bugs, and makes global changes (e.g. renaming a status) a single-file operation.

## Design Principles

- All constants are declared with `as const` for full TypeScript literal type inference.
- **No business logic** — constants are data, not behaviour.
- **No derived values** — no computed properties or functions.
- Constants are grouped by domain concern, exported from a barrel `index.ts`.

## Planned Constant Groups

### Product Status

```ts
// Not yet implemented
export const PRODUCT_STATUS = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  DISCONTINUED: 'DISCONTINUED',
} as const;
```

### Stock Status

```ts
// Not yet implemented
export const STOCK_STATUS = {
  IN_STOCK: 'IN_STOCK',
  LOW_STOCK: 'LOW_STOCK',
  OUT_OF_STOCK: 'OUT_OF_STOCK',
} as const;
```

### Stock Movement Types

```ts
// Not yet implemented
export const STOCK_MOVEMENT_TYPE = {
  RECEIPT: 'RECEIPT',
  SALE: 'SALE',
  ADJUSTMENT: 'ADJUSTMENT',
  TRANSFER: 'TRANSFER',
  WASTE: 'WASTE',
} as const;
```

### Default Category Names

```ts
// Not yet implemented
export const DEFAULT_CATEGORY_NAMES = {
  BEVERAGES: 'Beverages',
  SNACKS: 'Snacks',
  TOBACCO: 'Tobacco',
  CONFECTIONERY: 'Confectionery',
  GROCERY: 'Grocery',
  HOUSEHOLD: 'Household',
  UNCATEGORISED: 'Uncategorised',
} as const;
```

### Inventory UI Configuration

```ts
// Not yet implemented
export const INVENTORY_TABLE_PAGE_SIZE = 25;
export const INVENTORY_SEARCH_DEBOUNCE_MS = 300;
export const INVENTORY_LOW_STOCK_THRESHOLD_DEFAULT = 10;
```

## What Does NOT Belong Here

- TypeScript interface/type definitions → `../types/`
- Derived or computed values → `../utils/`
- UI labels or user-facing copy that may require i18n → a future `i18n/` folder
