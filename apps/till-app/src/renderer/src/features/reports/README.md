# Reports & Analytics Module Architecture

## Module Overview

The **Reports & Analytics Module** provides comprehensive reporting, business intelligence, data visualization, and data export capabilities for the InfyPOS till system. It aggregates sales, inventory, revenue, tax, payment, and customer performance metrics into high-level dashboards and detailed analytical views.

## Purpose

The Reports module acts as the analytical hub of the till application, enabling cashiers and store managers to evaluate performance, audit transaction history, track inventory movement, and export records for accounting and management purposes.

Key reporting areas include:
- **Reports Dashboard**: High-level key performance indicators (KPIs), summary cards, and quick analytical widgets.
- **Sales Analytics**: Deep dive into sales metrics, transaction volume, peak sales hours, and top-performing items.
- **Inventory Reports**: Stock valuation, turnover rates, fast/slow-moving inventory analysis, and low stock reports.
- **Customer Reports**: Customer purchase history, loyalty metrics, lifetime value, and demographic metrics.
- **Revenue Reports**: Gross vs. net revenue analysis, profit margins, discounts, refunds, and cost of goods sold (COGS).
- **Tax Reports**: Breakdown of tax liabilities, tax rates collected, taxable vs. exempt sales for compliance and auditing.
- **Payment Reports**: Distribution across payment methods (Cash, Card, Gift Card, Store Credit) and reconciliation figures.

---

## Component Hierarchy

```text
ReportsPage (Container — sole consumer of useReports)
│
└── ReportsContent (Layout Container)
    ├── ReportsHeader
    ├── ReportsDashboard
    │   └── AnalyticsCards
    │       └── AnalyticsCard
    ├── SalesReports
    │   ├── SalesReportsSummary
    │   ├── SalesReportFilters
    │   └── SalesReportsTable
    │       └── SalesReportRow
    ├── RevenueReports
    │   ├── RevenueReportsSummary
    │   ├── RevenueReportFilters
    │   └── RevenueReportsTable
    │       └── RevenueReportRow
    ├── InventoryReports
    │   ├── InventoryReportsSummary
    │   ├── InventoryReportFilters
    │   └── InventoryReportsTable
    │       └── InventoryReportRow
    ├── CustomerReports
    │   ├── CustomerReportsSummary
    │   ├── CustomerReportFilters
    │   └── CustomerReportsTable
    │       └── CustomerReportRow
    ├── PaymentReports
    │   ├── PaymentReportsSummary
    │   ├── PaymentReportFilters
    │   └── PaymentReportsTable
    │       └── PaymentReportRow
    └── TaxReports
        ├── TaxReportsSummary
        ├── TaxReportFilters
        └── TaxReportsTable
            └── TaxReportRow
```

---

## Data Flow & Architecture

```text
reportsData.ts (Static Mock Datasets)
       ↓
ReportsService (Async Data Layer — Promise.resolve)
       ↓
useReports() (React State / Custom Hook — mounted guard)
       ↓
ReportsPage (Container Component — ONLY component invoking useReports)
       ↓
ReportsContent (Layout Container)
       ↓
Presentational Components (Props-only data flow)
```

---

## Folder Structure

```text
src/renderer/src/features/reports/
├── README.md
├── components/
│   ├── AnalyticsCard.tsx
│   ├── AnalyticsCards.tsx
│   ├── CustomerReportFilters.tsx
│   ├── CustomerReportRow.tsx
│   ├── CustomerReports.tsx
│   ├── CustomerReportsSummary.tsx
│   ├── CustomerReportsTable.tsx
│   ├── InventoryReportFilters.tsx
│   ├── InventoryReportRow.tsx
│   ├── InventoryReports.tsx
│   ├── InventoryReportsSummary.tsx
│   ├── InventoryReportsTable.tsx
│   ├── PaymentReportFilters.tsx
│   ├── PaymentReportRow.tsx
│   ├── PaymentReports.tsx
│   ├── PaymentReportsSummary.tsx
│   ├── PaymentReportsTable.tsx
│   ├── README.md
│   ├── ReportsContent.tsx
│   ├── ReportsDashboard.tsx
│   ├── ReportsHeader.tsx
│   ├── ReportsPage.tsx
│   ├── RevenueReportFilters.tsx
│   ├── RevenueReportRow.tsx
│   ├── RevenueReports.tsx
│   ├── RevenueReportsSummary.tsx
│   ├── RevenueReportsTable.tsx
│   ├── SalesReportFilters.tsx
│   ├── SalesReportRow.tsx
│   ├── SalesReports.tsx
│   ├── SalesReportsSummary.tsx
│   ├── SalesReportsTable.tsx
│   ├── TaxReportFilters.tsx
│   ├── TaxReportRow.tsx
│   ├── TaxReports.tsx
│   ├── TaxReportsSummary.tsx
│   └── TaxReportsTable.tsx
├── constants/
│   ├── README.md
│   └── index.ts
├── data/
│   ├── README.md
│   └── reportsData.ts
├── hooks/
│   ├── README.md
│   └── useReports.ts
├── services/
│   ├── README.md
│   └── ReportsService.ts
├── types/
│   ├── README.md
│   └── index.ts
└── utils/
    └── README.md
```

---

## Future Integrations & Architecture Roadmap

- **Future Export System**: Modular export manager supporting multi-format generation (PDF, CSV, Excel).
- **Future PDF Reports**: Client-side & server-side PDF document rendering for formal printouts.
- **Future Excel Export**: Native binary spreadsheet generation (.xlsx) with styled sheets and formatting.
- **Future Printing**: Direct integration with thermal receipt printers and standard paper sizes via Electron printer drivers.
- **Future Charts**: Canvas & SVG-based charting engine (e.g. Chart.js / Recharts) with animated tooltips and legends.
- **Future Date Filters**: Granular date filtering (Today, Yesterday, Last 7 Days, Month-to-Date, Year-to-Date, Custom Ranges).
- **Future SQLite Integration**: High-performance local SQL aggregation queries for offline reporting.
- **Future Electron IPC**: IPC bridge between renderer reporting engine and main process file system & printer hardware.
- **Future Backend APIs**: Synchronization layer with cloud backoffice analytics engines.

---

## Development Rules

1. **Clean Architecture**: `ReportsPage` is the sole consumer of `useReports()`.
2. **Prop-Driven Presentational UI**: All presentational components receive data strictly via props; no direct import of `reportsData.ts` or `ReportsService`.
3. **Performance**: `React.memo` and `displayName` applied to all presentational components.
4. **Shared UI Components Only**: Standard UI elements utilize shared components (`Card`, `Badge`, `Button`, `Divider`, `Input`, `Spinner`, `EmptyState`).
