import {
  ReportSummary,
  SalesReport,
  RevenueReport,
  InventoryReport,
  CustomerReport,
  PaymentReport,
  TaxReport,
  ChartData
} from '../types'

export const DUMMY_REPORT_SUMMARY: ReportSummary = {
  totalSales: 45280.5,
  totalRevenue: 54336.6,
  totalOrders: 1420,
  totalCustomers: 850,
  totalProducts: 340,
  totalTax: 9056.1,
  totalDiscount: 1250.0,
  netProfit: 18450.25
}

export const DUMMY_SALES_REPORTS: SalesReport[] = [
  { id: 'sal-001', date: '01/07/2026', orders: 42, sales: 1450.0, revenue: 1740.0, profit: 580.0 },
  { id: 'sal-002', date: '02/07/2026', orders: 38, sales: 1320.5, revenue: 1584.6, profit: 528.2 },
  { id: 'sal-003', date: '03/07/2026', orders: 50, sales: 1890.0, revenue: 2268.0, profit: 756.0 },
  { id: 'sal-004', date: '04/07/2026', orders: 65, sales: 2450.0, revenue: 2940.0, profit: 980.0 },
  { id: 'sal-005', date: '05/07/2026', orders: 58, sales: 2100.0, revenue: 2520.0, profit: 840.0 },
  { id: 'sal-006', date: '06/07/2026', orders: 30, sales: 980.0, revenue: 1176.0, profit: 392.0 },
  { id: 'sal-007', date: '07/07/2026', orders: 45, sales: 1600.0, revenue: 1920.0, profit: 640.0 },
  { id: 'sal-008', date: '08/07/2026', orders: 48, sales: 1720.0, revenue: 2064.0, profit: 688.0 },
  { id: 'sal-009', date: '09/07/2026', orders: 52, sales: 1950.0, revenue: 2340.0, profit: 780.0 },
  { id: 'sal-010', date: '10/07/2026', orders: 60, sales: 2250.0, revenue: 2700.0, profit: 900.0 },
  { id: 'sal-011', date: '11/07/2026', orders: 72, sales: 2800.0, revenue: 3360.0, profit: 1120.0 },
  { id: 'sal-012', date: '12/07/2026', orders: 68, sales: 2600.0, revenue: 3120.0, profit: 1040.0 },
  { id: 'sal-013', date: '13/07/2026', orders: 35, sales: 1150.0, revenue: 1380.0, profit: 460.0 },
  { id: 'sal-014', date: '14/07/2026', orders: 41, sales: 1400.0, revenue: 1680.0, profit: 560.0 },
  { id: 'sal-015', date: '15/07/2026', orders: 44, sales: 1550.0, revenue: 1860.0, profit: 620.0 },
  { id: 'sal-016', date: '16/07/2026', orders: 49, sales: 1800.0, revenue: 2160.0, profit: 720.0 },
  { id: 'sal-017', date: '17/07/2026', orders: 56, sales: 2150.0, revenue: 2580.0, profit: 860.0 },
  { id: 'sal-018', date: '18/07/2026', orders: 75, sales: 2950.0, revenue: 3540.0, profit: 1180.0 },
  { id: 'sal-019', date: '19/07/2026', orders: 70, sales: 2700.0, revenue: 3240.0, profit: 1080.0 },
  { id: 'sal-020', date: '20/07/2026', orders: 33, sales: 1050.0, revenue: 1260.0, profit: 420.0 },
  { id: 'sal-021', date: '21/07/2026', orders: 39, sales: 1350.0, revenue: 1620.0, profit: 540.0 },
  { id: 'sal-022', date: '22/07/2026', orders: 47, sales: 1680.0, revenue: 2016.0, profit: 672.0 },
  { id: 'sal-023', date: '23/07/2026', orders: 51, sales: 1880.0, revenue: 2256.0, profit: 752.0 },
  { id: 'sal-024', date: '24/07/2026', orders: 63, sales: 2350.0, revenue: 2820.0, profit: 940.0 },
  { id: 'sal-025', date: '25/07/2026', orders: 78, sales: 3100.0, revenue: 3720.0, profit: 1240.0 },
  { id: 'sal-026', date: '26/07/2026', orders: 66, sales: 2500.0, revenue: 3000.0, profit: 1000.0 },
  { id: 'sal-027', date: '27/07/2026', orders: 36, sales: 1200.0, revenue: 1440.0, profit: 480.0 },
  { id: 'sal-028', date: '28/07/2026', orders: 43, sales: 1480.0, revenue: 1776.0, profit: 592.0 },
  { id: 'sal-029', date: '29/07/2026', orders: 46, sales: 1620.0, revenue: 1944.0, profit: 648.0 },
  { id: 'sal-030', date: '30/07/2026', orders: 54, sales: 1980.0, revenue: 2376.0, profit: 792.0 }
]

export const DUMMY_REVENUE_REPORTS: RevenueReport[] = [
  { id: 'rev-001', month: 'August 2025', revenue: 42000.0, expenses: 26000.0, profit: 16000.0 },
  { id: 'rev-002', month: 'September 2025', revenue: 44500.0, expenses: 27200.0, profit: 17300.0 },
  { id: 'rev-003', month: 'October 2025', revenue: 41000.0, expenses: 25800.0, profit: 15200.0 },
  { id: 'rev-004', month: 'November 2025', revenue: 48000.0, expenses: 29000.0, profit: 19000.0 },
  { id: 'rev-005', month: 'December 2025', revenue: 65000.0, expenses: 38000.0, profit: 27000.0 },
  { id: 'rev-006', month: 'January 2026', revenue: 39000.0, expenses: 24500.0, profit: 14500.0 },
  { id: 'rev-007', month: 'February 2026', revenue: 41500.0, expenses: 25500.0, profit: 16000.0 },
  { id: 'rev-008', month: 'March 2026', revenue: 46000.0, expenses: 28000.0, profit: 18000.0 },
  { id: 'rev-009', month: 'April 2026', revenue: 43500.0, expenses: 26800.0, profit: 16700.0 },
  { id: 'rev-010', month: 'May 2026', revenue: 49000.0, expenses: 30000.0, profit: 19000.0 },
  { id: 'rev-011', month: 'June 2026', revenue: 51000.0, expenses: 31200.0, profit: 19800.0 },
  { id: 'rev-012', month: 'July 2026', revenue: 54336.6, expenses: 33200.0, profit: 21136.6 }
]

export const DUMMY_INVENTORY_REPORTS: InventoryReport[] = [
  { id: 'inv-001', category: 'Beverages', stockValue: 12500.0, stockCount: 1450, lowStock: 12, outOfStock: 2 },
  { id: 'inv-002', category: 'Snacks & Confectionery', stockValue: 8400.0, stockCount: 980, lowStock: 8, outOfStock: 1 },
  { id: 'inv-003', category: 'Dairy & Chilled', stockValue: 6200.0, stockCount: 420, lowStock: 15, outOfStock: 4 },
  { id: 'inv-004', category: 'Bakery', stockValue: 3100.0, stockCount: 260, lowStock: 5, outOfStock: 0 },
  { id: 'inv-005', category: 'Fresh Produce', stockValue: 4500.0, stockCount: 380, lowStock: 10, outOfStock: 3 },
  { id: 'inv-006', category: 'Frozen Foods', stockValue: 9800.0, stockCount: 650, lowStock: 6, outOfStock: 1 },
  { id: 'inv-007', category: 'Toiletries & Health', stockValue: 11200.0, stockCount: 820, lowStock: 4, outOfStock: 0 },
  { id: 'inv-008', category: 'Household Essentials', stockValue: 14300.0, stockCount: 1100, lowStock: 7, outOfStock: 2 },
  { id: 'inv-009', category: 'Tobacco & Vape', stockValue: 18500.0, stockCount: 740, lowStock: 3, outOfStock: 0 },
  { id: 'inv-010', category: 'Alcohol & Spirits', stockValue: 22400.0, stockCount: 890, lowStock: 9, outOfStock: 1 }
]

export const DUMMY_CUSTOMER_REPORTS: CustomerReport[] = [
  { id: 'cust-001', newCustomers: 45, returningCustomers: 180, vipCustomers: 25, inactiveCustomers: 12 },
  { id: 'cust-002', newCustomers: 38, returningCustomers: 165, vipCustomers: 22, inactiveCustomers: 15 },
  { id: 'cust-003', newCustomers: 52, returningCustomers: 195, vipCustomers: 28, inactiveCustomers: 10 },
  { id: 'cust-004', newCustomers: 60, returningCustomers: 210, vipCustomers: 32, inactiveCustomers: 8 },
  { id: 'cust-005', newCustomers: 42, returningCustomers: 175, vipCustomers: 24, inactiveCustomers: 14 },
  { id: 'cust-006', newCustomers: 35, returningCustomers: 160, vipCustomers: 20, inactiveCustomers: 18 },
  { id: 'cust-007', newCustomers: 48, returningCustomers: 188, vipCustomers: 27, inactiveCustomers: 11 },
  { id: 'cust-008', newCustomers: 55, returningCustomers: 202, vipCustomers: 30, inactiveCustomers: 9 },
  { id: 'cust-009', newCustomers: 50, returningCustomers: 190, vipCustomers: 29, inactiveCustomers: 13 },
  { id: 'cust-010', newCustomers: 64, returningCustomers: 225, vipCustomers: 35, inactiveCustomers: 7 }
]

export const DUMMY_PAYMENT_REPORTS: PaymentReport[] = [
  { id: 'pay-001', cash: 12450.0, card: 28900.0, mobile: 3200.0, giftCard: 730.5 },
  { id: 'pay-002', cash: 11200.0, card: 26500.0, mobile: 2900.0, giftCard: 650.0 },
  { id: 'pay-003', cash: 13800.0, card: 31200.0, mobile: 3600.0, giftCard: 820.0 },
  { id: 'pay-004', cash: 10500.0, card: 24800.0, mobile: 2700.0, giftCard: 540.0 },
  { id: 'pay-005', cash: 14100.0, card: 33400.0, mobile: 4100.0, giftCard: 910.0 }
]

export const DUMMY_TAX_REPORTS: TaxReport[] = [
  { id: 'tax-001', vat: 7540.0, serviceTax: 1200.0, otherTax: 316.1 },
  { id: 'tax-002', vat: 6980.0, serviceTax: 1100.0, otherTax: 280.0 },
  { id: 'tax-003', vat: 8200.0, serviceTax: 1350.0, otherTax: 350.0 },
  { id: 'tax-004', vat: 6450.0, serviceTax: 980.0, otherTax: 240.0 },
  { id: 'tax-005', vat: 8900.0, serviceTax: 1420.0, otherTax: 390.0 }
]

export const DUMMY_CHART_DATA: ChartData[] = [
  { label: 'Mon', value: 4200, color: '#3b82f6' },
  { label: 'Tue', value: 3800, color: '#10b981' },
  { label: 'Wed', value: 5100, color: '#f59e0b' },
  { label: 'Thu', value: 4900, color: '#ef4444' },
  { label: 'Fri', value: 6800, color: '#06b6d4' },
  { label: 'Sat', value: 8200, color: '#8b5cf6' },
  { label: 'Sun', value: 7400, color: '#ec4899' }
]
