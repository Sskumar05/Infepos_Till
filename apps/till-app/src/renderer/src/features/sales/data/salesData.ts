import { Product, Customer, CartItem, SaleSummary } from '../types';
import { RECEIPT_SETTINGS } from '../constants';

export const DUMMY_SALES_PRODUCTS: Product[] = Array.from({ length: 30 }, (_, i) => ({
  id: `prod-${i + 1}`,
  sku: `SKU-100${i + 1}`,
  barcode: `50123456789${i.toString().padStart(2, '0')}`,
  name: `Product ${i + 1}`,
  category: i % 3 === 0 ? 'Beverages' : i % 3 === 1 ? 'Snacks' : 'Dairy',
  brand: `Brand ${Math.floor(i / 5) + 1}`,
  unit: 'pcs',
  price: parseFloat(((i + 1) * 1.5).toFixed(2)),
  taxRate: 0.20,
  stock: 100 - i * 2,
}));

export const DUMMY_CUSTOMERS: Customer[] = [
  { id: 'cust-1', name: 'John Doe', phone: '07700 900077', loyaltyPoints: 150 },
  { id: 'cust-2', name: 'Jane Smith', email: 'jane@example.com', loyaltyPoints: 420 },
  { id: 'cust-3', name: 'Bob Johnson', phone: '07700 900123', email: 'bob@example.com', loyaltyPoints: 0 },
  { id: 'cust-4', name: 'Alice Williams', loyaltyPoints: 75 },
  { id: 'cust-5', name: 'Charlie Brown', phone: '07700 900987', loyaltyPoints: 220 },
];

export const DUMMY_EMPTY_CART: CartItem[] = [];

export const DUMMY_SALE_SUMMARY: SaleSummary = {
  subtotal: 0.00,
  discountTotal: 0.00,
  taxTotal: 0.00,
  grandTotal: 0.00,
  itemCount: 0,
};

export const DUMMY_RECEIPT_INFO = RECEIPT_SETTINGS;
