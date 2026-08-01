# Customer Components

## Future UI Components

- `CustomersPage`: The root container for the module. Orchestrates data fetching and passes state down.
- `CustomersHeader`: Top bar displaying the module title and general high-level metrics.
- `CustomersToolbar`: Action bar for searching, filtering, and "Add Customer" actions.
- `CustomerTable`: Data grid listing all customers.
- `CustomerTableRow`: Individual row representation of a single customer.
- `CustomerForm`: Form used for both creating and editing customer details.
- `CustomerDetailsPanel`: Slide-out or side panel showing deep details, stats, and history for a selected customer.
- `CustomerActions`: Action buttons (edit, delete, view history) for a specific customer context.

## Responsibilities & Rules

1. **Strictly Presentational**: With the exception of `CustomersPage`, all components in this directory must be purely presentational (dumb components).
2. **Props Only**: Components must receive their data entirely via props.
3. **No Service Imports**: No component may directly import `CustomerService`.
4. **No Direct Store Access**: Components must not directly access Zustand unless injected via `useCustomers()`.
