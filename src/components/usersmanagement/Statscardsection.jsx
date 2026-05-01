import React from 'react';
import TotalUsersCard from './Totaluserscard';
import BiggestCustomerCard from './Biggestcustomercar';


export default function StatsCardsSection({ totalItems }) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 xl:gap-6 w-full mb-8">
      <TotalUsersCard totalItems={totalItems} />
      <BiggestCustomerCard />
    </div>
  );
}