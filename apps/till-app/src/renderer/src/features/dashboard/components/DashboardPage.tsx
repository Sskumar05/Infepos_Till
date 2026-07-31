import React from 'react';
import { useDashboard } from '../hooks/useDashboard'
import { DashboardHeader } from './DashboardHeader'
import { DashboardContent } from './DashboardContent'

export const DashboardPage = React.memo(function DashboardPage() {
  const { summary, isLoading, error } = useDashboard()

  return (
    <div className="flex flex-col gap-6 h-full">
      <DashboardHeader />

      {error && (
        <div className="text-sm text-[var(--color-brand-danger)] bg-red-50 border border-red-200 rounded-[var(--radius-md)] px-4 py-3">
          {error}
        </div>
      )}

      <DashboardContent summary={summary} isLoading={isLoading} />
    </div>
  )
}
);
