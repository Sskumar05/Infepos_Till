import React from 'react';
import { Card, CardBody } from '../../../components/common/Card';
import { Badge } from '../../../components/common/Badge';
import { Button } from '../../../components/common/Button';
import { useSalesActions } from '../../../store/hooks';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAdd: (productId: string) => void;
}

const ProductCard = React.memo(function ProductCard({ product, onAdd }: ProductCardProps) {
  const { addToCart } = useSalesActions();
  const inStock = product.stock > 0;
  const stockVariant = inStock ? 'success' : 'danger';

  return (
    <Card className="flex flex-col h-full">
      <CardBody className="flex flex-col gap-3 p-3">
        {/* Image Placeholder */}
        <div className="w-full aspect-square rounded-[var(--radius-md)] bg-[var(--color-bg-base)] border border-[var(--color-border-default)] flex items-center justify-center text-[var(--color-text-muted)]">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col gap-1">
          <p className="text-sm font-semibold text-[var(--color-text-main)] leading-tight line-clamp-2">
            {product.name}
          </p>
          <p className="text-xs font-mono text-[var(--color-text-muted)]">{product.sku}</p>
          <div className="flex items-center justify-between mt-1">
            <p className="text-sm font-bold text-[var(--color-text-main)]">
              £{product.price.toFixed(2)}
            </p>
            <Badge variant={stockVariant} className="text-xs">
              {inStock ? 'In Stock' : 'Out of Stock'}
            </Badge>
          </div>
        </div>

        {/* Add Button */}
        <Button
          id={`btn-add-${product.id}`}
          variant="primary"
          className="w-full h-8 text-xs"
          disabled={!inStock}
          onClick={() => {
            console.log('ProductGrid: Add to cart —', product.name);
            addToCart(product);
            onAdd(product.id);
          }}
          aria-label={`Add ${product.name} to cart`}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-1" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Add
        </Button>
      </CardBody>
    </Card>
  );
});

// ─────────────────────────────────────────────────────────────────────────────

interface ProductGridProps {
  products: Product[];
  onAdd: (productId: string) => void;
}

export const ProductGrid = React.memo(function ProductGrid({ products, onAdd }: ProductGridProps) {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Section header */}
      <div className="flex items-center justify-between mb-4 shrink-0">
        <h2 className="text-base font-semibold text-[var(--color-text-main)]">
          Products
        </h2>
        <span className="text-xs text-[var(--color-text-muted)]">
          {products.length} items
        </span>
      </div>

      {/* Responsive grid — 4 cols desktop, 3 tablet, 2 mobile */}
      <div className="flex-1 overflow-y-auto pr-1">
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </div>
  );
});
