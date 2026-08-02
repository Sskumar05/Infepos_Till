# Reports Module — Constants Architecture

## Purpose

The `constants/` directory stores fixed application configuration constants, report type definitions, date period enums, charting color palettes, export file types, and formatting defaults used across the Reports module.

---

## Documented Future Constants

- **`REPORT_TYPES`**: Dictionary / enum of supported reports (`DASHBOARD`, `SALES`, `REVENUE`, `INVENTORY`, `CUSTOMERS`, `TAX`, `PAYMENTS`).
- **`REPORT_PERIODS`**: Predefined date range options (`TODAY`, `YESTERDAY`, `THIS_WEEK`, `LAST_7_DAYS`, `THIS_MONTH`, `LAST_MONTH`, `THIS_YEAR`, `CUSTOM`).
- **`EXPORT_FORMATS`**: Supported export file extension definitions (`PDF`, `CSV`, `XLSX`, `JSON`).
- **`PAPER_SIZES`**: Printable document formats (`A4`, `LETTER`, `THERMAL_80MM`, `THERMAL_58MM`).
- **`CHART_TYPES`**: Supported visualization types (`LINE`, `BAR`, `PIE`, `DONUT`, `AREA`).
- **`COLORS`**: Accessible theme colors for charts, KPI indicator badges, and trend graphs (Primary, Secondary, Success, Warning, Danger, Info).
- **`DATE_FORMATS`**: Standardized date string format templates (`YYYY-MM-DD`, `DD/MM/YYYY`, `MMM DD, YYYY`, `HH:mm`).
- **`CURRENCY`**: Default formatting constants (Currency Symbol, ISO Code, Decimal Places).

---

## Development Rules

1. **Immutable Export**: All constant collections must be declared with `as const` or frozen objects.
2. **Single Source of Truth**: UI components must reference these central constants rather than hardcoding string identifiers or color hex codes.
