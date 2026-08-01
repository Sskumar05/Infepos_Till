/**
 * Receipt Module — Type Definitions
 *
 * All domain types for the Receipt feature live here.
 * No business logic; no imports from React or external packages.
 *
 * Day 9 – Step 7: Added StoreInfo; embedded into ReceiptData so
 * no component ever imports receiptData.ts directly.
 */

// ── Payment Method ─────────────────────────────────────────────────────────────
export type PaymentMethod = 'CASH' | 'CARD' | 'GIFT_CARD' | 'MOBILE_PAY';

// ── Print Status ───────────────────────────────────────────────────────────────
export type PrintStatus = 'READY' | 'PRINTING' | 'SUCCESS' | 'FAILED';

// ── Paper Size ─────────────────────────────────────────────────────────────────
export type PaperSize = '58mm' | '80mm' | 'A4';

// ── ReceiptItem ────────────────────────────────────────────────────────────────
/**
 * A single line item on a receipt.
 */
export interface ReceiptItem {
  /** Unique cart-item identifier */
  id: string;
  /** Reference to the source product */
  productId: string;
  /** Display name of the product */
  name: string;
  /** Stock-keeping unit code */
  sku: string;
  /** Number of units sold */
  quantity: number;
  /** Price per individual unit (pre-discount) */
  unitPrice: number;
  /** Line total: quantity × unitPrice, after discounts */
  totalPrice: number;
}

// ── ReceiptTotals ──────────────────────────────────────────────────────────────
/**
 * Financial summary for a receipt.
 */
export interface ReceiptTotals {
  /** Sum of all line totals before tax */
  subtotal: number;
  /** Total tax applied across all items */
  tax: number;
  /** Total discount applied at order level */
  discount: number;
  /** Final amount the customer pays */
  grandTotal: number;
}

// ── ReceiptMetadata ────────────────────────────────────────────────────────────
/**
 * Contextual information about the transaction.
 */
export interface ReceiptMetadata {
  /** Human-readable receipt number (e.g. RCP-2026-000001) */
  receiptNumber: string;
  /** Internal POS transaction identifier */
  transactionId: string;
  /** Name of the cashier who processed the sale */
  cashierName: string;
  /** Name of the customer (or 'Walk-in Customer' if anonymous) */
  customerName: string;
  /** Payment method used */
  paymentMethod: PaymentMethod;
  /** ISO 8601 timestamp of the transaction */
  createdAt: string;
}

// ── ReceiptSettings ────────────────────────────────────────────────────────────
/**
 * Output configuration for receipt generation and printing.
 */
export interface ReceiptSettings {
  /** Target paper size for thermal or document print */
  paperSize: PaperSize;
  /** ISO 4217 currency code (e.g. 'GBP', 'INR') */
  currency: string;
  /** Whether to include the store logo on the receipt */
  showLogo: boolean;
  /** Whether to show the tax breakdown section */
  showTax: boolean;
  /** Whether to include the footer message */
  showFooter: boolean;
}

// ── StoreInfo ──────────────────────────────────────────────────────────────────
/**
 * Static store information embedded in every ReceiptData object.
 * Flows top-down through props; no component imports it directly.
 */
export interface StoreInfo {
  name: string;
  address: string;
  phone: string;
  email?: string;
  taxId?: string;
  footerMessage?: string;
}

// ── ReceiptData ────────────────────────────────────────────────────────────────
/**
 * Complete receipt object passed to the UI and print services.
 */
export interface ReceiptData {
  storeInfo: StoreInfo;
  metadata: ReceiptMetadata;
  items: ReceiptItem[];
  totals: ReceiptTotals;
  settings: ReceiptSettings;
}
