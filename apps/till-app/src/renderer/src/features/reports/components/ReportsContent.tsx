import React from 'react'
import type {
  ReportSummary,
  SalesReport,
  RevenueReport,
  InventoryReport,
  CustomerReport,
  PaymentReport,
  TaxReport
} from '../types'
import { ReportsDashboard } from './ReportsDashboard'
import { SalesReports } from './SalesReports'
import { RevenueReports } from './RevenueReports'
import { InventoryReports } from './InventoryReports'
import { CustomerReports } from './CustomerReports'
import { PaymentReports } from './PaymentReports'
import { TaxReports } from './TaxReports'
import { Card, CardHeader, CardBody } from '../../../components/common/Card'

export interface ReportsContentProps {
  summary: ReportSummary
  salesReports: SalesReport[]
  revenueReports: RevenueReport[]
  inventoryReports: InventoryReport[]
  customerReports: CustomerReport[]
  paymentReports: PaymentReport[]
  taxReports: TaxReport[]
  onRefresh: () => void
}

export const ReportsContent = React.memo<ReportsContentProps>(
  ({
    summary,
    salesReports,
    revenueReports,
    inventoryReports,
    customerReports,
    paymentReports,
    taxReports
  }) => {
    return (
      <div className="flex flex-col gap-8">
        {/* Top: Dashboard KPIs + Future panel side-by-side */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          {/* Left — KPI dashboard */}
          <div className="flex-1 min-w-0">
            <ReportsDashboard summary={summary} />
          </div>

          {/* Right — Placeholder future panel */}
          <div className="w-full lg:w-72 shrink-0">
            <Card>
              <CardHeader>
                <h3 className="text-sm font-semibold text-[var(--color-text-main)]">
                  Future Systems
                </h3>
              </CardHeader>
              <CardBody>
                <div className="flex flex-col items-center justify-center gap-3 py-6 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--color-bg-surface)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[var(--color-text-muted)]"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <line x1="3" y1="9" x2="21" y2="9" />
                      <line x1="9" y1="21" x2="9" y2="9" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-text-main)]">
                      Coming Soon
                    </p>
                    <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                      Interactive chart engines, PDF/Excel export tools, and SQLite offline synchronization.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Sales Reports section */}
        <SalesReports salesReports={salesReports} />

        {/* Revenue Reports section */}
        <RevenueReports revenueReports={revenueReports} />

        {/* Inventory Reports section */}
        <InventoryReports inventoryReports={inventoryReports} />

        {/* Customer Reports section */}
        <CustomerReports customerReports={customerReports} />

        {/* Payment Reports section */}
        <PaymentReports paymentReports={paymentReports} />

        {/* Tax Reports section */}
        <TaxReports taxReports={taxReports} />
      </div>
    )
  }
)

ReportsContent.displayName = 'ReportsContent'
