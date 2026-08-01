/**
 * Global store base types.
 *
 * This file defines the foundational contracts that all store modules must
 * implement. Add shared slice interfaces here as the application grows.
 */

// ---------------------------------------------------------------------------
// Store Slice Contract
// ---------------------------------------------------------------------------

/**
 * Every store module must conform to this interface so the root store can
 * merge them type-safely via Zustand's `create` + `StateCreator` pattern.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface StoreSlice {}

// ---------------------------------------------------------------------------
// Root Store State — union of all module slices
// ---------------------------------------------------------------------------

import type { SalesStore } from './modules/sales/types';

/**
 * AppState is the single source-of-truth type for the entire Zustand store.
 * As new modules are added under `modules/`, their slice types are composed
 * here via intersection.
 */
export type AppState = StoreSlice & SalesStore;
