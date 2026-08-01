# Customer Hooks

## Future Hook: `useCustomers()`

The central orchestrator of UI state for the module.

## Expected Return Values

- `customers`: Array of customer objects.
- `selectedCustomer`: The currently highlighted/active customer object, or null.
- `isLoading`: Boolean indicating data fetch status.
- `error`: String or Error object if a fetch/mutation failed.
- `refresh()`: Callback to reload customer data from the service.

## Rules

- Must be the only bridge between `CustomerService` and `CustomersPage`.
- Contains all React lifecycle logic (`useEffect`, `useState`).
