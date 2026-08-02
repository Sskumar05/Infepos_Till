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
import {
  DUMMY_REPORT_SUMMARY,
  DUMMY_SALES_REPORTS,
  DUMMY_REVENUE_REPORTS,
  DUMMY_INVENTORY_REPORTS,
  DUMMY_CUSTOMER_REPORTS,
  DUMMY_PAYMENT_REPORTS,
  DUMMY_TAX_REPORTS,
  DUMMY_CHART_DATA
} from '../data/reportsData'

export class ReportsService {
  static async getSummary(): Promise<ReportSummary> {
    return Promise.resolve(DUMMY_REPORT_SUMMARY)
  }

  static async getSalesReports(): Promise<SalesReport[]> {
    return Promise.resolve(DUMMY_SALES_REPORTS)
  }

  static async getRevenueReports(): Promise<RevenueReport[]> {
    return Promise.resolve(DUMMY_REVENUE_REPORTS)
  }

  static async getInventoryReports(): Promise<InventoryReport[]> {
    return Promise.resolve(DUMMY_INVENTORY_REPORTS)
  }

  static async getCustomerReports(): Promise<CustomerReport[]> {
    return Promise.resolve(DUMMY_CUSTOMER_REPORTS)
  }

  static async getPaymentReports(): Promise<PaymentReport[]> {
    return Promise.resolve(DUMMY_PAYMENT_REPORTS)
  }

  static async getTaxReports(): Promise<TaxReport[]> {
    return Promise.resolve(DUMMY_TAX_REPORTS)
  }

  static async getChartData(): Promise<ChartData[]> {
    return Promise.resolve(DUMMY_CHART_DATA)
  }

  static async refreshReports(): Promise<ReportSummary> {
    return Promise.resolve(DUMMY_REPORT_SUMMARY)
  }
}
