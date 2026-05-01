import React from 'react';

const SVG = {
  close: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  star: <svg width="16" height="16" viewBox="0 0 24 24" fill="black"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  arrow: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  link: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
  pdf: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>,
  report: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>,
};

const TransactionModal = ({ transaction, onClose }) => {
  const isCredit = transaction.type?.toLowerCase() === 'credit' || !transaction.amount?.toString().includes('-');
  const amountColor = isCredit ? 'text-[#f58a23]' : 'text-[#f04438]';
  const rawAmount = transaction.amount?.toString().replace(/[^0-9.]/g, '') || '500.00';
  const displayAmount = `${isCredit ? '+' : '-'}N${rawAmount}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose} role="presentation">
      <div className="w-full max-w-[420px] bg-[#161616] border border-neutral-800 shadow-2xl flex flex-col" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="txn-id">
        
        {/* Header */}
        <div className="p-5 bg-[#222222] flex justify-between items-start border-b border-neutral-900">
          <div>
            <div className="text-[#f58a23] text-[9px] font-bold uppercase tracking-[0.15em] mb-1">TRANSACTION DETAILS</div>
            <h2 id="txn-id" className="text-white text-lg font-bold tracking-wide">{transaction.id || 'TXN_992104'}</h2>
          </div>
          <button onClick={onClose} className="text-neutral-400 hover:text-white p-1" type="button" aria-label="Close">{SVG.close}</button>
        </div>

        {/* Hero */}
        <div className="bg-black py-10 flex flex-col items-center border-b border-neutral-900">
          <div className="w-14 h-14 bg-[#1a140d] rounded-2xl flex items-center justify-center mb-4 border border-neutral-900/50">
            <div className="w-8 h-8 bg-[#f58a23] rounded-full flex items-center justify-center">{SVG.star}</div>
          </div>
          <div className={`${amountColor} text-3xl font-bold mb-3`}>{displayAmount}</div>
          <div className="bg-[#1a140d] px-3 py-1 rounded text-[#f58a23] text-[10px] font-bold uppercase">{isCredit ? 'ORDER PURCHASE' : 'WITHDRAWAL'}</div>
        </div>

        {/* Details */}
        <div className="p-6 grid grid-cols-2 gap-y-7 gap-x-4 bg-[#151515]">
          <div><div className="text-neutral-500 text-[9px] font-bold uppercase tracking-widest mb-1.5">Timestamp</div><div className="text-neutral-200 text-[13px] font-medium">{transaction.date || 'Oct 24, 2023'} | 14:22:18 UTC</div></div>
          
          <div><div className="text-neutral-500 text-[9px] font-bold uppercase tracking-widest mb-1.5">Type</div><div className="text-neutral-200 text-[13px] font-medium flex items-center gap-2"><span className={`w-1.5 h-1.5 rounded-full ${isCredit ? 'bg-[#f58a23]' : 'bg-[#f04438]'}`}/>{isCredit ? 'Credit' : 'Debit'}</div></div>
          
          <div className="col-span-2"><div className="text-neutral-500 text-[9px] font-bold uppercase tracking-widest mb-2">Balance Evolution</div><div className="flex items-center gap-3"><div><div className="text-neutral-500 text-[9px] uppercase mb-0.5">Before</div><div className="text-neutral-300 text-[13px] font-medium">N1,240.00</div></div>{SVG.arrow}<div><div className="text-neutral-500 text-[9px] uppercase mb-0.5">After</div><div className="text-[#f58a23] text-[13px] font-medium">N1,740.00</div></div></div></div>
          
          <div className="col-span-2"><div className="text-neutral-500 text-[9px] font-bold uppercase tracking-widest mb-1.5">Linked Entity</div><div className="text-neutral-200 text-[13px] font-bold flex items-center gap-2"><span className="text-neutral-500">{SVG.link}</span>{transaction.ref || 'ORD_88192_TX'}</div></div>
        </div>

        {/* Actions */}
        <div className="px-6 pb-6 pt-2 bg-[#151515] flex gap-4">
          <button className="flex-1 bg-[#e87c1e] hover:bg-[#d97017] text-[#331500] font-semibold py-3 px-4 rounded-md text-[13px] flex items-center justify-center gap-2 transition-colors" type="button">{SVG.pdf}Export PDF Receipt</button>
          <button className="px-4 py-3 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-md text-[13px] font-medium flex items-center justify-center gap-2 transition-colors" type="button">{SVG.report}Report</button>
        </div>

        {/* Footer */}
        <div className="bg-black py-3 border-t border-neutral-900 flex justify-center"><span className="text-[9px] text-neutral-600 font-medium tracking-wide">Ledger Entry: 0x44F...92E1 | Securely signed by ChowTap Audit Engine</span></div>
      </div>
    </div>
  );
};

export default TransactionModal;