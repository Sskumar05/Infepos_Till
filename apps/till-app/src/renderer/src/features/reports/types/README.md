# Reports Module — Types Architecture

## Purpose

The `types/` directory defines all TypeScript interfaces, types, and enums for the Reports & Analytics module. It establishes strong typing across data models, report summaries, filters, charting parameters, and export settings.

---

## Planned Interfaces & Types

### 1. Core Report Data Interfaces

- **`ReportSummary`**: Overall KPI metric summary (Total Revenue, Net Sales, Order Count, Average Order Value, Total Taxes, Profit Margin).
- **`SalesReport`**: Detailed sales breakdown containing time-series data, top selling products, sales by category, and peak hours.
- **`RevenueReport`**: Financial accounting metrics including gross revenue, net revenue, discounts, returns, refunds, and cost of goods sold (COGS).
- **`InventoryReport`**: Inventory analytics model covering total stock valuation, low stock counts, fast-moving items, and shrinkage metrics.
- **`CustomerReport`**: Customer analytics model including active customer count, new vs. returning ratio, top spenders, and loyalty points issued.
- **`TaxReport`**: Tax auditing model detailing taxable sales, tax-exempt sales, tax breakdown by tax rate category, and net tax collected.
- **`PaymentReport`**: Payment reconciliation breakdown by method (Cash, Card, Gift Card, Store Credit) and register drawer counts.

### 2. Visualization & Filter Interfaces

- **`ChartData`**: Standardized data structure for line, bar, pie, and donut chart visual components (labels, datasets, values, legend titles).
- **`DateRange`**: Date range model specifying start date, end date, preset period label, and comparison period parameters.
- **`ReportFilter`**: Composite filter criteria object (DateRange, selected report type, categories, cashier ID, register ID, payment methods).

### 3. Output & Export Interfaces

- **`ExportFormat`**: Supported file export formats (`'pdf' | 'csv' | 'xlsx' | 'json'`).
- **`PrintSettings`**: Printer layout configuration (paper size, orientation, margins, show header/footer, printer name).

---

## Documented Responsibilities

- Guarantee compile-time type safety across data layers, services, custom hooks, and presentational components.
- Standardize data structures exchanged between renderer components, Electron main process IPC bridges, and future backend APIs.
- Provide clear contracts for chart presentation data and document export handlers.
