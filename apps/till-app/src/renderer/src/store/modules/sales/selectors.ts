import type { SalesStore } from './types';

export const selectCart = (state: SalesStore) => state.cart;
export const selectSummary = (state: SalesStore) => state.summary;
export const selectCustomer = (state: SalesStore) => state.selectedCustomer;
export const selectPaymentMethod = (state: SalesStore) => state.selectedPaymentMethod;
export const selectCheckoutState = (state: SalesStore) => state.isCheckoutOpen;
