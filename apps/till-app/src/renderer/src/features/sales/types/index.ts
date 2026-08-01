export type PaymentMethod = 'CASH' | 'CARD' | 'GIFT_CARD' | 'MOBILE_PAY';
export type SaleStatus = 'PENDING' | 'COMPLETED' | 'CANCELLED' | 'REFUNDED';
export type DiscountType = 'PERCENTAGE' | 'FIXED_AMOUNT' | 'NONE';

export interface Product {
  id: string;
  sku: string;
  barcode: string;
  name: string;
  category: string;
  brand?: string;
  unit: string;
  price: number; // selling price
  taxRate: number;
  stock: number;
  image?: string;
}

export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  unitPrice: number;
  discountType: DiscountType;
  discountValue: number;
  taxAmount: number;
  total: number;
}

export interface Customer {
  id: string;
  name: string;
  phone?: string;
  email?: string;
  loyaltyPoints: number;
}

export interface SaleSummary {
  subtotal: number;
  discountTotal: number;
  taxTotal: number;
  grandTotal: number;
  itemCount: number;
}

export interface ReceiptInfo {
  storeName: string;
  address: string;
  phone: string;
  taxId: string;
  footerMessage: string;
}
