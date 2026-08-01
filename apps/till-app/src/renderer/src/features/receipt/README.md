# Receipt Module

## Module Overview

The Receipt module handles the full lifecycle of receipt generation, display, and output for the InfyPOS till application. It bridges the Sales workflow with physical and digital receipt delivery mechanisms, providing a clean abstraction over multiple output targets (thermal printer, PDF, email).

This module implements the **Day 9 Architecture**, which includes a fully structured data layer, a hook-based state management layer, and a complete suite of React presentational components. The UI is completely decoupled from business logic and hardware integration, which will be implemented in future phases.

---

## Final Component Hierarchy

```
ReceiptPage (Container, calls useReceipt)
│
├── ReceiptContent
│   ├── ReceiptPreview (Presentational)
│   │   ├── ReceiptItems
│   │   │   ├── ReceiptItemsSection
│   │   │   │   ├── ReceiptItemsHeader
│   │   │   │   ├── ReceiptItemRow (mapped)
│   │   │   │   └── ReceiptItemsFooter
│   │   └── ReceiptTotals
│   │       ├── ReceiptTotalsSection
│   │       │   ├── ReceiptTotalsRow (mapped)
│   │       │   ├── ReceiptGrandTotal
│   │       │   └── ReceiptFooter
│   │
│   └── ReceiptContainer (Layout wrapper)
│
└── PrintActions
    ├── PrintButton
    ├── ExportPdfButton
    ├── EmailReceiptButton
    └── ReceiptOptionsPanel
```

**Note:** All presentational components (everything below `ReceiptPage`) are wrapped in `React.memo` to prevent unnecessary re-renders.

---

## Data Flow & Architecture

The Receipt Module strictly follows Clean Architecture principles:

1. **Data Source:** Static dummy data (`DUMMY_RECEIPT_DATA`) provides the initial state. Store configuration (`storeInfo`) is embedded in the data object.
2. **Service Layer:** `ReceiptService` exposes methods (`getReceipt`, `printReceipt`, etc.) that currently return `Promise.resolve()`. It acts as the future integration point for SQLite, Electron IPC, and APIs.
3. **Hook Layer:** `useReceipt` consumes `ReceiptService`, managing `receipt`, `isLoading`, and `error` state.
4. **Container Layer:** `ReceiptPage` is the *only* component allowed to call `useReceipt`. It handles loading and error UI states.
5. **Presentational Layer:** All UI components (`ReceiptContent`, `ReceiptPreview`, etc.) receive data exclusively via props. No component imports services or data files directly.

```
receiptData.ts (DUMMY_RECEIPT_DATA)
     │
     ▼
ReceiptService.getReceipt()   [Promise.resolve]
     │
     ▼
useReceipt()                  [State: receipt, isLoading, error]
     │
     ▼
ReceiptPage                   [ONLY hook caller]
     │
     ▼
ReceiptContent → ReceiptPreview → ReceiptItems / ReceiptTotals
```

---

## Future Integrations & Roadmap

| Feature                  | Description                                                              | Status      |
|--------------------------|--------------------------------------------------------------------------|-------------|
| **Thermal Printer**      | ESC/POS command generation; direct USB/serial/network thermal printing.  | Planned     |
| **PDF Export**           | Generate downloadable / saveable PDF receipt via Electron.               | Planned     |
| **Email Receipt**        | Send digital receipt to customer email via SMTP or third-party service.  | Planned     |
| **SQLite Integration**   | Persist completed receipts in local transaction history table.           | Planned     |
| **Transaction History**  | View, search, and reprint past receipts from the database.               | Planned     |
| **Electron IPC**         | Bridging the renderer process to main process hardware services.         | Planned     |
| **Print Queue**          | Manage multiple pending print jobs; auto-retry on failure.               | Planned     |

---

## Final Folder Structure

```
features/receipt/
├── README.md
├── components/          ← All React components (UI only)
│   ├── EmailReceiptButton.tsx
│   ├── ExportPdfButton.tsx
│   ├── PrintActions.tsx
│   ├── PrintButton.tsx
│   ├── ReceiptContainer.tsx
│   ├── ReceiptContent.tsx
│   ├── ReceiptFooter.tsx
│   ├── ReceiptGrandTotal.tsx
│   ├── ReceiptItemRow.tsx
│   ├── ReceiptItems.tsx
│   ├── ReceiptItemsFooter.tsx
│   ├── ReceiptItemsHeader.tsx
│   ├── ReceiptItemsSection.tsx
│   ├── ReceiptOptionsPanel.tsx
│   ├── ReceiptPage.tsx
│   ├── ReceiptPreview.tsx
│   ├── ReceiptTotals.tsx
│   ├── ReceiptTotalsRow.tsx
│   └── ReceiptTotalsSection.tsx
├── constants/           ← Immutable configuration constants
│   └── index.ts
├── data/                ← Dummy data source
│   └── receiptData.ts
├── hooks/               ← Custom React hooks
│   └── useReceipt.ts
├── services/            ← Business logic and external integrations
│   └── ReceiptService.ts
├── types/               ← TypeScript interfaces and types
│   └── index.ts
└── utils/               ← Helper functions (currently empty)
    └── README.md
```

---

## Development Rules

1. **No UI in Hooks/Services:** Hooks and services must not return JSX.
2. **No Business Logic in UI:** Components must only render data passed via props.
3. **Single Source of Truth:** `ReceiptPage` is the sole consumer of `useReceipt`. No other component may call it.
4. **Prop Drilling Only:** `ReceiptData` and its subsets (`items`, `totals`, `metadata`) flow down. Do not import `receiptData.ts` into components.
5. **Memoization:** All presentational components must be wrapped in `React.memo()`.
6. **No Side Effects:** Components must not fetch data or interact with Electron/SQLite directly. Always delegate to `ReceiptService`.

---

> **Day 9 Completed.** The Receipt Module architecture is fully implemented, isolated, and type-safe. It is ready for business logic and hardware integration in future phases.
