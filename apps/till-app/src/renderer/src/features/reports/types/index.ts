export interface ReportSummary {
  totalSales: number
  totalRevenue: number
  totalOrders: number
  totalCustomers: number
  totalProducts: number
  totalTax: number
  totalDiscount: number
  netProfit: number
}

export interface SalesReport {
  id: string
  date: string
  orders: number
  sales: number
  revenue: number
  profit: number
}

export interface RevenueReport {
  id: string
  month: string
  revenue: number
  expenses: number
  profit: number
}

export interface InventoryReport {
  id: string
  category: string
  stockValue: number
  stockCount: number
  lowStock: number
  outOfStock: number
}

export interface CustomerReport {
  id: string
  newCustomers: number
  returningCustomers: number
  vipCustomers: number
  inactiveCustomers: number
}

export interface PaymentReport {
  id: string
  cash: number
  card: number
  mobile: number
  giftCard: number
}

export interface TaxReport {
  id: string
  vat: number
  serviceTax: number
  otherTax: number
}

export interface ChartData {
  label: string
  value: number
  color: string
}

export interface DateRange {
  startDate: string
  endDate: string
}

export type ExportFormat = 'PDF' | 'CSV' | 'EXCEL'

export interface ReportFilter {
  period: string
  category: string
  dateRange: DateRange
}

export interface PrintSettings {
  paperSize: string
  orientation: 'portrait' | 'landscape'
  showHeader: boolean
  showFooter: boolean
}
