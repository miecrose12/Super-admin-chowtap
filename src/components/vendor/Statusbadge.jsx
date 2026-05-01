import React from 'react';
import { getStatusStyles } from '../../utils/Vendors';

export default function StatusBadge({ status }) {
  return (
    <span className={`px-2 py-1 rounded text-[10px] font-bold tracking-wider ${getStatusStyles(status)}`}>
      {status}
    </span>
  );
}