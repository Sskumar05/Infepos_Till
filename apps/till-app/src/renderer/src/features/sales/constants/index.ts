import { PaymentMethod, SaleStatus, DiscountType, ReceiptInfo } from '../types';

export const PAYMENT_METHODS: Record<string, PaymentMethod> = {
  CASH: 'CASH',
  CARD: 'CARD',
  GIFT_CARD: 'GIFT_CARD',
  MOBILE_PAY: 'MOBILE_PAY',
};

export const SALE_STATUS: Record<string, SaleStatus> = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  REFUNDED: 'REFUNDED',
};

export const DISCOUNT_TYPES: Record<string, DiscountType> = {
  PERCENTAGE: 'PERCENTAGE',
  FIXED_AMOUNT: 'FIXED_AMOUNT',
  NONE: 'NONE',
};

// Dummy tax rate for UI purposes (e.g., 20%)
export const TAX_RATE = 0.20;

export const RECEIPT_SETTINGS: ReceiptInfo = {
  storeName: 'INFYPOS Superstore',
  address: '123 High Street, London, UK',
  phone: '+44 20 7946 0958',
  taxId: 'GB123456789',
  footerMessage: 'Thank you for your purchase! Please keep this receipt for your records.',
};

export const CURRENCY_SYMBOL = '£';
