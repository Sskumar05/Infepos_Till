# Database Plan

This document outlines the planned database entities for the INFYPOS system, specifically catering to the Till application and its backend synchronization.

---

## 1. Users
- **Purpose**: Represents staff members (cashiers, managers, admins) who can access the EPOS system.
- **Main Fields**: `id`, `first_name`, `last_name`, `email`, `password_hash`, `pin_code` (for quick till access), `role_id`, `store_id`, `is_active`, `created_at`, `updated_at`.
- **Relationships**:
  - Belongs to a **Role** (Many-to-One)
  - Belongs to a **Store** (Many-to-One)
  - Has many **Sales** (One-to-Many)
  - Has many **Shifts** (One-to-Many)

## 2. Roles
- **Purpose**: Defines access levels and permissions within the system.
- **Main Fields**: `id`, `name` (e.g., Admin, Cashier), `permissions` (JSON/Array of specific access rights).
- **Relationships**:
  - Has many **Users** (One-to-Many)

## 3. Stores
- **Purpose**: Represents physical or logical store locations for multi-store support.
- **Main Fields**: `id`, `name`, `address`, `contact_number`, `tax_rate`, `currency`.
- **Relationships**:
  - Has many **Users** (One-to-Many)
  - Has many **Sales** (One-to-Many)
  - Has many **Inventory** records (One-to-Many)
  - Has many **Shifts** (One-to-Many)

## 4. Products
- **Purpose**: Stores information about the items available for sale.
- **Main Fields**: `id`, `sku`, `barcode`, `name`, `description`, `price`, `cost_price`, `taxable`, `category_id`, `is_active`.
- **Relationships**:
  - Belongs to a **Category** (Many-to-One)
  - Has many **Sale Items** (One-to-Many)
  - Has many **Inventory** records (One-to-Many)

## 5. Categories
- **Purpose**: Groups products logically for easier navigation on the till interface.
- **Main Fields**: `id`, `name`, `description`, `parent_id` (for nested categories), `image_url`, `display_order`.
- **Relationships**:
  - Has many **Products** (One-to-Many)
  - Belongs to a parent **Category** (Many-to-One, optional)

## 6. Customers
- **Purpose**: Stores details of registered customers for loyalty programs, receipts, or credit accounts.
- **Main Fields**: `id`, `first_name`, `last_name`, `email`, `phone_number`, `loyalty_points`, `address`.
- **Relationships**:
  - Has many **Sales** (One-to-Many)

## 7. Sales
- **Purpose**: Represents a completed transaction or order at the till.
- **Main Fields**: `id`, `receipt_number`, `total_amount`, `tax_amount`, `discount_amount`, `status` (Completed, Voided, Held), `user_id`, `store_id`, `customer_id`, `shift_id`, `created_at`.
- **Relationships**:
  - Belongs to a **User** (Many-to-One)
  - Belongs to a **Store** (Many-to-One)
  - Belongs to a **Customer** (Many-to-One, optional)
  - Belongs to a **Shift** (Many-to-One)
  - Has many **Sale Items** (One-to-Many)
  - Has many **Payments** (One-to-Many)
  - Has many **Refunds** (One-to-Many)

## 8. Sale Items
- **Purpose**: Represents individual products sold within a specific Sale.
- **Main Fields**: `id`, `sale_id`, `product_id`, `quantity`, `unit_price`, `total_price`, `discount`, `tax`.
- **Relationships**:
  - Belongs to a **Sale** (Many-to-One)
  - Belongs to a **Product** (Many-to-One)

## 9. Payments
- **Purpose**: Records the payment methods used for a particular sale.
- **Main Fields**: `id`, `sale_id`, `payment_method` (Cash, Card, Gift Card), `amount`, `transaction_reference` (for card payments), `status`.
- **Relationships**:
  - Belongs to a **Sale** (Many-to-One)

## 10. Refunds
- **Purpose**: Tracks returned items and refunded amounts linked to an original sale.
- **Main Fields**: `id`, `original_sale_id`, `refund_amount`, `reason`, `user_id`, `created_at`.
- **Relationships**:
  - Belongs to a **Sale** (Many-to-One)
  - Belongs to a **User** (Many-to-One)

## 11. Inventory
- **Purpose**: Tracks current stock levels of products across different stores.
- **Main Fields**: `id`, `product_id`, `store_id`, `quantity_on_hand`, `reorder_level`.
- **Relationships**:
  - Belongs to a **Product** (Many-to-One)
  - Belongs to a **Store** (Many-to-One)
  - Has many **Stock Movements** (One-to-Many)

## 12. Stock Movements
- **Purpose**: An immutable ledger recording any changes to stock levels (e.g., Sale, Restock, Shrinkage).
- **Main Fields**: `id`, `inventory_id`, `change_amount`, `reason` (Sale, Manual Adjustment, Delivery), `user_id`, `created_at`.
- **Relationships**:
  - Belongs to **Inventory** (Many-to-One)
  - Belongs to a **User** (Many-to-One)

## 13. Settings
- **Purpose**: Stores global or store-specific configuration options.
- **Main Fields**: `id`, `store_id` (null if global), `setting_key` (e.g., 'receipt_header'), `setting_value` (String/JSON), `description`.
- **Relationships**:
  - Belongs to a **Store** (Many-to-One, optional)

## 14. Shift
- **Purpose**: Tracks till sessions, float amounts, and expected vs. actual takings.
- **Main Fields**: `id`, `user_id`, `store_id`, `start_time`, `end_time`, `opening_float`, `closing_cash`, `expected_cash`, `status` (Open, Closed).
- **Relationships**:
  - Belongs to a **User** (Many-to-One)
  - Belongs to a **Store** (Many-to-One)
  - Has many **Sales** (One-to-Many)

## 15. Sync Queue
- **Purpose**: Manages offline-first capabilities for the Electron app by tracking local changes that need to be synced with the backend.
- **Main Fields**: `id`, `entity_type` (e.g., 'Sale', 'Customer'), `entity_id`, `action` (Create, Update, Delete), `payload` (JSON), `status` (Pending, Synced, Failed), `retry_count`.
- **Relationships**:
  - None (System-level tracking table)

## 16. Audit Logs
- **Purpose**: Provides a security and compliance trail of important actions taken within the system.
- **Main Fields**: `id`, `user_id`, `action` (e.g., 'Voided Sale', 'Changed Price'), `target_entity`, `target_id`, `details` (JSON), `ip_address`, `created_at`.
- **Relationships**:
  - Belongs to a **User** (Many-to-One, optional)

## 17. Refund Items
- **Purpose**: Records the individual line items returned within a refund, enabling accurate partial refund processing. Where the **Refunds** entity captures the overall refund transaction, Refund Items captures exactly which products were returned and in what quantity. This allows a cashier to refund one item from a multi-item sale without affecting the other items on the original receipt.
- **Main Fields**: `id`, `refund_id`, `sale_item_id`, `product_id`, `quantity_returned`, `unit_refund_price`, `total_refund_amount`.
- **Relationships**:
  - Belongs to a **Refund** (Many-to-One) — links this line item back to its parent refund transaction.
  - Belongs to a **Sale Item** (Many-to-One) — references the specific original line item being returned, preserving traceability to the original sale.
  - Belongs to a **Product** (Many-to-One) — provides a direct reference to the product, allowing inventory to be restocked automatically upon a successful refund.
