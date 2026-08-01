# Sales Module

## Module Overview
The Sales module is the core transactional interface of the INFYPOS Till application. It handles product browsing, cart management, customer selection, and the checkout process.

## Final Folder Structure
```
sales/
├── components/       # All UI components (Layouts, Panels, Cards, Dialogs)
├── constants/        # Static definitions (Payment methods, Statuses, TAX_RATE)
├── data/             # Dummy data payloads for development and testing
├── hooks/            # Feature-specific hooks (e.g., useSales for initial hydration)
├── services/         # API & SQLite abstraction layer (currently dummy)
├── types/            # TypeScript interfaces and type aliases
└── utils/            # Helper functions for the sales domain
```

## Component Hierarchy
The UI architecture follows a strict layout-orchestrator pattern:
- **`SalesPage`**: The root container. Fetches initial data via `useSales()`.
  - **`SalesHeader`**: Displays store info and global actions.
  - **`SalesContent`**: Layout orchestrator (desktop side-by-side / mobile stacked).
    - **`ProductToolbar`**: Search and category filtering inputs.
    - **`ProductGrid`**: Renders `ProductCard` components.
    - **`CartPanel`**: Orchestrates the right-hand panel.
      - **`CartHeader`**: Cart item count and clear cart button.
      - **`CartItemList`**: (Currently rendering inline via `StoreCartItemRow` mapped from Zustand).
      - **`CustomerPanel`**: Manages customer assignment.
        - `CustomerSelector`, `CustomerInfo`, `CustomerActions`, `CustomerCard`
      - **`CheckoutPanel`**: Manages payment initialization.
        - `PaymentSummary`, `PaymentMethodSelector`, `PaymentActions`

## Zustand Store Architecture
State management is decoupled from React components using a domain-specific slice: `store/modules/sales`.
- **State**: `cart`, `selectedCustomer`, `selectedPaymentMethod`, `summary`, `isCheckoutOpen`.
- **Actions**: `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`, `setCustomer`, `clearCustomer`, `setPaymentMethod`.
- **Logic**: All computations (subtotal, tax, grand total) are calculated synchronously as derived side-effects inside the store actions.

## Data Flow
1. **Hydration**: `SalesPage` loads products and customers via `useSales()`.
2. **Interaction**: UI components (e.g., `ProductGrid`, `CustomerSelector`) invoke stable actions from `useSalesActions()`.
3. **Mutation**: The Zustand store updates its state (e.g., mutating `cart` and recalculating `summary`).
4. **Subscription**: Display components (e.g., `CartPanel`, `PaymentSummary`) automatically re-render via targeted selector hooks (`useSalesCart`, `useSalesSummary`).

## Business Logic Rules
- **No Inline Computations**: React components never calculate prices, taxes, or totals.
- **Unidirectional Updates**: UI interactions trigger store actions; the UI only reflects store state.
- **Single Source of Truth**: The global store represents the definitive cart state.

## UI Responsibilities
- Strictly presentational components wrapped in `React.memo()`.
- Built entirely with Tailwind CSS and existing shared UI elements (`Card`, `Button`, `Badge`, etc.). No custom inline styles.

## Future Day 9 Integration Plan
1. **Backend Integration**: Replace `salesData.ts` and dummy hooks with real SQLite database queries.
2. **Checkout Flow**: Implement the transition from `PaymentSummary` to a functional checkout modal.
3. **Hardware Integration**: Connect receipt printers and barcode scanners to the checkout events.
4. **Transaction Persistence**: Finalize cart data into persistent `Sale` records.
