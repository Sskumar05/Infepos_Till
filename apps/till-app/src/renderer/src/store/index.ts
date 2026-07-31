/**
 * Root Zustand store.
 *
 * Architecture: modular slice pattern.
 * - Each business domain lives in its own file under `modules/`.
 * - Slices are composed here into one unified store.
 * - No middleware or persistence is configured at this stage.
 *
 * How to extend (Day 3+):
 *   1. Create `modules/authSlice.ts` exporting `AuthSlice` type + creator.
 *   2. Import the creator here and spread it into `create(...)`.
 *   3. Update `AppState` in `types.ts` to include the new slice type.
 */

import { create } from 'zustand'
import type { AppState } from './types'

export const useAppStore = create<AppState>()(() => ({
  // Slices will be spread here as the application grows.
  // Example:
  //   ...createAuthSlice(set, get, api),
  //   ...createCartSlice(set, get, api),
}))
