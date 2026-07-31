# Role-Based Access Control (RBAC) Infrastructure

This module defines the authorization layer for the INFYPOS Till App.

## How RBAC Works

Every authenticated user has a **UserRole** (e.g., `CASHIER`, `MANAGER`). Each role is mapped to a set of **Permissions** (e.g., `sales.create`). The UI consumes these permissions to conditionally render controls.

## Roles

| Role        | Access Level | Description                   |
|-------------|--------------|-------------------------------|
| SUPER_ADMIN | FULL         | Unrestricted access           |
| ADMIN       | FULL         | All features                  |
| MANAGER     | WRITE        | All except system settings    |
| CASHIER     | READ         | Sales and product viewing     |

## Permission Flow

```
Backend Auth API → UserRole → ROLE_PERMISSION_MATRIX lookup → usePermissions() → UI gate
```

## Extension Strategy

To add a new permission:
1. Add the type to `types/index.ts`.
2. Add the constant to `constants/index.ts`.
3. Update `permissions/permissionMatrix.ts` for each applicable role.

## Future Backend Integration

When the backend API is connected, `usePermissions()` will:
1. Read the authenticated user's role from Zustand global auth state.
2. Fetch server-validated permissions if role enforcement is server-side.
3. Replace the dummy `false` returns with real matrix lookups.
