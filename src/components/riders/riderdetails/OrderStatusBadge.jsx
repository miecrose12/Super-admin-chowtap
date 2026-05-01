import React from 'react';
import { STATUS_STYLES } from '../../../utils/RiderDetailsUtils';

const OrderStatusBadge = ({ status }) => {
  const style = STATUS_STYLES[status];
  
  if (!style) return null;

  return (
    <span 
      className="px-2 py-1 text-[10px] font-bold rounded uppercase tracking-wider inline-flex items-center gap-1.5"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      <span 
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: style.dot }}
      ></span>
      {status}
    </span>
  );
};

export default OrderStatusBadge;