import logo from '../../../assets/star.svg';

// --- ICONS FOR MODAL ---
const ModalIcon = ({ name, className }) => {
  switch (name) {
    case 'close':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      );
    case 'star':
      return (
        <img src={logo} alt="star" className={className} />
      );
    case 'arrow-right':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      );
    case 'link':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      );
    case 'print':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
      );
    case 'flag':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
      );
    default:
      return null;
  }
};

// --- TRANSACTION MODAL COMPONENT ---
const TransactionModal = ({ isOpen, onClose, transaction }) => {
  if (!isOpen || !transaction) return null;

  const isCredit = transaction.type?.toLowerCase() === 'credit';
  
  const amountStr = isCredit ? `+${transaction.amount}` : `-${transaction.amount}`;
  const amountColor = isCredit ? 'text-[#e86b35]' : 'text-[#DC781B]';
  const dotColor = isCredit ? 'bg-[#e86b35]' : 'bg-[#DC781B]';
  const title = isCredit ? 'VOUCHER PURCHASE' : 'WITHDRAWAL';
  const dateStr = transaction.date || 'Oct 24, 2023 | 14:22:18 UTC';
  const beforeBal = transaction.beforeBalance || 'N1,240.00';
  const afterBal = transaction.afterBalance || 'N1,740.00';
  const linkedEntity = transaction.linkedEntity || 'ORD_88192_TX';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#161616] w-full max-w-md rounded-xl shadow-2xl border border-[#2a2a2a] overflow-hidden flex flex-col relative">
        
        {/* Header */}
        <div className="p-6 pb-4 flex justify-between items-start z-10">
          <div>
            <p className="text-[#DC781B] text-[10px] font-bold tracking-widest uppercase mb-1">Transaction Details</p>
            <h2 className="text-white text-lg font-semibold">{transaction.reference || 'TXN_992104'}</h2>
          </div>
          <button onClick={onClose} className="text-neutral-500 hover:text-white transition-colors">
            <ModalIcon name="close" className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Section */}
        <div className="bg-black py-10 flex flex-col items-center justify-center border-b border-[#1a1a1a]">
          <div className="w-12 h-12 bg-[#1a1005] rounded-xl flex items-center justify-center mb-4 border border-[#3a200a]">
            <ModalIcon name="star" className="w-6 h-6 text-[#DC781B]" />
          </div>
          <h1 className={`text-3xl font-bold mb-2 ${amountColor}`}>
            {amountStr}
          </h1>
          <span className="bg-[#1a1005] text-[#DC781B] text-[10px] font-bold px-3 py-1 rounded tracking-widest uppercase">
            {title}
          </span>
        </div>

        {/* Details Grid */}
        <div className="p-6 grid grid-cols-2 gap-y-6 gap-x-4">
          <div>
            <p className="text-neutral-500 text-[10px] font-bold tracking-widest uppercase mb-1.5">Timestamp</p>
            <p className="text-[#d4d4d4] text-xs">{dateStr}</p>
          </div>
          <div>
            <p className="text-neutral-500 text-[10px] font-bold tracking-widest uppercase mb-1.5">Type</p>
            <div className="flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></span>
              <p className="text-[#d4d4d4] text-xs capitalize">{transaction.type}</p>
            </div>
          </div>

          <div>
            <p className="text-neutral-500 text-[10px] font-bold tracking-widest uppercase mb-1.5">Balance Evolution</p>
            <div className="flex items-center gap-2">
              <div>
                <p className="text-neutral-500 text-[9px] uppercase mb-0.5">Before</p>
                <p className="text-[#d4d4d4] text-xs">{beforeBal}</p>
              </div>
              <ModalIcon name="arrow-right" className="w-3 h-3 text-neutral-500 mt-3" />
              <div>
                <p className="text-neutral-500 text-[9px] uppercase mb-0.5">After</p>
                <p className="text-[#DC781B] text-xs">{afterBal}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-neutral-500 text-[10px] font-bold tracking-widest uppercase mb-1.5">Linked Entity</p>
            <div className="flex items-center gap-1.5 text-[#d4d4d4] text-xs">
              <ModalIcon name="link" className="w-3.5 h-3.5 text-neutral-500" />
              {linkedEntity}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-6 pb-6 flex items-center gap-4">
          <button className="flex-1 bg-[#DC781B] hover:bg-[#c96e21] text-[#2b1707] font-bold py-3 rounded-lg text-xs flex items-center justify-center gap-2 transition-colors">
            <ModalIcon name="print" className="w-4 h-4" />
            Export PDF Receipt
          </button>
          <button className="text-neutral-400 hover:text-white text-xs font-medium flex items-center gap-2 transition-colors px-4">
            <ModalIcon name="flag" className="w-4 h-4" />
            Report
          </button>
        </div>

        {/* Footer Text */}
        <div className="bg-black/ py-3 text-center border-t border-[#2a2a2a]">
          <p className="text-[#52525B] text-[9px]">
            Ledger Entry: 0x44F...92E1 | Securely signed by ChowTap Audit Engine
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;