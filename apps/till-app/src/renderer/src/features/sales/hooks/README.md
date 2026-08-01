# Hooks

## Purpose
Contains custom React hooks tailored for the Sales module.

## Responsibility
These hooks act as abstractions over the application state (e.g., Zustand) and backend services. They provide data and mutator functions to the UI layer.

## Future Implementation Plan
Will include hooks like `useCart` (for cart management) and `useSales` (for transaction processing).

## Rules
- Custom hooks only.
- Only hook abstractions.
- Keep them testable and isolated from UI specifics.

## Dependency Boundaries
Can import services, types, constants, and global state (Zustand). Must not import UI components.
