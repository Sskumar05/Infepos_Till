import React from 'react';
import { Card, CardBody } from '../../../components/common/Card';

export interface ReceiptContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const ReceiptContainer: React.FC<ReceiptContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex justify-center items-start w-full h-full overflow-y-auto p-4 ${className}`}>
      <Card className="w-full max-w-[380px] bg-white text-gray-900 font-mono shadow-md border border-gray-200 rounded-none sm:rounded-md">
        <CardBody className="p-6">
          {children}
        </CardBody>
      </Card>
    </div>
  );
};
