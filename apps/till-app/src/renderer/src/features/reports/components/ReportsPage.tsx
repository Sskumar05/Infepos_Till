import React from 'react'
import { useReports } from '../hooks/useReports'
import { ReportsHeader } from './ReportsHeader'
import { ReportsContent } from './ReportsContent'
import { Spinner } from '../../../components/feedback/Spinner'
import { EmptyState } from '../../../components/feedback/EmptyState'

export const ReportsPage: React.FC = () => {
  const {
    summary,
    salesReports,
    revenueReports,
    inventoryReports,
    customerReports,
    paymentReports,
    taxReports,
    isLoading,
    error,
    refresh
  } = useReports()

  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[var(--color-bg-base)] p-8">
        <Spinner size="lg" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[var(--color-bg-base)] p-8">
        <EmptyState
          title="Failed to load reports"
          description={error}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          }
        />
      </div>
    )
  }

  if (!summary) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[var(--color-bg-base)] p-8">
        <EmptyState
          title="No report data available"
          description="There is no summary data to display at this time."
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="9" y1="21" x2="9" y2="9" />
            </svg>
          }
        />
      </div>
    )
  }

  return (
    <div className="flex h-full w-full flex-col bg-[var(--color-bg-base)] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col">
        <ReportsHeader onRefresh={refresh} />
        <ReportsContent
          summary={summary}
          salesReports={salesReports}
          revenueReports={revenueReports}
          inventoryReports={inventoryReports}
          customerReports={customerReports}
          paymentReports={paymentReports}
          taxReports={taxReports}
          onRefresh={refresh}
        />
      </div>
    </div>
  )
}
