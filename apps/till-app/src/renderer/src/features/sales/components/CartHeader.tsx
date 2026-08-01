import React from 'react';
import { Badge } from '../../../components/common/Badge';
import { Button } from '../../../components/common/Button';

interface CartHeaderProps {
  itemCount: number;
  onClearCart: () => void;
}

export const CartHeader = React.memo(function CartHeader({ itemCount, onClearCart }: CartHeaderProps) {
  const handleClear = () => {
    console.log('CartHeader: Clear Cart');
    onClearCart();
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-[var(--color-border-default)]">
      <div className="flex items-center gap-2">
        <h2 className="text-base font-semibold text-[var(--color-text-main)]">
          Shopping Cart
        </h2>
        <Badge variant="neutral" className="text-xs">
          {itemCount}
        </Badge>
      </div>
      {itemCount > 0 && (
        <Button
          id="btn-cart-header-clear"
          variant="ghost"
          className="h-7 px-2 text-xs text-[var(--color-brand-danger)] hover:bg-red-50 hover:text-red-700"
          onClick={handleClear}
          aria-label="Clear cart"
        >
          Clear
        </Button>
      )}
    </div>
  );
});
