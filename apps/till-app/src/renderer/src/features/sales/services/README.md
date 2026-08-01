# Services

## Purpose
The service layer for the Sales module.

## Responsibility
Acts as the bridge between the frontend application and external data sources (APIs, local SQLite database). It handles business logic, data fetching, and transaction persistence.

## Future Implementation Plan
Will include a `SalesService` class or functions to process checkouts, apply discounts, and fetch sales history.

## Rules
- Future service layer.
- API/SQLite bridge only.
- Should handle errors and formatting before returning data to the hooks.

## Dependency Boundaries
Can import types, constants, and utilities. Can invoke IPC handlers or HTTP clients. Must not import hooks or components.
