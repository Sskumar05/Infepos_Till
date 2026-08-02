import React from 'react'
import type { TaxReport } from '../types'
import { Card, CardHeader, CardBody } from '../../../components/common/Card'
import { EmptyState } from '../../../components/feedback/EmptyState'
import { TaxReportRow } from './TaxReportRow'

export interface TaxReportsTableProps {
  taxReports: TaxReport[]
}

const TABLE_HEADERS = ['VAT', 'Service Tax', 'Other Tax', 'Actions']

export const TaxReportsTable = React.memo<TaxReportsTableProps>(({ taxReports }) => {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-sm font-semibold text-[var(--color-text-main)]">
          Tax Liability & Collected Audit
        </h3>
      </CardHeader>
      <CardBody className="p-0">
        {taxReports.length === 0 ? (
          <EmptyState
            title="No tax records found"
            description="There are no tax reports available at this time."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            }
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] text-left">
              <thead>
                <tr className="border-b border-[var(--color-border-divider)] bg-[var(--color-bg-surface)]">
                  {TABLE_HEADERS.map((header) => (
                    <th
                      key={header}
                      className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {taxReports.map((report) => (
                  <TaxReportRow key={report.id} report={report} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardBody>
    </Card>
  )
})

TaxReportsTable.displayName = 'TaxReportsTable'
