# Sales Store Module

## Folder Purpose
This folder contains the Zustand store slice architecture for the Sales module. It is responsible for managing the global state of the POS sales process, including the shopping cart, customer selection, and payment flow.

## State Structure
The `SalesState` is defined in `state.ts` and contains:
- `cart`: Array of items currently in the active sale.
- `selectedCustomer`: The customer attached to the current sale (if any).
- `selectedPaymentMethod`: The selected payment method for checkout.
- `summary`: Calculated totals (subtotal, discount, tax, grand total).
- `isCheckoutOpen`: Boolean tracking whether the checkout panel/modal is active.

## Action Responsibilities
The `SalesActions` interface in `actions.ts` defines state mutations.
Currently, these are placeholder functions utilizing `console.log()`. Future implementations will include:
- `addToCart(productId)`: Looks up product details and adds to cart, or increments quantity if it already exists.
- `removeFromCart(itemId)`: Removes a specific line item.
- `updateQuantity(itemId, quantity)`: Updates the quantity of a specific line item.
- `clearCart()`: Empties the cart and resets summary.
- `setCustomer(customerId)`: Attaches a customer to the sale.
- `setPaymentMethod(method)`: Selects a payment method.
- `openCheckout()` / `closeCheckout()`: Manages checkout UI state.

## Future Integration Plan
1. **Connect to Root Store:** Import `createSalesSlice` into the main Zustand store configuration.
2. **Implement Logic:** Replace `console.log()` placeholders with actual state mutations in `actions.ts`.
3. **Derived State & Subscriptions:** Implement automatic recalculation of `summary` whenever `cart` changes (e.g., using Zustand subscribers or derived state selectors).
4. **UI Integration:** Replace local dummy state in the UI components with standard `useStore(select...)` hooks.

## Development Rules
- **No Direct Mutations:** Always use Zustand's `set` function to update state.
- **Pure Selectors:** Selectors in `selectors.ts` must remain pure functions.
- **Single Source of Truth:** The cart inside this store slice should be the absolute source of truth for the sales module.
- **No UI Coupling:** Store actions should not know about UI specifics; they only mutate data.
