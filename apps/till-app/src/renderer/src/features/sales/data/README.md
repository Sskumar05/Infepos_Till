# Data

## Purpose
Provides static dummy data for the Sales module during initial development and UI scaffolding.

## Responsibility
Allows components to be built and styled without waiting for a fully functional backend API or local SQLite setup.

## Future Implementation Plan
Will include mock payloads for shopping carts, completed transactions, and mocked product queries from the POS interface.

## Rules
- Temporary dummy data only.
- Must be completely removed after backend integration.
- Should accurately reflect the shape of the `types/`.

## Dependency Boundaries
Imported only by hooks or services to mock network/DB responses. UI components should never import this data directly.
