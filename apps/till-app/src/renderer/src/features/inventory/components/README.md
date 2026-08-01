# components/

> **Status:** Architecture scaffold only — no components implemented yet.

## Purpose

This folder houses all **reusable, presentation-only UI components** for the Inventory module. Components in this directory are strictly concerned with rendering — they receive data via props and emit events via callbacks. They contain no business logic and no direct data access.

## Design Principles

- **Single Responsibility** — each component renders one discrete piece of UI.
- **Pure / Presentational** — no direct imports from `data/`, `services/`, or `store/`.
- **Props-Driven** — all data flows in from a parent container or hook.
- **Wrapped in `React.memo`** — where re-render cost is non-trivial (e.g. table rows).

## Planned Components

| Component | Description |
|---|---|
| `InventoryTable.tsx` | Main data table rendering the full paginated product list |
| `InventoryRow.tsx` | Single row within `InventoryTable` — one product per row |
| `ProductForm.tsx` | Controlled form for creating or editing a product record |
| `SearchBar.tsx` | Controlled text input that drives real-time product search |
| `FilterBar.tsx` | Chip/dropdown filter controls for category, status, and stock level |
| `ProductDetailsPanel.tsx` | Slide-over / drawer panel showing full product detail and stock history |

## Component Interface Contracts (Future)

Each component will define a typed `Props` interface using types from `../types/`. Example pattern:

```ts
// InventoryRow.tsx (not yet implemented)
import type { Product } from '../types';

interface InventoryRowProps {
  product: Product;
  onSelect: (id: string) => void;
  onEdit: (id: string) => void;
}
```

## What Does NOT Belong Here

- Pages or route-level components → `src/pages/`
- Business logic or data fetching → `../services/` or `../hooks/`
- Global shared UI components → `src/components/`
