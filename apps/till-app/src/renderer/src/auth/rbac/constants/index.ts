import { Permission, UserRole } from '../types';

export const ALL_PERMISSIONS: Permission[] = [
  'products.view', 'products.create', 'products.edit', 'products.delete',
  'sales.view', 'sales.create', 'sales.refund',
  'inventory.view', 'inventory.edit',
  'reports.view',
  'settings.view', 'settings.edit',
  'customers.view', 'customers.create', 'customers.edit', 'customers.delete',
];

export const PERMISSION_GROUPS = {
  PRODUCTS: ['products.view', 'products.create', 'products.edit', 'products.delete'] as Permission[],
  SALES: ['sales.view', 'sales.create', 'sales.refund'] as Permission[],
  INVENTORY: ['inventory.view', 'inventory.edit'] as Permission[],
  REPORTS: ['reports.view'] as Permission[],
  SETTINGS: ['settings.view', 'settings.edit'] as Permission[],
  CUSTOMERS: ['customers.view', 'customers.create', 'customers.edit', 'customers.delete'] as Permission[],
};

export const USER_ROLES: Record<string, UserRole> = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  CASHIER: 'CASHIER',
};
