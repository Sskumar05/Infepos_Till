# components/

## Purpose

This folder will house all **presentational UI components** for the Receipt module.

Components here are **pure display components** — they receive props and render JSX. They contain **no business logic**, no data fetching, and no side effects.

---

## Planned Components

| Component        | File (future)               | Responsibility                                                   |
|------------------|-----------------------------|------------------------------------------------------------------|
| `ReceiptPage`    | `ReceiptPage.tsx`           | Top-level page shell; composes preview + print actions           |
| `ReceiptPreview` | `ReceiptPreview.tsx`        | Scrollable / printable receipt wrapper                           |
| `ReceiptHeader`  | `ReceiptHeader.tsx`         | Store name, logo, address, cashier, date, time, terminal ID      |
| `ReceiptBody`    | `ReceiptBody.tsx`           | Layout container for items + totals sections                     |
| `ReceiptItems`   | `ReceiptItems.tsx`          | Maps over `ReceiptItem[]` and renders each line item             |
| `ReceiptTotals`  | `ReceiptTotals.tsx`         | Subtotal, tax, discounts, grand total rows                       |
| `ReceiptFooter`  | `ReceiptFooter.tsx`         | Configurable footer copy, barcode, QR code, social media links   |
| `PrintActions`   | `PrintActions.tsx`          | Thermal print / PDF export / email / reprint / cancel buttons    |

---

## Rules

- **No business logic** — all data must come via props or the `useReceipt` hook.
- **No direct store access** inside components (use hooks as the intermediary).
- **No API calls** inside components.
- Each component should be independently testable with mock props.
- Styles will be defined in a co-located `.css` module (future step).

---

> **Day 9 – Step 1.** No component files exist yet. This folder is a placeholder created during the architecture scaffolding phase.
