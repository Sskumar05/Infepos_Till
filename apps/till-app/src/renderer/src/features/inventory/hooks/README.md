# hooks/

> **Status:** Architecture scaffold only — no hooks implemented yet.

## Purpose

This folder contains all **custom React hooks** for the Inventory module. Hooks act as the bridge between the presentation layer (`components/`) and the data/service layer (`services/`). They encapsulate state management, data fetching, filtering logic, and side effects, keeping components clean and focused on rendering.

## Design Principles

- Hooks are the **only** place where `services/` are called from the component tree.
- Each hook has a **single, well-defined responsibility**.
- Hooks return stable, typed data objects and action callbacks.
- Hooks never render JSX — they are pure logic units.

## Planned Hooks

| Hook | Responsibility |
|---|---|
| `useInventory.ts` | Primary hook — fetches product list, manages search/filter state, exposes CRUD actions |
| `useProduct.ts` | Fetches a single product by ID; manages loading/error state for detail views |
| `useInventoryFilters.ts` | Manages filter state (category, status, stock level) and derived filtered product list |
| `useStockMovements.ts` | Fetches stock movement history for a given product |
| `useInventorySearch.ts` | Debounced search query state; drives product list filtering |

## Hook Interface Pattern (Future)

Each hook will follow this return-shape convention, consistent with `useDashboard()`:

```ts
// useInventory.ts (not yet implemented)
interface UseInventoryReturn {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filters: InventoryFilters;
  setFilters: (filters: Partial<InventoryFilters>) => void;
  selectedProduct: Product | null;
  selectProduct: (id: string) => void;
  clearSelection: () => void;
}
```

## What Does NOT Belong Here

- UI rendering → `../components/`
- Raw data access or SQL queries → `../services/`
- Global app state → `src/store/`
