# Inventory Feature Module

> **Status:** Architecture Phase — No implementation has been written yet.
> This module establishes the structural and documentation foundation for Day 6 onwards.

---

## Module Overview

The **Inventory Module** is a core domain of the INFYPOS Till App responsible for managing all product-related data, stock levels, categories, and inventory movements. It operates as a self-contained feature slice following the established feature-based architecture pattern used across this project.

This module will eventually power:
- Real-time stock visibility at the point of sale
- Product creation, editing, and deactivation
- Category management
- Stock movement tracking (receipts, adjustments, transfers)
- Low-stock alerts surfaced in the Dashboard module

---

## Folder Structure

```
src/renderer/src/features/inventory/
├── components/       # Reusable Inventory UI components (presentation only)
├── data/             # Static dummy data for development and UI scaffolding
├── hooks/            # Custom React hooks exposing inventory state and actions
├── services/         # Service layer — future SQLite/API integration point
├── types/            # All TypeScript interfaces and type definitions
├── constants/        # Centralized, immutable constants (no business logic)
├── utils/            # Pure helper/formatter functions (no side effects)
└── README.md         # This file — module-level documentation
```

---

## Component Responsibilities

| Component | Role |
|---|---|
| `InventoryPage` | Root container and sole consumer of `useInventory()`. Passes data down via props. |
| `InventoryHeader` | Displays page title, summary badges, and refresh action. |
| `InventoryToolbar` | Composes `SearchBar`, `FilterBar`, and action buttons. |
| `SearchBar` | Controlled text input for search queries (UI only). |
| `FilterBar` | Dropdown UI for category and stock status filtering (UI only). |
| `InventoryContent` | Layout wrapper that orchestrates Header, Toolbar, and Table. |
| `InventoryTable` | Renders the full product list in a responsive tabular layout. |
| `InventoryTableRow` | Single row within `InventoryTable`; displays one product's summary. |
| `ProductForm` | Reusable Add/Edit form for a product, composing multiple sections (UI only). |
| `ProductDetailsPanel` | Reusable standalone panel showing full product detail cards (UI only). |

> **UI-Only Limitations:** Currently, all components are purely presentational. Forms, search, and filters contain local state only and do not mutate data or filter the actual product list. All action buttons trigger `console.log`.

---

## Data Flow (Planned)

```
useInventory() Hook
       │
       ▼
 InventoryPage (container)
       │
       ├──▶ InventoryContent
       │         │
       │         ├──▶ InventoryHeader
       │         │
       │         ├──▶ InventoryToolbar (SearchBar, FilterBar, Buttons)
       │         │
       │         └──▶ InventoryTable
       │                   └──▶ InventoryTableRow (per product)
       │
       ├──▶ ProductForm (Standalone component)
       │
       └──▶ ProductDetailsPanel (Standalone component)
```

- **Components NEVER import from `data/` directly.**
- All state and derived data flows exclusively from `useInventory()`.
- Business logic lives in `services/`; hooks are the bridge to components.

---

## Future API Integration

When the backend API becomes available, the `services/InventoryService.ts` file will:

1. Replace static `data/` imports with HTTP calls via a shared `ApiClient`.
2. Implement CRUD endpoints:
   - `GET /api/inventory/products` — paginated product list
   - `POST /api/inventory/products` — create product
   - `PUT /api/inventory/products/:id` — update product
   - `DELETE /api/inventory/products/:id` — soft-delete product
3. Expose typed response DTOs mapped to local `types/` interfaces.
4. Handle authentication headers from the shared auth context.

---

## Future SQLite Integration

For **offline-first** capability via Electron's main process:

1. `InventoryService.ts` will call IPC handlers registered in `electron/ipc/inventoryHandlers.ts`.
2. IPC handlers will execute parameterised SQL queries against the local SQLite database.
3. The schema will include:
   - `products` table
   - `categories` table
   - `stock_movements` table
4. All write operations will be journaled for sync conflict resolution.

---

## Future Offline Sync Strategy

| Phase | Strategy |
|---|---|
| **Phase 1 (Current)** | Static dummy data only — no persistence |
| **Phase 2 (SQLite)** | Full local persistence via Electron IPC + SQLite |
| **Phase 3 (Sync)** | Delta-sync on reconnect using `updatedAt` timestamps |
| **Phase 4 (Conflict)** | Last-write-wins with manual override UI for critical conflicts |

The sync engine will live in `services/InventorySyncService.ts` and will be triggered by the global network status listener in `src/services/NetworkService.ts`.

---

## Related Modules

- **Dashboard** — consumes `InventorySummary` and `LowStockProduct` types from this module.
- **Sales / Till** — will query live stock levels before completing a transaction.
- **Reports** — will aggregate `StockMovement` records for stock valuation reports.
