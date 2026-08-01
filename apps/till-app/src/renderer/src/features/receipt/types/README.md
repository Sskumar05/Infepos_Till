# types/

## Purpose

This folder contains all **TypeScript interface and type definitions** for the Receipt module.

All data shapes consumed by components, hooks, and services are declared here to ensure a single source of truth for the Receipt domain model.

---

## Planned Types

### `ReceiptItem`

Represents a single line item on the receipt.

```ts
// Future — types/index.ts
interface ReceiptItem {
  id: string;               // Product / SKU identifier
  name: string;             // Display name
  quantity: number;         // Units sold
  unitPrice: number;        // Price per unit (pre-discount)
  discountAmount: number;   // Per-item discount applied
  lineTotal: number;        // (unitPrice * quantity) - discountAmount
  taxRate: number;          // Tax rate applied to this line (e.g. 0.18 for 18%)
  taxAmount: number;        // Calculated tax for this line
  sku?: string;             // Optional stock-keeping unit code
  barcode?: string;         // Optional barcode / EAN-13
}
```

---

### `ReceiptTotals`

Aggregated financial summary of the transaction.

```ts
// Future — types/index.ts
interface ReceiptTotals {
  subtotal: number;         // Sum of all lineTotals before tax
  taxBreakdown: {           // Per-rate tax summary (e.g. GST 5%, GST 18%)
    label: string;
    rate: number;
    amount: number;
  }[];
  totalTax: number;         // Sum of all tax amounts
  discount: number;         // Total discount applied at order level
  rounding: number;         // Cash rounding adjustment (±)
  grandTotal: number;       // Final amount customer pays
  amountTendered: number;   // Cash / card amount given
  changeDue: number;        // Change returned to customer
}
```

---

### `ReceiptMetadata`

Contextual information about the transaction and store.

```ts
// Future — types/index.ts
interface ReceiptMetadata {
  receiptNumber: string;    // Unique receipt / invoice number
  transactionId: string;    // Internal POS transaction ID
  timestamp: string;        // ISO 8601 date-time of transaction
  cashierName: string;      // Name of the cashier who processed the sale
  cashierId: string;        // Cashier user ID
  terminalId: string;       // POS terminal identifier
  storeName: string;        // Trading name of the store
  storeAddress: string;     // Physical address
  storePhone?: string;      // Optional contact number
  storeEmail?: string;      // Optional email
  storeLogo?: string;       // Optional base64 / URL logo
  paymentMethod: 'cash' | 'card' | 'split' | 'voucher';
}
```

---

### `PrintSettings`

Configuration object for the receipt output target.

```ts
// Future — types/index.ts
interface PrintSettings {
  paperSize: 'thermal_58mm' | 'thermal_80mm' | 'a4' | 'a5';
  printerName?: string;     // OS printer name (undefined = default)
  copies: number;           // Number of copies to print
  openCashDrawer: boolean;  // Trigger cash drawer open on print
  printLogo: boolean;       // Include store logo on thermal receipt
  printBarcode: boolean;    // Print barcode / QR at receipt footer
  outputFormat: 'print' | 'pdf' | 'email' | 'preview';
}
```

---

## Usage Pattern (Future)

Types will be exported from a single barrel file:

```ts
// types/index.ts (future)
export type { ReceiptItem, ReceiptTotals, ReceiptMetadata, PrintSettings };
```

---

> **Day 9 – Step 1.** No `.ts` type files exist yet. This folder is a placeholder created during the architecture scaffolding phase.
