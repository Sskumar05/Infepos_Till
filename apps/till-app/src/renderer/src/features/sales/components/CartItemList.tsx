import React from 'react';
import { EmptyCart } from './EmptyCart';
import { CartItem } from './CartItem';
import type { CartItem as CartItemType } from '../types';

interface CartItemListProps {
  cart: CartItemType[];
}

export const CartItemList = React.memo(function CartItemList({ cart }: CartItemListProps) {
  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="flex-1 overflow-y-auto divide-y divide-[var(--color-border-divider)]">
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
});
