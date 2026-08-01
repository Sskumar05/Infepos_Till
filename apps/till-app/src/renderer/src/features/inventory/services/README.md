# services/

> **Status:** Architecture scaffold only — no service implementations exist yet.

## Purpose

This folder is the **data-access and integration layer** for the Inventory module. It is the single location where all external data operations (SQLite, REST API, IPC calls) will be implemented. Components and hooks must never perform data access directly — they must always go through this layer.

## Design Principles

- **Separation of Concerns** — services contain zero UI logic.
- **Replaceability** — the API implementation can be swapped for a SQLite implementation without changing any hook or component.
- **Single Entry Point** — all inventory data operations are discoverable through `InventoryService.ts`.
- **Error Boundary** — all network/IPC errors are caught and normalised here before surfacing to hooks.

## Planned Services

| File | Responsibility |
|---|---|
| `InventoryService.ts` | CRUD operations for products and categories (primary service) |
| `StockMovementService.ts` | Records and retrieves stock in/out/adjustment history |
| `InventorySyncService.ts` | Delta-sync engine — reconciles offline SQLite data with cloud API on reconnect |

## Integration Roadmap

### Phase 1 — Static Data (Current)
Services return hardcoded arrays from `../data/` during early development.

### Phase 2 — SQLite via Electron IPC
```
InventoryService.ts
       │
       ▼  window.api.inventory.getProducts()  (Electron preload bridge)
       │
       ▼  ipcMain handler  →  SQLite query
       │
       ▼  Returns typed Product[]
```

### Phase 3 — REST API
```
InventoryService.ts
       │
       ▼  ApiClient.get('/api/inventory/products')
       │
       ▼  Response mapped to Product[] via DTO transformer
```

### Phase 4 — Hybrid (Offline-First)
Service checks network status; routes to SQLite when offline, REST when online, and queues mutations for sync.

## Planned `InventoryService.ts` Method Surface

```ts
// Not yet implemented
class InventoryService {
  getProducts(filters?: InventoryFilters): Promise<Product[]>
  getProductById(id: string): Promise<Product | null>
  createProduct(payload: CreateProductPayload): Promise<Product>
  updateProduct(id: string, payload: UpdateProductPayload): Promise<Product>
  deleteProduct(id: string): Promise<void>
  getCategories(): Promise<Category[]>
}
```

## What Does NOT Belong Here

- React state or hooks → `../hooks/`
- UI components → `../components/`
- TypeScript type definitions → `../types/`
- Constants → `../constants/`
