import { Permission, RolePermission, UserRole } from '../types';
import { ALL_PERMISSIONS, PERMISSION_GROUPS } from '../constants';

/**
 * Dummy permission matrix.
 * Real permissions will be loaded from the backend after authentication.
 */
export const ROLE_PERMISSION_MATRIX: Record<UserRole, RolePermission> = {
  SUPER_ADMIN: {
    role: 'SUPER_ADMIN',
    permissions: ALL_PERMISSIONS,
    accessLevel: 'FULL',
  },
  ADMIN: {
    role: 'ADMIN',
    permissions: ALL_PERMISSIONS,
    accessLevel: 'FULL',
  },
  MANAGER: {
    role: 'MANAGER',
    permissions: [
      ...PERMISSION_GROUPS.PRODUCTS,
      ...PERMISSION_GROUPS.SALES,
      ...PERMISSION_GROUPS.INVENTORY,
      ...PERMISSION_GROUPS.REPORTS,
      ...PERMISSION_GROUPS.CUSTOMERS,
      'settings.view',
    ] as Permission[],
    accessLevel: 'WRITE',
  },
  CASHIER: {
    role: 'CASHIER',
    permissions: [
      'sales.view',
      'sales.create',
      'products.view',
      'customers.view',
      'customers.create',
    ] as Permission[],
    accessLevel: 'READ',
  },
};
