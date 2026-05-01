import React from 'react';
import UserTableRow from './Usertablerow';


export default function TableBody({ data, onRowClick }) {
  return (
    <tbody className="divide-y divide-gray-800/60">
      {data.map((row) => (
        <UserTableRow 
          key={row.id} 
          row={row} 
          onRowClick={onRowClick}
        />
      ))}
    </tbody>
  );
}