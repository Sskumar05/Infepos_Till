# utils/

> **Status:** Architecture scaffold only — no utility functions implemented yet.

## Purpose

This folder contains **pure helper and formatter functions** used throughout the Inventory module. Utils are stateless, side-effect-free functions that transform data for display or perform domain-agnostic calculations. They are unit-testable in isolation.

## Design Principles

- **Pure Functions Only** — no API calls, no side effects, no React hooks.
- **Deterministic** — same input always produces same output.
- **Composable** — small, focused functions that can be combined.
- Exported from a barrel `index.ts` for clean imports.

## Planned Utility Functions

### Currency Formatter

Formats a numeric price value into a localised currency string.

```ts
// Not yet implemented
// formatCurrency(1.25) → '£1.25'
// formatCurrency(1000.50, 'USD') → '$1,000.50'
function formatCurrency(value: number, currency?: string): string
```

### Stock Quantity Formatter

Formats a raw stock number with appropriate unit suffix and handles edge cases.

```ts
// Not yet implemented
// formatStock(48, 'each') → '48 units'
// formatStock(0, 'each') → 'Out of Stock'
// formatStock(5, 'kg') → '5 kg'
function formatStock(quantity: number, unit: string): string
```

### Stock Status Deriver

Derives `StockStatus` from current stock and minimum stock threshold.

```ts
// Not yet implemented
// deriveStockStatus(0, 10) → 'OUT_OF_STOCK'
// deriveStockStatus(5, 10) → 'LOW_STOCK'
// deriveStockStatus(48, 10) → 'IN_STOCK'
function deriveStockStatus(currentStock: number, minimumStock: number): StockStatus
```

### Date / Timestamp Formatter

Formats ISO 8601 timestamps for display in tables and audit logs.

```ts
// Not yet implemented
// formatInventoryDate('2025-12-01T14:30:00Z') → '01 Dec 2025, 14:30'
// formatRelativeTime('2025-12-01T14:30:00Z') → '2 hours ago'
function formatInventoryDate(isoString: string): string
function formatRelativeTime(isoString: string): string
```

### Stock Value Calculator

Calculates the total stock value for a product or a portfolio.

```ts
// Not yet implemented
// calculateStockValue(48, 0.65) → 31.20
function calculateStockValue(currentStock: number, costPrice: number): number
```

### SKU Validator

Validates SKU format against the project's naming convention.

```ts
// Not yet implemented
// isValidSku('BEV-CC-330') → true
// isValidSku('invalid sku') → false
function isValidSku(sku: string): boolean
```

## What Does NOT Belong Here

- React hooks or stateful logic → `../hooks/`
- API or IPC calls → `../services/`
- Type definitions → `../types/`
- Constants → `../constants/`
