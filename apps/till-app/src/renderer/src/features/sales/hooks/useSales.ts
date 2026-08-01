import { useState, useEffect } from 'react';
import { Product, Customer, CartItem, SaleSummary, ReceiptInfo } from '../types';
import { SalesService } from '../services/SalesService';
import { DUMMY_RECEIPT_INFO } from '../data/salesData';

interface UseSalesResult {
  products: Product[];
  customers: Customer[];
  cart: CartItem[];
  summary: SaleSummary;
  receipt: ReceiptInfo;
  isLoading: boolean;
  error: string | null;
}

export function useSales(): UseSalesResult {
  const [products, setProducts] = useState<Product[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [summary, setSummary] = useState<SaleSummary>({
    subtotal: 0,
    discountTotal: 0,
    taxTotal: 0,
    grandTotal: 0,
    itemCount: 0,
  });
  const [receipt] = useState<ReceiptInfo>(DUMMY_RECEIPT_INFO);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const [fetchedProducts, fetchedCustomers, fetchedCart, fetchedSummary] = await Promise.all([
          SalesService.getProducts(),
          SalesService.getCustomers(),
          SalesService.getCart(),
          SalesService.getSaleSummary(),
        ]);

        if (mounted) {
          setProducts(fetchedProducts);
          setCustomers(fetchedCustomers);
          setCart(fetchedCart);
          setSummary(fetchedSummary);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'An unknown error occurred while fetching sales data.');
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  return {
    products,
    customers,
    cart,
    summary,
    receipt,
    isLoading,
    error,
  };
}
