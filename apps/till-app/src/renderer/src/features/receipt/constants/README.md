# constants/

## Purpose

This folder defines all **application-wide constants** for the Receipt module.

Constants keep magic values out of components, hooks, and services. Every configurable value that might change across deployments (paper size, currency symbol, tax labels, print defaults) lives here.

---

## Planned Constant Files

---

### `paperSizes.ts` (future)

Defines supported thermal and document paper formats.

```ts
// constants/paperSizes.ts (future)
export const PAPER_SIZES = {
  THERMAL_58MM: 'thermal_58mm',    // 58mm wide thermal roll (compact printers)
  THERMAL_80MM: 'thermal_80mm',    // 80mm wide thermal roll (standard POS)
  A4:           'a4',              // ISO A4 for PDF / laser print
  A5:           'a5',              // ISO A5 for compact PDF output
} as const;

export type PaperSize = typeof PAPER_SIZES[keyof typeof PAPER_SIZES];

// Character widths per paper size (for ESC/POS formatting)
export const PAPER_CHAR_WIDTH: Record<PaperSize, number> = {
  thermal_58mm: 32,
  thermal_80mm: 48,
  a4:           80,
  a5:           60,
};
```

---

### `currency.ts` (future)

Currency formatting constants for the Indian market (default) with multi-currency support.

```ts
// constants/currency.ts (future)
export const CURRENCY = {
  DEFAULT_CODE:    'INR',
  DEFAULT_SYMBOL:  '₹',
  DEFAULT_LOCALE:  'en-IN',
  DECIMAL_PLACES:  2,
  THOUSAND_SEP:    ',',
  DECIMAL_SEP:     '.',
} as const;
```

---

### `taxLabels.ts` (future)

Human-readable labels for GST / VAT rate display on the receipt.

```ts
// constants/taxLabels.ts (future)
export const TAX_LABELS: Record<number, string> = {
  0.00: 'Tax Exempt',
  0.05: 'GST 5%',
  0.12: 'GST 12%',
  0.18: 'GST 18%',
  0.28: 'GST 28%',
};

export const DEFAULT_TAX_LABEL = 'Tax';
```

---

### `printDefaults.ts` (future)

Default `PrintSettings` object used as the fallback when no user preference is saved.

```ts
// constants/printDefaults.ts (future)
export const DEFAULT_PRINT_SETTINGS: PrintSettings = {
  paperSize:       'thermal_80mm',
  printerName:     undefined,       // OS default printer
  copies:          1,
  openCashDrawer:  true,
  printLogo:       true,
  printBarcode:    true,
  outputFormat:    'print',
};
```

---

### `receiptLayout.ts` (future)

Layout-level constants for the receipt preview (padding, font sizes, divider characters).

```ts
// constants/receiptLayout.ts (future)
export const RECEIPT_LAYOUT = {
  DIVIDER_CHAR:       '-',
  SECTION_PADDING:    8,         // px
  FONT_SIZE_BODY:     12,        // pt
  FONT_SIZE_HEADER:   14,        // pt
  FONT_SIZE_TOTAL:    16,        // pt
  MAX_PRODUCT_CHARS:  24,        // truncate long product names
} as const;
```

---

## Barrel Export (future)

All constants will be re-exported from a single `index.ts`:

```ts
// constants/index.ts (future)
export * from './paperSizes';
export * from './currency';
export * from './taxLabels';
export * from './printDefaults';
export * from './receiptLayout';
```

---

> **Day 9 – Step 1.** No constant files exist yet. This folder is a placeholder created during the architecture scaffolding phase.
