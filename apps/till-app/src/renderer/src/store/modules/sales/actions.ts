import { StateCreator } from 'zustand';
import type { SalesStore, SalesActions, CartItem } from './types';
import type { PaymentMethod, Product, Customer } from '../../../features/sales/types';
import { TAX_RATE } from '../../../features/sales/constants';

const calculateSummary = (cart: CartItem[]) => {
  const subtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const discountTotal = 0; // No discount rules for now
  const taxTotal = subtotal * TAX_RATE;
  const grandTotal = subtotal + taxTotal - discountTotal;

  return {
    subtotal,
    discountTotal,
    taxTotal,
    grandTotal,
  };
};

export const createSalesActions: StateCreator<
  SalesStore,
  [],
  [],
  SalesActions
> = (set, _get) => ({
  addToCart: (product: Product) => {
    set((state) => {
      let updatedCart;
      const existingIndex = state.cart.findIndex((item) => item.productId === product.id);
      
      if (existingIndex !== -1) {
        // Product already in cart — increase quantity by 1
        updatedCart = state.cart.map((item, i) =>
          i === existingIndex
            ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.unitPrice }
            : item
        );
        console.log('SalesActions: addToCart — incremented quantity for', product.name);
      } else {
        // New product — add as a new CartItem
        const newItem: CartItem = {
          id: `${product.id}-${Date.now()}`,
          productId: product.id,
          name: product.name,
          sku: product.sku,
          image: product.image,
          unitPrice: product.price,
          quantity: 1,
          total: product.price,
        };
        console.log('SalesActions: addToCart — added new item', product.name);
        updatedCart = [...state.cart, newItem];
      }
      
      return { cart: updatedCart, summary: calculateSummary(updatedCart) };
    });
  },
  removeFromCart: (productId: string) => {
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.productId !== productId);
      console.log('SalesActions: removeFromCart -', productId);
      return { cart: updatedCart, summary: calculateSummary(updatedCart) };
    });
  },
  updateQuantity: (productId: string, quantity: number) => {
    const clampedQty = quantity < 1 ? 1 : quantity;
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.productId === productId
          ? { ...item, quantity: clampedQty, total: clampedQty * item.unitPrice }
          : item
      );
      console.log('SalesActions: updateQuantity -', productId, '→', clampedQty);
      return { cart: updatedCart, summary: calculateSummary(updatedCart) };
    });
  },
  clearCart: () => {
    set(() => {
      console.log('SalesActions: clearCart');
      return { cart: [], summary: calculateSummary([]) };
    });
  },
  setCustomer: (customer: Customer) => {
    set({ selectedCustomer: customer });
    console.log('SalesActions: setCustomer -', customer.name);
  },
  clearCustomer: () => {
    set({ selectedCustomer: null });
    console.log('SalesActions: clearCustomer');
  },
  setPaymentMethod: (method: PaymentMethod) => {
    console.log('SalesActions: setPaymentMethod -', method);
  },
  openCheckout: () => {
    console.log('SalesActions: openCheckout');
  },
  closeCheckout: () => {
    console.log('SalesActions: closeCheckout');
  },
});
