# REST API Plan

This document outlines the RESTful API architecture for the INFYPOS system. These APIs will be implemented in the NestJS backend to serve the Till application and other potential clients.

## General Information
- **Base URL**: `/api/v1`
- **Data Format**: `application/json`

---

## 1. Authentication
| Method | Endpoint | Purpose | Auth Required | Role Access |
|--------|----------|---------|---------------|-------------|
| POST   | `/auth/login` | Authenticate a user via email/password. | No | All |
| POST   | `/auth/pin-login` | Authenticate a user via quick Till PIN. | No | All |
| POST   | `/auth/refresh` | Refresh an expired access token. | Yes | All |
| POST   | `/auth/logout` | Terminate the current session. | Yes | All |

## 2. Users
| Method | Endpoint | Purpose | Auth Required | Role Access |
|--------|----------|---------|---------------|-------------|
| GET    | `/users` | Retrieve a list of all users. | Yes | Admin, Manager |
| GET    | `/users/:id` | Retrieve a specific user's details. | Yes | Admin, Manager, Self |
| POST   | `/users` | Create a new user account. | Yes | Admin |
| PUT    | `/users/:id` | Update an existing user's details. | Yes | Admin, Manager |
| DELETE | `/users/:id` | Deactivate or delete a user. | Yes | Admin |

## 3. Roles
| Method | Endpoint | Purpose | Auth Required | Role Access |
|--------|----------|---------|---------------|-------------|
| GET    | `/roles` | Retrieve all available roles. | Yes | Admin, Manager |
| GET    | `/roles/:id` | Retrieve a specific role's permissions. | Yes | Admin, Manager |
| POST   | `/roles` | Create a new role with specific permissions. | Yes | Admin |
| PUT    | `/roles/:id` | Update a role's permissions. | Yes | Admin |

## 4. Stores
| Method | Endpoint | Purpose | Auth Required | Role Access |
|--------|----------|---------|---------------|-------------|
| GET    | `/stores` | Retrieve all store locations. | Yes | Admin, Manager |
| GET    | `/stores/:id` | Retrieve details of a specific store. | Yes | Admin, Manager, Cashier |
| POST   | `/stores` | Add a new store location. | Yes | Admin |
| PUT    | `/stores/:id` | Update a store's details (e.g., tax rate). | Yes | Admin, Manager |

## 5. Products
| Method | Endpoint | Purpose | Auth Required | Role Access |
|--------|----------|---------|---------------|-------------|
| GET    | `/products` | Retrieve a list of all products. | Yes | All |
| GET    | `/products/:id` | Retrieve specific product details. | Yes | All |
| POST   | `/products` | Add a new product to the catalog. | Yes | Admin, Manager |
| PUT    | `/products/:id` | Update product details (e.g., price). | Yes | Admin, Manager |
| DELETE | `/products/:id` | Soft delete/deactivate a product. | Yes | Admin, Manager |

## 6. Categories
| Method | Endpoint | Purpose | Auth Required | Role Access |
|--------|----------|---------|---------------|-------------|
| GET    | `/categories` | Retrieve all product categories. | Yes | All |
| POST   | `/categories` | Create a new category. | Yes | Admin, Manager |
| PUT    | `/categories/:id` | Update an existing category. | Yes | Admin, Manager |
| DELETE | `/categories/:id` | Delete a category. | Yes | Admin, Manager |

## 7. Customers
| Method | Endpoint | Purpose | Auth Required | Role Access |
|--------|----------|---------|---------------|-------------|
| GET    | `/customers` | Retrieve a list of customers. | Yes | All |
| GET    | `/customers/:id` | Retrieve a specific customer's details. | Yes | All |
| POST   | `/customers` | Register a new customer. | Yes | All |
| PUT    | `/customers/:id` | Update customer details. | Yes | All |

## 8. Sales
| Method | Endpoint | Purpose | Auth Required | Role Access |
|--------|----------|---------|---------------|-------------|
| GET    | `/sales` | Retrieve a history of sales transactions. | Yes | Admin, Manager |
| GET    | `/sales/:id` | Retrieve details of a specific sale. | Yes | All |
| POST   | `/sales` | Create a new sale record (Checkout). | Yes | All |
| PUT    | `/sales/:id/void` | Void a completed sale. | Yes | Admin, Manager |

## 9. Payments
| Method | Endpoint | Purpose | Auth Required | Role Access |
|--------|----------|---------|---------------|-------------|
| GET    | `/payments` | Retrieve a list of all payments. | Yes | Admin, Manager |
| POST   | `/payments` | Record a payment against a sale. | Yes | All |

## 10. Refunds
| Method | Endpoint | Purpose | Auth Required | Role Access |
|--------|----------|---------|---------------|-------------|
| GET    | `/refunds` | Retrieve a list of all refunds. | Yes | Admin, Manager |
| POST   | `/refunds` | Process a refund for a specific sale. | Yes | Admin, Manager, Cashier |

## 11. Inventory
| Method | Endpoint | Purpose | Auth Required | Role Access |
|--------|----------|---------|---------------|-------------|
| GET    | `/inventory` | Retrieve stock levels for all products. | Yes | All |
| GET    | `/inventory/:productId` | Retrieve stock level for a product. | Yes | All |
| POST   | `/inventory/movement` | Record a stock adjustment/movement. | Yes | Admin, Manager |

## 12. Reports
| Method | Endpoint | Purpose | Auth Required | Role Access |
|--------|----------|---------|---------------|-------------|
| GET    | `/reports/sales` | Generate a sales performance report. | Yes | Admin, Manager |
| GET    | `/reports/inventory` | Generate an inventory valuation report. | Yes | Admin, Manager |
| GET    | `/reports/shifts` | Generate a till shift summary report. | Yes | Admin, Manager |

## 13. Settings
| Method | Endpoint | Purpose | Auth Required | Role Access |
|--------|----------|---------|---------------|-------------|
| GET    | `/settings` | Retrieve global and store settings. | Yes | All |
| PUT    | `/settings` | Update system configuration settings. | Yes | Admin |

## 14. Synchronization
| Method | Endpoint | Purpose | Auth Required | Role Access |
|--------|----------|---------|---------------|-------------|
| POST   | `/sync/push` | Push offline data from the Till to Backend. | Yes | System/All |
| GET    | `/sync/pull` | Pull updated data from Backend to the Till. | Yes | System/All |

## 15. Shifts
| Method | Endpoint | Purpose | Auth Required | Role Access |
|--------|----------|---------|---------------|-------------|
| POST   | `/shifts` | Open a new cashier shift with a starting float. | Yes | Admin, Manager, Cashier |
| GET    | `/shifts` | Retrieve shift history for the store. | Yes | Admin, Manager |
| GET    | `/shifts/:id` | Retrieve details of a specific shift. | Yes | Admin, Manager, Cashier |
| PUT    | `/shifts/:id/close` | Close an active shift and record final cash balance. | Yes | Admin, Manager, Cashier |
