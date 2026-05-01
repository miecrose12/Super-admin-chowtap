import React from 'react';

const TABLE_HEADERS = [
  'USER PROFILE',
  'PHONE NUMBER',
  'ORDERS',
  'TOTAL SPENT',
  'LAST ACTIVITY',
  'STATUS'
];

export default function TableHeader() {
  return (
    <thead>
      <tr className="bg-[#121212] border-b border-gray-800">
        {TABLE_HEADERS.map((header) => (
          <th key={header} className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#C7C7C7]">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}