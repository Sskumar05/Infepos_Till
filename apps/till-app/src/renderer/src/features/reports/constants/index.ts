export const REPORT_TYPES = {
  SALES: 'Sales',
  REVENUE: 'Revenue',
  INVENTORY: 'Inventory',
  CUSTOMERS: 'Customers',
  PAYMENTS: 'Payments',
  TAX: 'Tax'
} as const

export const REPORT_PERIODS = {
  TODAY: 'Today',
  YESTERDAY: 'Yesterday',
  THIS_WEEK: 'This Week',
  THIS_MONTH: 'This Month',
  THIS_YEAR: 'This Year',
  CUSTOM: 'Custom'
} as const

export const EXPORT_FORMATS = {
  PDF: 'PDF',
  CSV: 'CSV',
  EXCEL: 'EXCEL'
} as const

export const PAPER_SIZES = {
  A4: 'A4',
  MM80: '80mm',
  MM58: '58mm'
} as const

export const CHART_TYPES = {
  BAR: 'Bar',
  LINE: 'Line',
  PIE: 'Pie',
  AREA: 'Area'
} as const

export const REPORT_COLORS = {
  PRIMARY: '#3b82f6',
  SUCCESS: '#10b981',
  WARNING: '#f59e0b',
  DANGER: '#ef4444',
  INFO: '#06b6d4'
} as const

export const DEFAULT_DATE_FORMAT = 'DD/MM/YYYY'
export const DEFAULT_CURRENCY = 'GBP'
export const CURRENCY_SYMBOL = '£'
