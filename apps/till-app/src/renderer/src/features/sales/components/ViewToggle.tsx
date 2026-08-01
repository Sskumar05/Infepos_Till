import React, { useState } from 'react';

type ViewMode = 'GRID' | 'LIST';

export const ViewToggle = React.memo(function ViewToggle() {
  const [activeView, setActiveView] = useState<ViewMode>('GRID');

  const baseClass =
    'flex items-center gap-1.5 h-10 px-3 text-sm font-medium rounded-[var(--radius-md)] border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)]';

  const activeClass =
    'bg-[var(--color-brand-primary)] text-white border-[var(--color-brand-primary)]';

  const inactiveClass =
    'bg-[var(--color-bg-surface)] text-[var(--color-text-muted)] border-[var(--color-border-default)] hover:bg-[var(--color-bg-base)]';

  return (
    <div className="flex items-center rounded-[var(--radius-md)] border border-[var(--color-border-default)] overflow-hidden" role="group" aria-label="View mode">
      <button
        type="button"
        id="btn-view-grid"
        onClick={() => setActiveView('GRID')}
        className={`${baseClass} rounded-none border-0 border-r border-[var(--color-border-default)] ${activeView === 'GRID' ? activeClass : inactiveClass}`}
        aria-pressed={activeView === 'GRID'}
        aria-label="Grid view"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
        Grid
      </button>

      <button
        type="button"
        id="btn-view-list"
        onClick={() => setActiveView('LIST')}
        className={`${baseClass} rounded-none border-0 ${activeView === 'LIST' ? activeClass : inactiveClass}`}
        aria-pressed={activeView === 'LIST'}
        aria-label="List view"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        List
      </button>
    </div>
  );
});
