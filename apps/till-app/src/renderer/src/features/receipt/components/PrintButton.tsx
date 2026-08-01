import React from 'react';
import { Button } from '../../../components/common/Button';

export const PrintButton: React.FC = () => {
  const handleClick = () => {
    console.log('Print Receipt');
  };

  return (
    <Button
      variant="primary"
      className="w-full flex items-center justify-center gap-2 py-2.5 font-medium"
      onClick={handleClick}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
      <span>Print Receipt</span>
    </Button>
  );
};
