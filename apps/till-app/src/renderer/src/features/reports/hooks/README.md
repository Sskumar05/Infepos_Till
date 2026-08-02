# Reports Module — Hooks Architecture

## Purpose

The `hooks/` directory houses custom React hooks responsible for managing component state, invoking service methods, applying filter criteria, and controlling UI loading/error states for the Reports module.

---

## Planned Hooks

### `useReports()`

The primary custom hook for the Reports module. It encapsulates all state management and asynchronous data fetching required by the `ReportsPage` container component.

#### Expected Return Object

```typescript
{
  reports: {
    sales: SalesReport | null;
    revenue: RevenueReport | null;
    inventory: InventoryReport | null;
    customers: CustomerReport | null;
    tax: TaxReport | null;
    payment: PaymentReport | null;
  };
  summary: ReportSummary | null;
  filters: ReportFilter;
  charts: {
    salesTrend: ChartData | null;
    revenueBreakdown: ChartData | null;
  };
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  setFilters: (filters: Partial<ReportFilter>) => void;
  exportReport: (format: ExportFormat) => Promise<void>;
  printReport: (settings: PrintSettings) => Promise<void>;
}
```

---

## Future Zustand Migration

In future iterations, global reporting options (such as default date ranges, persistent export preferences, and active store location context) will be migrated to dedicated Zustand store slices. `useReports()` will interface with the store to synchronize global state seamlessly.

---

## Development Rules

1. **Container-Only Consumption**: `useReports()` must only be called inside `ReportsPage`. Child presentational components must receive data and callbacks via props.
2. **Mounted Guard Pattern**: Asynchronous state updates inside hooks must check component mount status to avoid memory leaks.
3. **Immutability**: Always return fresh immutable state references upon filter changes or data updates.
