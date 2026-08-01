# Customer Services

## Future Service Methods

- `getCustomers()`: Retrieve a list of all customers (with pagination/limits in the future).
- `getCustomerById(id)`: Retrieve a single customer profile in full detail.
- `createCustomer(data)`: Insert a new customer record.
- `updateCustomer(id, data)`: Modify an existing customer record.
- `deleteCustomer(id)`: Remove or archive a customer.
- `searchCustomers(query)`: Fuzzy search or structured query against the customer database.

## Rules

- This layer acts as the absolute boundary to data storage (SQLite, Backend, IPC).
- UI components must never call these methods directly; they must be consumed by `useCustomers()`.
