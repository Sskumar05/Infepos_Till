/**
 * Receipt Module — ReceiptService
 *
 * Async placeholder service for all receipt operations.
 * Every method resolves immediately from dummy data.
 *
 * No printing. No API calls. No SQLite. No Electron IPC.
 * These are stub implementations to be replaced in a future step.
 *
 * Day 9 – Step 2
 */

import type { ReceiptData } from '../types';
import { DUMMY_RECEIPT_DATA } from '../data/receiptData';

export class ReceiptService {
  /**
   * Returns the most recent receipt (dummy: always returns DUMMY_RECEIPT_DATA).
   * Future: will fetch from SQLite transaction history.
   */
  static async getReceipt(): Promise<ReceiptData> {
    return Promise.resolve(DUMMY_RECEIPT_DATA);
  }

  /**
   * Returns a receipt matching the supplied transaction/receipt ID.
   * Future: will query SQLite by `transactionId` or `receiptNumber`.
   *
   * @param id - Transaction ID or receipt number to look up.
   */
  static async getReceiptById(id: string): Promise<ReceiptData | null> {
    if (!id) return Promise.resolve(null);
    // Stub: return dummy data regardless of ID
    return Promise.resolve({ ...DUMMY_RECEIPT_DATA });
  }

  /**
   * Assembles a ReceiptData object from a raw sales transaction.
   * Future: will call receiptUtils to calculate totals and apply tax rules.
   *
   * @param transactionId - The source transaction ID to generate a receipt for.
   */
  static async generateReceipt(transactionId: string): Promise<ReceiptData> {
    if (!transactionId) {
      return Promise.reject(new Error('generateReceipt: transactionId is required.'));
    }
    return Promise.resolve({
      ...DUMMY_RECEIPT_DATA,
      metadata: {
        ...DUMMY_RECEIPT_DATA.metadata,
        transactionId,
        createdAt: new Date().toISOString(),
      },
    });
  }

  /**
   * Sends the receipt to the configured thermal printer.
   * Future: will invoke Electron IPC to dispatch ESC/POS commands.
   *
   * @param receipt - The ReceiptData to print.
   */
  static async printReceipt(receipt: ReceiptData): Promise<void> {
    if (!receipt) {
      return Promise.reject(new Error('printReceipt: receipt data is required.'));
    }
    // Stub: no-op placeholder
    return Promise.resolve();
  }

  /**
   * Exports the receipt as a PDF file.
   * Future: will invoke Electron's webContents.printToPDF() pipeline.
   *
   * @param receipt - The ReceiptData to export.
   */
  static async exportPdf(receipt: ReceiptData): Promise<void> {
    if (!receipt) {
      return Promise.reject(new Error('exportPdf: receipt data is required.'));
    }
    // Stub: no-op placeholder
    return Promise.resolve();
  }

  /**
   * Sends a digital copy of the receipt to a customer email address.
   * Future: will call an SMTP service or third-party email API.
   *
   * @param receipt - The ReceiptData to send.
   * @param email   - The customer's email address.
   */
  static async emailReceipt(receipt: ReceiptData, email: string): Promise<void> {
    if (!receipt) {
      return Promise.reject(new Error('emailReceipt: receipt data is required.'));
    }
    if (!email) {
      return Promise.reject(new Error('emailReceipt: email address is required.'));
    }
    // Stub: no-op placeholder
    return Promise.resolve();
  }
}
