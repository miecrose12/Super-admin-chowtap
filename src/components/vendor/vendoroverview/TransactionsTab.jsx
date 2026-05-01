import React, { useState } from 'react';
import Pagination from './Pagination';

import { generateTransactions } from '../../../utils/vendorData';
import TransactionModal from './Transactionmodal';

const TransactionsTab = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const itemsPerPage = 7;

  const allTransactions = generateTransactions(27);
  const totalPages = Math.ceil(allTransactions.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentTransactions = allTransactions.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="w-full bg-[#0a0a0a] text-white font-sans p-6 min-h-screen relative">
      <div className="w-full max-w-6xl mx-auto space-y-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-neutral-800/80 text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
              <th className="py-4 px-2 font-semibold">Transaction</th>
              <th className="py-4 px-2 font-semibold">Customer Name</th>
              <th className="py-4 px-2 font-semibold">Status</th>
              <th className="py-4 px-2 font-semibold">Amount</th>
              <th className="py-4 px-2 font-semibold">Type</th>
              <th className="py-4 px-2 font-semibold">Date Joined</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {currentTransactions.map((transaction, i) => (
              <TransactionRow 
                key={i} 
                transaction={transaction} 
                onClick={() => setSelectedTransaction(transaction)} 
              />
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
          totalItems={allTransactions.length}
          variant="compact"
        />
      </div>

      {/* Transaction Modal */}
      {selectedTransaction && (
        <TransactionModal 
          transaction={selectedTransaction} 
          onClose={() => setSelectedTransaction(null)} 
        />
      )}
    </div>
  );
};

const TransactionRow = ({ transaction, onClick }) => (
  <tr 
    onClick={onClick}
    className="border-b border-neutral-800/50 hover:bg-neutral-800/40 transition-colors cursor-pointer"
  >
    <td className="py-4 px-2">
      <div className="font-bold text-white text-[13px]">{transaction.id}</div>
      <div className="text-[11px] text-neutral-500 mt-0.5">{transaction.ref}</div>
    </td>
    <td className="py-4 px-2 text-[13px] font-bold text-white tracking-wide">
      {transaction.customer}
    </td>
    <td className="py-4 px-2">
      <span className="px-2 py-1 text-[9px] font-bold bg-[#022c16] text-[#10b981] rounded tracking-wider">
        {transaction.status}
      </span>
    </td>
    <td className="py-4 px-2 text-[13px] font-bold text-white">
      {transaction.amount}
    </td>
    <td className="py-4 px-2 text-[13px] text-white font-medium">
      {transaction.type}
    </td>
    <td className="py-4 px-2 text-neutral-400 text-[11px] font-medium tracking-wide">
      {transaction.date}
    </td>
  </tr>
);

export default TransactionsTab;