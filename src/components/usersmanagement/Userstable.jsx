import React from 'react';
import TableHeader from './Tableheader';
import TableBody from './TableBody';


export default function UsersTable({ data, onRowClick }) {
  return (
    <div className="overflow-x-auto min-h-[400px]">
      <table className="w-full text-left border-collapse">
        <TableHeader />
        <TableBody data={data} onRowClick={onRowClick} />
      </table>
    </div>
  );
}