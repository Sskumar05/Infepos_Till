import type { Customer, PaymentMethod, Product } from '../../../features/sales/types';

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  sku: string;
  image?: string;
  unitPrice: number;
  quantity: number;
  total: number;
}

export interface SaleSummary {
  subtotal: number;
  discountTotal: number;
  taxTotal: number;
  grandTotal: number;
}

export interface SalesState {
  cart: CartItem[];
  selectedCustomer: Customer | null;
  selectedPaymentMethod: PaymentMethod | null;
  summary: SaleSummary;
  isCheckoutOpen: boolean;
}

export interface SalesActions {
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  setCustomer: (customer: Customer) => void;
  clearCustomer: () => void;
  setPaymentMethod: (method: PaymentMethod) => void;
  openCheckout: () => void;
  closeCheckout: () => void;
}

export type SalesStore = SalesState & SalesActions;
