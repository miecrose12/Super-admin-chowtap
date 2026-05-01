import { Bike } from 'lucide-react';

const CourierInfoCard = () => {
  return (
    <div className="bg-[#1A1A1A] p-4 rounded-lg border border-[#2A2A2A] flex flex-col h-[120px]">
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-[11px] font-bold text-[#888] uppercase tracking-wider">
          Courier Info
        </h2>
        <Bike size={16} className="text-[#888]" />
      </div>
      <div>
        <p className="text-[#E0E0E0] text-base font-medium">
          Rider Yet To Be Assigned
        </p>
      </div>
    </div>
  );
};

export default CourierInfoCard;