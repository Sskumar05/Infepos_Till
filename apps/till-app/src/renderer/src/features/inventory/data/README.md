# data/

> **Status:** Architecture scaffold only — no data files implemented yet.

## Purpose

This folder contains **static, hardcoded dummy data** used exclusively during development and UI scaffolding. It provides realistic-looking seed data so that components can be built and styled without requiring a live database or API connection.

## Usage Rules

- Data in this folder is **read-only** and must never be mutated at runtime.
- Components **must never import from `data/` directly**. All data flows via `useInventory()` and the service layer.
- During development, `InventoryService.ts` may temporarily return data from this folder in lieu of a real SQLite/API call.
- This folder is **deleted or emptied** once live data integration is complete.

## Planned Files

| File | Contents |
|---|---|
| `products.ts` | Array of ~20 sample `Product` objects covering all stock statuses |
| `categories.ts` | Array of sample `Category` objects (e.g. Beverages, Snacks, Tobacco) |
| `stockMovements.ts` | Array of sample `StockMovement` records for development history views |

## Example Data Shape (for reference — not yet implemented)

```ts
// products.ts (not yet implemented)
// [
//   {
//     id: 'prod-001',
//     name: 'Coca-Cola 330ml',
//     sku: 'BEV-CC-330',
//     category: 'Beverages',
//     price: 1.25,
//     costPrice: 0.65,
//     currentStock: 48,
//     minimumStock: 12,
//     status: 'ACTIVE',
//     stockStatus: 'IN_STOCK',
//   },
//   ...
// ]
```

## What Does NOT Belong Here

- API response handlers → `../services/`
- TypeScript type definitions → `../types/`
- Persisted application state → `src/store/`
