import { useState } from 'react';

import { FilterIcon } from '../../../../assets';
import { Button, Search, TransactionStatus } from '../../../../components';
import { useFilter, useTransactionHistory } from '../..';
import { EmptyState, Filter, TableComponent2 } from '../../components';
import { Modal } from '../../modal';

const columnObjects = [
  {
    accessorKey: 'transactionType',
    header: 'Transaction Type',
  },
  {
    accessorKey: 'dateTime',
    header: 'Date',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: DisplayStatus,
  },
  {
    accessorKey: 'currencyAmount',
    header: 'Amount',
  },
];

export function Transactions() {
  const { data } = useTransactionHistory();
  const [isShowing, setIsShowing] = useState(false);
  const {
    filter,
    handleFilterChange,
    applyFilter,
    handleDropdownFilterChange,
  } = useFilter();

  function toggle() {
    setIsShowing(!isShowing);
  }

  const transaction = data?.transactions;

  console.log('transaction', transaction);

  // const { ndata } = useFilter();
  // console.log('filter', ndata);
  return (
    <div className="pl-8 pr-8 pt-6">
      <div className="flex justify-between items-center pb-6">
        <p className="text-gray-800 font-bold text-[24px]">Transactions</p>
        <div className="flex items-center gap-5">
          <Search onSearch={() => {}} className="w-[400px]" />
          <Button
            onClick={toggle}
            className="w-[92px]"
            variant="tertiary"
            children="Filter"
            rightIcon={<FilterIcon />}
          />
        </div>
      </div>
      <div>
        {transaction?.length === 0 ? (
          <EmptyState />
        ) : (
          <TableComponent2 data={transaction ?? []} columns={columnObjects} />
        )}
      </div>
      <Modal show={isShowing}>
        <Filter
          onClose={toggle}
          handleFilterChange={handleFilterChange}
          filter={filter}
          applyFilter={applyFilter}
          handleDropdownFilterChange={handleDropdownFilterChange}
        />
      </Modal>
    </div>
  );
}

function DisplayStatus({ getValue }: { getValue: () => any }) {
  const statusValue = getValue();

  const statusVariant = statusValue === 'Successful' ? 'primary' : 'secondary';

  return <TransactionStatus status={statusValue} variant={statusVariant} />;
}
