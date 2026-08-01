/**
 * Receipt Module — Constants
 *
 * Immutable application-wide constants for the Receipt feature.
 * No business logic; no imports from React.
 *
 * Day 9 – Step 2
 */

import type { PaperSize, PrintStatus, ReceiptSettings } from '../types';

// ── Paper Sizes ────────────────────────────────────────────────────────────────
export const PAPER_SIZES: Record<string, PaperSize> = {
  THERMAL_58MM: '58mm',
  THERMAL_80MM: '80mm',
  A4: 'A4',
} as const;

/** Character widths per paper size (used for ESC/POS column alignment) */
export const PAPER_CHAR_WIDTHS: Record<PaperSize, number> = {
  '58mm': 32,
  '80mm': 48,
  'A4': 80,
} as const;

// ── Currency ───────────────────────────────────────────────────────────────────
/** ISO 4217 currency code used across the receipt module */
export const DEFAULT_CURRENCY = 'GBP';

/** Currency symbol displayed on formatted amounts */
export const CURRENCY_SYMBOL = '£';

/** Number of decimal places for monetary values */
export const CURRENCY_DECIMAL_PLACES = 2;

// ── Tax ────────────────────────────────────────────────────────────────────────
/** Human-readable label shown next to the tax line on the receipt */
export const DEFAULT_TAX_LABEL = 'VAT (20%)';

/** Default tax rate applied when no product-level rate is specified */
export const DEFAULT_TAX_RATE = 0.20;

// ── Print Status ───────────────────────────────────────────────────────────────
export const PRINT_STATUS: Record<string, PrintStatus> = {
  READY: 'READY',
  PRINTING: 'PRINTING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
} as const;

// ── Default Receipt Settings ───────────────────────────────────────────────────
/**
 * Fallback ReceiptSettings used when no user preference is stored.
 * Applied by ReceiptService when assembling a new ReceiptData object.
 */
export const DEFAULT_RECEIPT_SETTINGS: ReceiptSettings = {
  paperSize: '80mm',
  currency: DEFAULT_CURRENCY,
  showLogo: true,
  showTax: true,
  showFooter: true,
} as const;

// ── Store Info ─────────────────────────────────────────────────────────────────
/** Static store metadata printed on every receipt header */
export const STORE_INFO = {
  name: 'INFYPOS Superstore',
  address: '123 High Street, London, EC1A 1BB, UK',
  phone: '+44 20 7946 0958',
  email: 'store@infypos.co.uk',
  taxId: 'GB123456789',
  footerMessage:
    'Thank you for shopping with us! Please retain this receipt for returns or exchanges within 30 days.',
} as const;
