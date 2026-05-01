import React from 'react';

const UserStats = () => {
  const stats = [
    { title: "ACTIVE VOUCHERS", value: "Student" },
    { title: "VOUCHER AMOUNT", value: "N21,240.50" },
    { title: "GIFT VOUCHER", value: "N21,240.50" },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 mb-10">
      {stats.map((card, idx) => (
        <div key={idx} className="bg-[#1c1c1c] p-6 rounded-md border-r-4 border-r-[#e07a3e]">
          <p className="text-xs text-gray-400 font-semibold tracking-wider mb-3">{card.title}</p>
          <p className="text-3xl font-bold">{card.value}</p>
        </div>
      ))}
      <div className="bg-[#1c1c1c] p-6 rounded-md border-r-4 border-r-[#e07a3e]">
        <p className="text-xs text-[#e07a3e] font-semibold tracking-wider mb-3">CURRENT WALLET BALANCE</p>
        <p className="text-3xl font-bold">482.50 <span className="text-xl text-[#e07a3e] font-medium">NGN</span></p>
      </div>
    </div>
  );
};

export default UserStats;