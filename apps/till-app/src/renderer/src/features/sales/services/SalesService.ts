import { Product, Customer, CartItem, SaleSummary } from '../types';
import { 
  DUMMY_SALES_PRODUCTS, 
  DUMMY_CUSTOMERS, 
  DUMMY_EMPTY_CART, 
  DUMMY_SALE_SUMMARY 
} from '../data/salesData';

export class SalesService {
  
  static async getProducts(): Promise<Product[]> {
    return Promise.resolve(DUMMY_SALES_PRODUCTS);
  }

  static async getCustomers(): Promise<Customer[]> {
    return Promise.resolve(DUMMY_CUSTOMERS);
  }

  static async getCart(): Promise<CartItem[]> {
    return Promise.resolve(DUMMY_EMPTY_CART);
  }

  static async getSaleSummary(): Promise<SaleSummary> {
    return Promise.resolve(DUMMY_SALE_SUMMARY);
  }

  static async searchProducts(query: string): Promise<Product[]> {
    if (!query) return Promise.resolve(DUMMY_SALES_PRODUCTS);
    
    const lowerQuery = query.toLowerCase();
    const filtered = DUMMY_SALES_PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) || 
      p.sku.toLowerCase().includes(lowerQuery)
    );
    return Promise.resolve(filtered);
  }

  static async getProductByBarcode(barcode: string): Promise<Product | null> {
    const product = DUMMY_SALES_PRODUCTS.find(p => p.barcode === barcode);
    return Promise.resolve(product || null);
  }
}
