import React from 'react';
import { Card, CardBody } from '../../../components/common/Card'
import { Badge } from '../../../components/common/Badge'
import { DashboardSection } from './DashboardSection'
import { DashboardSummary } from '../types'
import { KPIGrid } from './KPIGrid'
import { QuickActionsGrid } from './QuickActionsGrid'
import { RecentSalesWidget } from './RecentSalesWidget'
import { LowStockWidget } from './LowStockWidget'

interface DashboardContentProps {
  summary: DashboardSummary;
  isLoading: boolean;
}

export const DashboardContent = React.memo(function DashboardContent({ summary, isLoading }: DashboardContentProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-48 text-[var(--color-text-muted)] text-sm">
        Loading dashboard...
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-5 rounded-[var(--radius-xl)] bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] shadow-[var(--shadow-sm)]">
        <div>
          <p className="text-sm text-[var(--color-text-muted)] font-medium">Welcome back,</p>
          <p className="text-xl font-bold text-[var(--color-text-primary)] mt-0.5">Jane Smith</p>
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <Badge variant="success">Active Shift</Badge>
            <span className="text-xs text-[var(--color-text-muted)]">Shift started at 08:00 AM · Terminal 01</span>
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="text-xs text-[var(--color-text-muted)]">Last updated</p>
          <p className="text-sm font-medium text-[var(--color-text-main)] mt-0.5">
            {new Date(summary.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>

      {/* KPI Cards Placeholder */}
      <DashboardSection
        title="Today's Overview"
        description="Live metrics for the current trading day"
      >
        <KPIGrid summary={summary} />
      </DashboardSection>

      {/* Quick Actions Placeholder */}
      <DashboardSection
        title="Quick Actions"
        description="Common tasks for your current shift"
      >
        <QuickActionsGrid />
      </DashboardSection>

      {/* Widgets Placeholder */}
      <DashboardSection
        title="Analytics Widgets"
        description="Detailed insights will be displayed here"
        action={<Badge variant="neutral">Coming in Step 3</Badge>}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <RecentSalesWidget sales={summary.recentSales} />
          <LowStockWidget products={summary.lowStockProducts} />
          
          {[
            { title: 'Top Products', description: 'Best-selling products by revenue' },
            { title: 'Sales Chart', description: 'Hourly sales trend for today' },
          ].map((widget) => (
            <Card key={widget.title}>
              <CardBody className="p-6">
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">{widget.title}</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">{widget.description}</p>
                <div className="mt-4 h-24 rounded-[var(--radius-lg)] bg-[var(--color-bg-base)] border border-dashed border-[var(--color-border-default)] flex items-center justify-center">
                  <span className="text-xs text-[var(--color-text-muted)]">Widget placeholder — to be implemented</span>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </DashboardSection>
    </div>
  )
}
);
