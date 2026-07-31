# Auth Guards

This directory contains reusable route protection components for the INFYPOS Till App.

## Components

- `ProtectedRoute`: Wraps routes that require a user to be authenticated. Unauthenticated users are redirected to the Login page.
- `PublicRoute`: Wraps routes that should only be accessible by unauthenticated users (e.g., Login, Forgot Password). Authenticated users are redirected to the Dashboard.

These guards rely on the `useAuth` hook and are designed to be framework-agnostic regarding the underlying state management tool (Zustand, Context, etc.).
