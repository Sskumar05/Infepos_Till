import React from 'react';
import { Card, CardBody } from '../../../components/common/Card';
import { Badge } from '../../../components/common/Badge';

export interface KPICardProps {
  title: string;
  value: string | number;
  description: string;
  trendPercent?: number;
  trendDirection?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
}

export const KPICard = React.memo(function KPICard({
  title,
  value,
  description,
  trendPercent,
  trendDirection,
  icon,
}: KPICardProps) {
  const renderTrendBadge = () => {
    if (trendPercent === undefined || !trendDirection) return null;

    let variant: 'success' | 'danger' | 'neutral' = 'neutral';
    let iconChar = '';

    if (trendDirection === 'up') {
      variant = 'success';
      iconChar = '↑';
    } else if (trendDirection === 'down') {
      variant = 'danger';
      iconChar = '↓';
    } else {
      variant = 'neutral';
      iconChar = '−';
    }

    return (
      <Badge variant={variant} className="ml-2">
        {iconChar} {Math.abs(trendPercent)}%
      </Badge>
    );
  };

  return (
    <Card className="hover:shadow-[var(--shadow-md)] transition-shadow cursor-default h-full">
      <CardBody className="p-5 flex flex-col h-full justify-between">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
            {title}
          </p>
          {icon && (
            <div className="text-[var(--color-text-muted)] opacity-70">
              {icon}
            </div>
          )}
        </div>
        <div>
          <div className="flex items-baseline">
            <p className="text-3xl font-bold text-[var(--color-text-primary)]">
              {value}
            </p>
            {renderTrendBadge()}
          </div>
          <p className="text-xs text-[var(--color-text-muted)] mt-1">
            {description}
          </p>
        </div>
      </CardBody>
    </Card>
  );
}
);
