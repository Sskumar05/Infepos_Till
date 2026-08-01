import { StateCreator } from 'zustand';
import type { SalesStore } from './types';
import { initialSalesState } from './state';
import { createSalesActions } from './actions';

export * from './types';
export * from './selectors';

export const createSalesSlice: StateCreator<
  SalesStore,
  [],
  [],
  SalesStore
> = (set, get, api) => ({
  ...initialSalesState,
  ...createSalesActions(set, get, api),
});
