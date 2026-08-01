# Types

## Purpose
Defines all TypeScript data structures for the Sales module.

## Responsibility
Provides strong typing for the module, including API responses, hook states, component props, and shared domain models.

## Future Implementation Plan
Will include definitions for `Transaction`, `CartItem`, `Discount`, `TaxInfo`, and related types.

## Rules
- Interfaces, enums, and type aliases only.
- No executable code.

## Dependency Boundaries
Can import types from other modules if absolutely necessary, but should aim for isolation. Imported by all other folders in the module.
