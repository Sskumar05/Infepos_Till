# Reports Module — Components Architecture

## Purpose

The `components/` directory contains all React user interface components for the Reports & Analytics module. It follows a strict presentational design pattern where UI components receive all data, configuration, and callbacks via explicit TypeScript props.

---

## Planned Components & Structure

```text
components/
├── ReportsPage.tsx        # Top-level container component (connects to useReports hook)
├── ReportsHeader.tsx      # Header layout with titles, date pickers, refresh triggers
├── ReportsContent.tsx     # Main body content orchestrator and tab navigation
├── ReportsDashboard.tsx   # Dashboard overview layout compiling KPIs and main charts
├── AnalyticsCards.tsx     # Row of summary metric cards (Gross Sales, Net Profit, Orders, etc.)
├── SalesChart.tsx         # Visual representation of sales trends over time
├── RevenueChart.tsx       # Breakdown of revenue streams, margins, and cost structures
├── InventoryReport.tsx    # Table/grid showing stock valuation, movement, and alerts
├── CustomerReport.tsx     # Metrics regarding customer acquisition, retention, and loyalty
├── ExportPanel.tsx        # Controls for exporting reports to PDF, CSV, or Excel
├── FilterPanel.tsx        # Granular filter panel (Date range, categories, register selection)
└── PrintPanel.tsx         # Print configuration dialog and print layout preview
```

---

## Component Responsibilities

| Component | Type | Responsibility |
|---|---|---|
| **ReportsPage** | Container | Sole point of connection to `useReports()`. Manages top-level state delegation. |
| **ReportsHeader** | Presentational | Displays report title, active date range summary, and global action triggers. |
| **ReportsContent** | Layout | Renders selected sub-report tab (Dashboard, Sales, Inventory, Customers, etc.). |
| **ReportsDashboard** | Layout | Aggregates summary widgets (`AnalyticsCards`, `SalesChart`, `RevenueChart`). |
| **AnalyticsCards** | Presentational | Renders individual metric cards showing key financial and operational KPIs. |
| **SalesChart** | Presentational | Renders line/bar charts visualizing hourly, daily, or monthly sales volume. |
| **RevenueChart** | Presentational | Displays revenue breakdown, profit margins, and sales tax distribution. |
| **InventoryReport** | Presentational | Displays inventory report tables, stock turn rate, and valuation metrics. |
| **CustomerReport** | Presentational | Displays top customers, purchase frequencies, and loyalty reward totals. |
| **ExportPanel** | UI Modal / Panel | Provides format selection (CSV, XLSX, PDF) and download options. |
| **FilterPanel** | UI Bar / Drawer | Renders date pickers, payment type selectors, and store location filters. |
| **PrintPanel** | UI Modal / Preview | Offers paper size selection, layout options, and print trigger. |

---

## Dependencies

- **Shared UI Library**: Uses common UI building blocks (`Card`, `Button`, `Select`, `Input`, `Modal`, `Table`, `Badge`, `Spinner`).
- **Icons**: Lucide React icons for visual metrics and action buttons.
- **Utilities**: Formatter utilities from `../utils/` for formatting currencies, dates, and percentages.
- **Types**: Interfaces from `../types/` for strongly typed component props.

---

## Development Rules

1. **No Direct Hook Usage**: Only `ReportsPage` may invoke the `useReports` custom hook. All child components must be pure presentational components receiving data strictly via props.
2. **No Business Logic**: Do not compute totals, tax rates, or growth percentages inside presentational components. Pre-calculate values in services/hooks or use pure helpers from `utils/`.
3. **Memoization & Display Names**: All presentational components must be wrapped with `React.memo` and explicitly declare a `displayName`.
4. **Zero State Mutation**: Treat all received props as immutable data.
5. **No Direct Hardware Access**: Print and file save triggers must pass events up to `ReportsPage` to invoke service handlers.
