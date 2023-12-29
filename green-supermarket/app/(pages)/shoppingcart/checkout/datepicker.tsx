// components/DatePicker.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
  
    
    <DatePicker
    selected={selectedDate}
    onChange={(date: Date | null) => setSelectedDate(date)}
    dateFormat="MM/dd/yyyy"
    placeholderText='Set date'
    className="border pl-4 pr-4 py-3 bg-white rounded-md border-Green focus:outline-none focus:border-DarkGreen3 focus:border-2 sm:text-xs md:text-sm lg:text-md w-full"
  />
  );
};

export default CustomDatePicker;
