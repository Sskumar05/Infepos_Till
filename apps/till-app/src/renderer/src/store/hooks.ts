/**
 * Typed Zustand hooks.
 *
 * Re-exports `useAppStore` with a consistent naming convention so that
 * components never import directly from Zustand internals.  All hook
 * variants used across the app should be declared here.
 *
 * Usage in a component:
 *   import { useStore } from '@renderer/store/hooks'
 *   const count = useStore((state) => state.someValue)
 *
 * How to extend (Day 3+):
 *   Add domain-specific selector hooks here to avoid repetitive boilerplate
 *   in components, e.g.:
 *     export const useIsAuthenticated = () =>
 *       useStore((state) => state.auth.isAuthenticated)
 */

import { useAppStore } from '.'
import type { AppState } from './types'

// Primary hook — covers the entire store.
export const useStore = useAppStore

// Convenience alias for typing selector callbacks.
export type StoreSelector<T> = (state: AppState) => T
