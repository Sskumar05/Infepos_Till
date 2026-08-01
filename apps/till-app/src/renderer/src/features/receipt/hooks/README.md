# hooks/

## Purpose

This folder contains all **custom React hooks** for the Receipt module.

Hooks act as the bridge between the Receipt services (business logic) and the Receipt UI components. They expose reactive state and event handlers that components can consume cleanly, without needing to know about the underlying data-fetching or print orchestration.

---

## Planned Hook: `useReceipt`

**File:** `useReceipt.ts` (future)

### Responsibility

`useReceipt` is the primary hook for the entire Receipt module. It:

1. **Reads** the latest completed transaction from the **Sales Zustand store**.
2. **Calls** `receiptService.buildReceipt()` to construct a fully-formed `ReceiptData` object.
3. **Manages** async print/export state (`idle` | `printing` | `success` | `error`).
4. **Exposes** action handlers that components can wire to UI buttons.

---

### Future API

```ts
// hooks/useReceipt.ts (future)

interface UseReceiptReturn {
  // Data
  receiptData: ReceiptData | null;    // Fully assembled receipt, or null if no transaction
  isLoading: boolean;                 // True while receipt is being assembled
  error: string | null;               // Error message if build/print failed

  // Print state
  printStatus: 'idle' | 'printing' | 'success' | 'error';

  // Handlers
  handlePrint: () => Promise<void>;        // Send to thermal printer
  handleExportPdf: () => Promise<void>;    // Generate & save PDF
  handleEmailReceipt: (email: string) => Promise<void>;  // Email digital copy
  handleReprint: () => Promise<void>;      // Reprint last receipt
  handleClose: () => void;                 // Navigate away / close receipt view
}

function useReceipt(transactionId?: string): UseReceiptReturn
```

---

### Data Flow Inside the Hook

```
Sales Store (Zustand)
        │
        │  useSelector / useSalesStore
        ▼
useReceipt (this hook)
        │
        ├── receiptService.buildReceipt(transaction)
        │         └── returns ReceiptData
        │
        ├── State: { receiptData, printStatus, error }
        │
        └── Handlers: handlePrint → thermalPrinterAdapter.print()
                      handleExportPdf → pdfExportService.export()
                      handleEmailReceipt → emailReceiptService.send()
```

---

### Error Handling Strategy

- Wrap all async operations in `try/catch`.
- Set `printStatus = 'error'` and populate `error` on failure.
- Log errors to the console (a future logging service may be substituted).
- Do **not** throw unhandled rejections from within the hook.

---

> **Day 9 – Step 1.** No hook files exist yet. This folder is a placeholder created during the architecture scaffolding phase.
