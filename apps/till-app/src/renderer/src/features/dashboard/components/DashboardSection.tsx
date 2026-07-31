import React from 'react';

interface DashboardSectionProps {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const DashboardSection = React.memo(function DashboardSection({ title, description, action, children, className = '' }: DashboardSectionProps) {
  return (
    <section className={`flex flex-col gap-4 ${className}`}>
      {(title || action) && (
        <div className="flex items-start justify-between gap-4">
          <div>
            {title && (
              <h2 className="text-base font-semibold text-[var(--color-text-primary)] leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-sm text-[var(--color-text-muted)] mt-0.5">{description}</p>
            )}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </div>
      )}
      {children}
    </section>
  )
}
);
