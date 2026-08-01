import React from 'react';
import { Button } from '../../../components/common/Button';
import { useSalesActions } from '../../../store/hooks';

export const CustomerActions = React.memo(function CustomerActions() {
  const { clearCustomer } = useSalesActions();

  const handleSelect = () => console.log('CustomerActions: Select Customer clicked');
  const handleAdd = () => console.log('CustomerActions: Add Customer clicked');
  const handleEdit = () => console.log('CustomerActions: Edit Customer clicked');
  const handleRemove = () => {
    console.log('CustomerActions: Remove Customer clicked');
    clearCustomer();
  };

  return (
    <div className="flex flex-col gap-2 px-4 pb-4">
      <div className="flex gap-2">
        <Button
          id="btn-customer-select"
          variant="primary"
          className="flex-1 h-9 text-xs"
          onClick={handleSelect}
        >
          Select Customer
        </Button>
        <Button
          id="btn-customer-add"
          variant="secondary"
          className="flex-1 h-9 text-xs"
          onClick={handleAdd}
        >
          Add Customer
        </Button>
      </div>
      <div className="flex gap-2">
        <Button
          id="btn-customer-edit"
          variant="secondary"
          className="flex-1 h-9 text-xs"
          onClick={handleEdit}
        >
          Edit
        </Button>
        <Button
          id="btn-customer-remove"
          variant="secondary"
          className="flex-1 h-9 text-xs text-[var(--color-brand-danger)] hover:bg-red-50"
          onClick={handleRemove}
        >
          Remove
        </Button>
      </div>
    </div>
  );
});
