import { Permission, UserRole } from '../types';

/**
 * Hook for consuming RBAC state in React components.
 * Returns dummy values until backend integration is complete.
 */
export function usePermissions() {
  // Dummy values — will be replaced with real role from auth store
  const currentRole: UserRole = 'CASHIER';
  const currentPermissions: Permission[] = [];

  const can = (_permission: Permission): boolean => {
    console.log('usePermissions.can (dummy):', _permission);
    return false;
  };

  const canAny = (_permissions: Permission[]): boolean => {
    console.log('usePermissions.canAny (dummy):', _permissions);
    return false;
  };

  const is = (_role: UserRole): boolean => {
    console.log('usePermissions.is (dummy):', _role);
    return false;
  };

  return {
    currentRole,
    currentPermissions,
    can,
    canAny,
    is,
  };
}
