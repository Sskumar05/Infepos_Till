/**
 * Typed Zustand hooks.
 *
 * Re-exports `useAppStore` with a consistent naming convention so that
 * components never import directly from Zustand internals. All hook
 * variants used across the app should be declared here.
 *
 * Usage in a component:
 *   import { useStore } from '@renderer/store/hooks'
 *   const count = useStore((state) => state.someValue)
 */

import { useAppStore } from '.';
import { useShallow } from 'zustand/react/shallow';
import type { AppState } from './types';
import { selectCart, selectSummary, selectCustomer, selectPaymentMethod } from './modules/sales/selectors';

// Primary hook — covers the entire store.
export const useStore = useAppStore;

// Convenience alias for typing selector callbacks.
export type StoreSelector<T> = (state: AppState) => T;

// ── Sales Module Hooks ───────────────────────────────────────────────────────
export const useSalesCart = () => useAppStore(selectCart);
export const useSalesSummary = () => useAppStore(selectSummary);
export const useSalesCustomer = () => useAppStore(selectCustomer);
export const useSalesPaymentMethod = () => useAppStore(selectPaymentMethod);

// Action accessor — useShallow prevents a new object reference on every render,
// which would otherwise cause an infinite "Maximum update depth exceeded" loop.
// Without useShallow, the inline selector returns a fresh object literal on every
// call, Zustand detects it as "changed" (referential inequality), triggers a
// re-render, which calls the selector again — an infinite loop.
export const useSalesActions = () =>
  useAppStore(
    useShallow((state) => ({
      addToCart: state.addToCart,
      removeFromCart: state.removeFromCart,
      updateQuantity: state.updateQuantity,
      clearCart: state.clearCart,
      setCustomer: state.setCustomer,
      clearCustomer: state.clearCustomer,
      setPaymentMethod: state.setPaymentMethod,
      openCheckout: state.openCheckout,
      closeCheckout: state.closeCheckout,
    }))
  );
