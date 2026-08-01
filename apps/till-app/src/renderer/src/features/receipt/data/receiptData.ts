/**
 * Receipt Module — Dummy Receipt Data
 *
 * A single, complete, static receipt used for UI development and testing.
 * All values are hardcoded — no calculations, no API calls, no side effects.
 *
 * Day 9 – Step 7: storeInfo is now embedded inside DUMMY_RECEIPT_DATA so it
 * flows through the ReceiptData prop chain. No component should import this
 * file or STORE_INFO directly.
 */

import type { ReceiptData } from '../types';
import { DEFAULT_RECEIPT_SETTINGS, STORE_INFO } from '../constants';

export const DUMMY_RECEIPT_DATA: ReceiptData = {
  // ── Store Info ─────────────────────────────────────────────────────────────
  // Embedded here so every ReceiptData object carries store details through props.
  storeInfo: {
    name: STORE_INFO.name,
    address: STORE_INFO.address,
    phone: STORE_INFO.phone,
    email: STORE_INFO.email,
    taxId: STORE_INFO.taxId,
    footerMessage: STORE_INFO.footerMessage,
  },

  // ── Metadata ───────────────────────────────────────────────────────────────
  metadata: {
    receiptNumber: 'RCP-2026-000042',
    transactionId: 'TXN-B7F3A9C1',
    cashierName: 'Divya Sharma',
    customerName: 'James Robertson',
    paymentMethod: 'CASH',
    createdAt: '2026-08-01T17:05:30+05:30',
  },

  // ── Line Items ─────────────────────────────────────────────────────────────
  items: [
    {
      id: 'item-001',
      productId: 'prod-12',
      name: 'Organic Full-Fat Milk 2L',
      sku: 'SKU-10012',
      quantity: 2,
      unitPrice: 1.85,
      totalPrice: 3.70,
    },
    {
      id: 'item-002',
      productId: 'prod-7',
      name: 'Wholegrain Sliced Bread 800g',
      sku: 'SKU-10007',
      quantity: 1,
      unitPrice: 1.20,
      totalPrice: 1.20,
    },
    {
      id: 'item-003',
      productId: 'prod-23',
      name: 'Free Range Eggs × 12',
      sku: 'SKU-10023',
      quantity: 1,
      unitPrice: 3.49,
      totalPrice: 3.49,
    },
    {
      id: 'item-004',
      productId: 'prod-5',
      name: 'Pringles Original 200g',
      sku: 'SKU-10005',
      quantity: 3,
      unitPrice: 1.75,
      totalPrice: 5.25,
    },
    {
      id: 'item-005',
      productId: 'prod-18',
      name: 'Orange Juice 1L (No Pulp)',
      sku: 'SKU-10018',
      quantity: 2,
      unitPrice: 2.10,
      totalPrice: 4.20,
    },
    {
      id: 'item-006',
      productId: 'prod-31',
      name: 'Greek Yoghurt 500g',
      sku: 'SKU-10031',
      quantity: 1,
      unitPrice: 2.35,
      totalPrice: 2.35,
    },
  ],

  // ── Totals ─────────────────────────────────────────────────────────────────
  totals: {
    subtotal: 20.19,
    tax: 4.04,
    discount: 1.50,
    grandTotal: 22.73,
  },

  // ── Settings ───────────────────────────────────────────────────────────────
  settings: {
    ...DEFAULT_RECEIPT_SETTINGS,
  },
};
