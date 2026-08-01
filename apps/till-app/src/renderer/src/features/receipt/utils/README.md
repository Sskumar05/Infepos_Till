# utils/

## Purpose

This folder contains **pure utility functions** for the Receipt module — small, reusable helpers that format, transform, or compute values with no side effects and no React dependencies.

All utility functions must be:
- **Pure** — same input always produces the same output.
- **Independently testable** — no imports from React, Zustand, or Electron.
- **Side-effect free** — no I/O, no DOM access, no network calls.

---

## Planned Utility Files

---

### `currencyUtils.ts` (future)

Formatting helpers for monetary values.

```ts
// utils/currencyUtils.ts (future)

/**
 * Format a number as a localised currency string.
 * @example formatCurrency(1234.5) → '₹1,234.50'
 */
function formatCurrency(amount: number, currencyCode?: string): string

/**
 * Round a number to 2 decimal places (banker's rounding).
 */
function roundCurrency(amount: number): number

/**
 * Calculate cash rounding adjustment (nearest 0.50 or 1.00).
 */
function calculateRounding(grandTotal: number): number
```

---

### `dateUtils.ts` (future)

Date and time formatting for receipt headers and transaction logs.

```ts
// utils/dateUtils.ts (future)

/**
 * Format a date for the receipt header.
 * @example formatReceiptDate('2026-08-01T17:00:00') → '01 Aug 2026'
 */
function formatReceiptDate(isoString: string): string

/**
 * Format a time for the receipt header.
 * @example formatReceiptTime('2026-08-01T17:05:30') → '05:05 PM'
 */
function formatReceiptTime(isoString: string): string

/**
 * Format a full date-time for transaction history display.
 * @example formatDateTime('2026-08-01T17:05:30') → '01 Aug 2026, 05:05 PM'
 */
function formatDateTime(isoString: string): string
```

---

### `receiptFormatUtils.ts` (future)

Formatting utilities specific to receipt layout — particularly for ESC/POS text alignment.

```ts
// utils/receiptFormatUtils.ts (future)

/**
 * Left-pad or right-pad a string to a fixed width.
 * Used to align columns on thermal receipt paper.
 * @example padEnd('Milk', 24) → 'Milk                    '
 */
function padEnd(text: string, width: number): string
function padStart(text: string, width: number): string

/**
 * Split a long product name across multiple receipt lines
 * respecting the paper character width limit.
 */
function wrapProductName(name: string, maxChars: number): string[]

/**
 * Generate a divider line of a fixed character repeated N times.
 * @example dividerLine('-', 32) → '--------------------------------'
 */
function dividerLine(char: string, width: number): string

/**
 * Truncate a string to maxLength and append '…' if truncated.
 */
function truncate(text: string, maxLength: number): string

/**
 * Format a two-column receipt row (label left, value right).
 * @example receiptRow('Subtotal', '₹170.00', 32) → 'Subtotal         ₹170.00'
 */
function receiptRow(label: string, value: string, lineWidth: number): string
```

---

## Barrel Export (future)

```ts
// utils/index.ts (future)
export * from './currencyUtils';
export * from './dateUtils';
export * from './receiptFormatUtils';
```

---

## Testing Strategy (future)

Because all utilities are pure functions, they are straightforward to unit-test:

```ts
// utils/__tests__/currencyUtils.test.ts (future)
describe('formatCurrency', () => {
  it('formats INR correctly', () => {
    expect(formatCurrency(1234.5)).toBe('₹1,234.50');
  });
});
```

---

> **Day 9 – Step 1.** No utility files exist yet. This folder is a placeholder created during the architecture scaffolding phase.
