import React from 'react';
import { EmptyState } from '../../../components/feedback/EmptyState';

export const EmptyCart = React.memo(function EmptyCart() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6">
      <EmptyState
        title="Shopping Cart Empty"
        description="Products added to the cart will appear here."
        icon={
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-[var(--color-text-muted)]">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        }
      />
    </div>
  );
});
