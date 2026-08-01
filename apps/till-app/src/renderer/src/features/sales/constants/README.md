# Constants

## Purpose
Stores immutable values used throughout the Sales module.

## Responsibility
Provides a single source of truth for fixed values to avoid magic strings or numbers scattered across the codebase.

## Future Implementation Plan
Will include constants for fixed tax rates, receipt formatting rules, payment methods, and error messages.

## Rules
- Sales constants, tax constants, receipt constants.
- No business logic or stateful values.

## Dependency Boundaries
Can be imported by any folder within the module. Should not depend on other folders.
