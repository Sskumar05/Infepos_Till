import React from 'react';
import { Card, CardBody, CardHeader } from '../../../components/common/Card';

interface ProductFormSectionProps {
  title: string;
  children: React.ReactNode;
}

export const ProductFormSection = React.memo(function ProductFormSection({
  title,
  children,
}: ProductFormSectionProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <h3 className="text-base font-semibold text-[var(--color-text-main)] leading-tight">
          {title}
        </h3>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col gap-4">
          {children}
        </div>
      </CardBody>
    </Card>
  );
});
