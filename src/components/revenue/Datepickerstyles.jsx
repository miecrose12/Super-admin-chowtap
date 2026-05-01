import React from 'react';

const DatePickerStyles = () => {
  return (
    <style>{`
      .react-datepicker {
        background-color: #161616 !important;
        border-color: #262626 !important;
        font-family: inherit !important;
        color: #d4d4d4 !important;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
      }
      .react-datepicker__header {
        background-color: #111111 !important;
        border-bottom-color: #262626 !important;
      }
      .react-datepicker__current-month, .react-datepicker-time__header {
        color: #f5f5f5 !important;
      }
      .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
        color: #a0a0a0 !important;
      }
      .react-datepicker__day:hover, .react-datepicker__month-text:hover {
        background-color: #222 !important;
      }
      .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range {
        background-color: #E96B18 !important;
        color: #111 !important;
        font-weight: bold;
      }
      .react-datepicker__day--keyboard-selected {
        background-color: rgba(233, 107, 24, 0.3) !important;
      }
      .react-datepicker__triangle {
        display: none;
      }
    `}</style>
  );
};

export default DatePickerStyles;