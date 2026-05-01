import React from 'react';
import DateRangePickerCustom from './Daterangepickercustom';
import PeriodDropdown from './Perioddropdown';



const RevenueHeader = ({ 
  selectedPeriod, 
  startDate, 
  endDate, 
  periods, 
  onPeriodToggle, 
  onPeriodSelect, 
  onStartDateChange, 
  onEndDateChange, 
  onApplyDateRange,
  isDropdownOpen,
  dropdownRef 
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <h2 className="text-[26px] font-bold tracking-wide">Revenue Management</h2>
      
      <div className="flex flex-wrap items-center gap-3 relative z-40">
        {selectedPeriod === 'Custom period' && (
          <DateRangePickerCustom 
            startDate={startDate}
            endDate={endDate}
            onStartChange={onStartDateChange}
            onEndChange={onEndDateChange}
            onApply={onApplyDateRange}
          />
        )}

        <PeriodDropdown 
          isOpen={isDropdownOpen}
          selectedPeriod={selectedPeriod}
          periods={periods}
          onToggle={onPeriodToggle}
          onSelect={onPeriodSelect}
          dropdownRef={dropdownRef}
        />
      </div>
    </div>
  );
};

export default RevenueHeader;