/**
 * Root Zustand store.
 *
 * Architecture: modular slice pattern.
 * - Each business domain lives in its own file under `modules/`.
 * - Slices are composed here into one unified store.
 * - No middleware or persistence is configured at this stage.
 */

import { create } from 'zustand';
import type { AppState } from './types';
import { createSalesSlice } from './modules/sales';

export const useAppStore = create<AppState>()((set, get, api) => ({
  ...createSalesSlice(set, get, api),
}));
