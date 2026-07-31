export type UserRole = 'SUPER_ADMIN' | 'ADMIN' | 'MANAGER' | 'CASHIER';

export type AccessLevel = 'NONE' | 'READ' | 'WRITE' | 'FULL';

export type Permission =
  // Products
  | 'products.view'
  | 'products.create'
  | 'products.edit'
  | 'products.delete'
  // Sales
  | 'sales.view'
  | 'sales.create'
  | 'sales.refund'
  // Inventory
  | 'inventory.view'
  | 'inventory.edit'
  // Reports
  | 'reports.view'
  // Settings
  | 'settings.view'
  | 'settings.edit'
  // Customers
  | 'customers.view'
  | 'customers.create'
  | 'customers.edit'
  | 'customers.delete';

export interface PermissionGroup {
  name: string;
  permissions: Permission[];
}

export interface RolePermission {
  role: UserRole;
  permissions: Permission[];
  accessLevel: AccessLevel;
}
