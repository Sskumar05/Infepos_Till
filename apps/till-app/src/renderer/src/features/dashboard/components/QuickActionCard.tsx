import React from 'react';

export interface QuickActionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export const QuickActionCard = React.memo(function QuickActionCard({
  title,
  description,
  icon,
  onClick,
}: QuickActionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex flex-col items-center text-center gap-3 p-5 rounded-[var(--radius-xl)] bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] hover:border-[var(--color-brand-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] transition-all active:scale-95"
    >
      <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-[var(--color-action-focus)] text-[var(--color-brand-primary)] flex items-center justify-center group-hover:bg-[var(--color-brand-primary)] group-hover:text-[var(--color-bg-surface)] transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-primary)] transition-colors">
          {title}
        </h3>
        <p className="text-xs text-[var(--color-text-muted)] mt-1">
          {description}
        </p>
      </div>
    </button>
  );
}
);
