import { useState, useEffect, useCallback } from 'react'
import type {
  ReportSummary,
  SalesReport,
  RevenueReport,
  InventoryReport,
  CustomerReport,
  PaymentReport,
  TaxReport,
  ChartData
} from '../types'
import { ReportsService } from '../services/ReportsService'

interface UseReportsResult {
  summary: ReportSummary | null
  salesReports: SalesReport[]
  revenueReports: RevenueReport[]
  inventoryReports: InventoryReport[]
  customerReports: CustomerReport[]
  paymentReports: PaymentReport[]
  taxReports: TaxReport[]
  chartData: ChartData[]
  isLoading: boolean
  error: string | null
  refresh: () => void
}

export function useReports(): UseReportsResult {
  const [summary, setSummary] = useState<ReportSummary | null>(null)
  const [salesReports, setSalesReports] = useState<SalesReport[]>([])
  const [revenueReports, setRevenueReports] = useState<RevenueReport[]>([])
  const [inventoryReports, setInventoryReports] = useState<InventoryReport[]>([])
  const [customerReports, setCustomerReports] = useState<CustomerReport[]>([])
  const [paymentReports, setPaymentReports] = useState<PaymentReport[]>([])
  const [taxReports, setTaxReports] = useState<TaxReport[]>([])
  const [chartData, setChartData] = useState<ChartData[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const [fetchTrigger, setFetchTrigger] = useState<number>(0)

  const refresh = useCallback(() => {
    setFetchTrigger((prev) => prev + 1)
  }, [])

  useEffect(() => {
    let mounted = true

    const fetchAllReports = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const [
          summaryData,
          salesData,
          revenueData,
          inventoryData,
          customerData,
          paymentData,
          taxData,
          chartDataResult
        ] = await Promise.all([
          ReportsService.getSummary(),
          ReportsService.getSalesReports(),
          ReportsService.getRevenueReports(),
          ReportsService.getInventoryReports(),
          ReportsService.getCustomerReports(),
          ReportsService.getPaymentReports(),
          ReportsService.getTaxReports(),
          ReportsService.getChartData()
        ])

        if (mounted) {
          setSummary(summaryData)
          setSalesReports(salesData)
          setRevenueReports(revenueData)
          setInventoryReports(inventoryData)
          setCustomerReports(customerData)
          setPaymentReports(paymentData)
          setTaxReports(taxData)
          setChartData(chartDataResult)
        }
      } catch (err) {
        if (mounted) {
          setError(
            err instanceof Error ? err.message : 'An unknown error occurred while fetching reports.'
          )
        }
      } finally {
        if (mounted) {
          setIsLoading(false)
        }
      }
    }

    fetchAllReports()

    return () => {
      mounted = false
    }
  }, [fetchTrigger])

  return {
    summary,
    salesReports,
    revenueReports,
    inventoryReports,
    customerReports,
    paymentReports,
    taxReports,
    chartData,
    isLoading,
    error,
    refresh
  }
}
