# services/

## Purpose

This folder contains the **business logic and I/O abstraction layer** for the Receipt module.

Services are responsible for:
- Building a complete `ReceiptData` object from raw Sales Store state.
- Communicating with hardware (thermal printer) via Electron IPC.
- Generating PDF output via the Electron main process.
- Sending email receipts through external APIs.

Services are **not React components** — they are plain TypeScript modules with no JSX.

---

## Planned Services

### `receiptService` — `receiptService.ts` (future)

Core service that assembles receipt data from a completed transaction.

**Responsibilities:**
- Accept a raw sales transaction snapshot from the Sales Zustand store.
- Apply tax calculation rules per line item.
- Calculate totals, rounding, and change due.
- Attach store metadata (name, address, cashier, terminal, timestamp).
- Return a fully-formed `ReceiptData` object ready for rendering or printing.

```ts
// Future signature
function buildReceipt(transaction: SalesTransaction, settings: PrintSettings): ReceiptData
```

---

### `thermalPrinterAdapter` — `thermalPrinterAdapter.ts` (future)

Adapter that converts a `ReceiptData` object into **ESC/POS commands** for thermal receipt printers.

**Responsibilities:**
- Format text, alignment, bold, and dividers as ESC/POS byte sequences.
- Send the byte buffer to the printer via Electron IPC (`ipcRenderer.invoke`).
- Handle printer connection errors and report status back to the hook.
- Support 58mm and 80mm paper widths.

---

### `pdfExportService` — `pdfExportService.ts` (future)

Service that generates a PDF representation of the receipt.

**Responsibilities:**
- Invoke Electron's `webContents.printToPDF()` or a headless rendering pipeline.
- Save the PDF to the local filesystem or trigger a download dialog.
- Return a file path or blob URL for preview.

---

### `emailReceiptService` — `emailReceiptService.ts` (future)

Service that sends a digital receipt copy to the customer's email address.

**Responsibilities:**
- Accept a customer email and a receipt PDF buffer or HTML string.
- Call a configured SMTP service or third-party email API (e.g., SendGrid, Mailgun).
- Return a delivery status (`sent` | `failed` | `queued`).

---

## Print Abstraction

All output targets share a common `PrintAdapter` interface, allowing the `useReceipt` hook to call a single `print()` method regardless of the underlying output format:

```ts
// Future interface
interface PrintAdapter {
  print(data: ReceiptData, settings: PrintSettings): Promise<PrintResult>;
}
```

Concrete implementations:
- `ThermalPrintAdapter implements PrintAdapter`
- `PdfPrintAdapter implements PrintAdapter`
- `EmailPrintAdapter implements PrintAdapter`

---

> **Day 9 – Step 1.** No service files exist yet. This folder is a placeholder created during the architecture scaffolding phase.
