# data/

## Purpose

This folder holds **temporary dummy / mock receipt data** used for development, UI previewing, and component testing before live transaction data is wired in.

Mock data here allows the `ReceiptPreview` and related components to be developed and tested in isolation, without requiring a completed sales transaction from the Zustand store.

---

## Planned Mock Data Files

### `mockReceipt.ts` (future)

A hardcoded `ReceiptData` object that mirrors a realistic completed transaction.

**Example structure:**

```ts
// data/mockReceipt.ts (future)
export const mockReceiptData: ReceiptData = {
  metadata: {
    receiptNumber: 'RCP-2026-000001',
    transactionId: 'TXN-ABC123',
    timestamp: '2026-08-01T17:00:00+05:30',
    cashierName: 'Divya',
    cashierId: 'USR-001',
    terminalId: 'TILL-01',
    storeName: 'InfyPOS Store',
    storeAddress: '123 Main Street, Bangalore, KA 560001',
    storePhone: '+91 98765 43210',
    paymentMethod: 'cash',
  },
  items: [
    {
      id: 'PROD-001',
      name: 'Organic Milk 1L',
      quantity: 2,
      unitPrice: 65.00,
      discountAmount: 0,
      lineTotal: 130.00,
      taxRate: 0.05,
      taxAmount: 6.50,
      sku: 'MLK-ORG-1L',
    },
    {
      id: 'PROD-002',
      name: 'Whole Wheat Bread',
      quantity: 1,
      unitPrice: 45.00,
      discountAmount: 5.00,
      lineTotal: 40.00,
      taxRate: 0.05,
      taxAmount: 2.00,
      sku: 'BRD-WW-400G',
    },
  ],
  totals: {
    subtotal: 170.00,
    taxBreakdown: [{ label: 'GST 5%', rate: 0.05, amount: 8.50 }],
    totalTax: 8.50,
    discount: 5.00,
    rounding: 0.00,
    grandTotal: 178.50,
    amountTendered: 200.00,
    changeDue: 21.50,
  },
};
```

---

## Usage Scope

- **Development only** — mock data should never be loaded in a production build.
- Will be replaced by live data from `useReceipt()` once the hook is implemented.
- May be referenced in Storybook stories or component unit tests.

---

## Lifecycle

| Phase      | Data Source                              |
|------------|------------------------------------------|
| Day 9–10   | `mockReceipt.ts` (this folder)           |
| Day 11+    | `useReceipt()` hook → Sales Zustand store |
| Production | Live completed transaction from POS flow |

---

> **Day 9 – Step 1.** No data files exist yet. This folder is a placeholder created during the architecture scaffolding phase.
