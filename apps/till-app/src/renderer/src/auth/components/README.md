# Auth Components

This directory contains higher-level authentication components for the INFYPOS Till App.

## Components

- `AuthGuard`: A flexible wrapper component that consumes the lower-level route guards (`ProtectedRoute`, `PublicRoute`). It can handle loading states (e.g., waiting for session restoration) before deciding which guard to apply based on the provided `type` prop.
