import React from 'react';
import { Button } from '../../../components/common/Button';

export const EmailReceiptButton: React.FC = () => {
  const handleClick = () => {
    console.log('Email Receipt');
  };

  return (
    <Button
      variant="secondary"
      className="w-full flex items-center justify-center gap-2 py-2.5 font-medium"
      onClick={handleClick}
    >
      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <span>Email Receipt</span>
    </Button>
  );
};
