# Utilities

## Purpose
Contains pure helper functions specific to the Sales module.

## Responsibility
Extracts complex formatting, calculation, or mapping logic out of components and services to make them more readable and testable.

## Future Implementation Plan
Will include utilities for tax calculations, total sum aggregations, receipt formatting, and currency conversions if necessary.

## Rules
- Pure utility functions only.
- No side effects (no DOM manipulation, no API calls, no global state changes).

## Dependency Boundaries
Should not depend on components, hooks, or services.
