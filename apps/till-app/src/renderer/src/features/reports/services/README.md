# Reports Module — Services Architecture

## Purpose

The `services/` directory contains asynchronous service layers responsible for fetching, aggregating, exporting, and processing report data. Services abstract data fetching mechanisms away from UI components and hooks.

---

## Planned Services

- **`ReportsService`**: Core reporting data access service responsible for fetching sales, inventory, revenue, tax, and customer report data.
- **`AnalyticsService`**: Business logic service for calculating growth percentages, period-over-period trends, peak sales hours, and profit margins.
- **`ExportService`**: Orchestrator service for data export requests (CSV generation, file downloads).
- **`PdfService`**: Client-side / main process document generation service for formatted PDF reports.
- **`ExcelService`**: Binary Excel spreadsheet generation service (.xlsx) with custom formatting and multiple worksheets.
- **`PrintService`**: Print manager handling thermal receipt printer formatting and standard system printer jobs via Electron main process IPC.

---

## Architecture & Integration Roadmap

- **Future SQLite Integration**: Replace mock asynchronous returns with optimized SQL aggregation queries executed via local SQLite database connection.
- **Future Electron IPC Bridge**: Offload heavy computational analytics, file writing, and hardware printer integration to Electron main process via safe IPC calls.
- **Future REST APIs**: Synchronize local till report metrics with cloud management backoffice REST endpoints when online.

---

## Development Rules

1. **Async Interfaces**: All service methods must return promises (`Promise<T>`) to prepare for asynchronous IPC and DB querying.
2. **Stateless Operations**: Services must be pure and stateless. State must remain within React hooks or Zustand stores.
3. **Error Handling**: Standardize error handling and wrap failures in descriptive result objects or thrown domain errors.
4. **No Direct Component Calls**: Components must never invoke services directly. Access services exclusively through custom hooks (`useReports`).
