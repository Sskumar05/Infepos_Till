import type { SalesState } from './types';

export const initialSalesState: SalesState = {
  cart: [],
  selectedCustomer: null,
  selectedPaymentMethod: null,
  summary: {
    subtotal: 0,
    discountTotal: 0,
    taxTotal: 0,
    grandTotal: 0,
  },
  isCheckoutOpen: false,
};
