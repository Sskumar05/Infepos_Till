# Reports Module — Utils Architecture

## Purpose

The `utils/` directory contains pure helper functions for formatting numeric values, transforming data for charting libraries, calculating analytical growth metrics, and assembling export payloads.

---

## Documented Future Helpers

- **Currency Formatter**: Pure function to format raw numbers into localized currency strings with symbol, thousands separators, and correct decimal precision (e.g. `formatCurrency(1234.5, 'USD')` → `"$1,234.50"`).
- **Date Formatter**: Helper functions for formatting dates, parsing date ranges, and generating human-readable period labels.
- **Percentage Formatter**: Utility to convert ratios into percentage strings with customizable decimal accuracy (e.g. `0.154` → `"15.4%"`).
- **Growth Calculator**: Mathematical helper for calculating period-over-period percentage growth, margin percentages, and variance metrics.
- **Chart Formatter**: Transformer functions that convert raw report domain models into formatted dataset arrays compatible with charting libraries.
- **Export Helpers**: Functions to transform report state into CSV strings, JSON blobs, or tabular data arrays ready for export.
- **Print Helpers**: Utility functions for building print HTML templates or window print commands.

---

## Development Rules

1. **Pure Functions Only**: Every utility function must be deterministic with zero side effects, depending only on explicitly provided inputs.
2. **Comprehensive Unit Testing**: All mathematical and formatting helper functions must be fully testable without needing React component rendering or browser DOM APIs.
