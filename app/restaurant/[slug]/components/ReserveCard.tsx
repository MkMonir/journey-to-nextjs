'use client';

import { partySize } from '@/data';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

const ReserveCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [day, setDay] = useState(new Date().toISOString().split('T')[0]);

  const handleChangeDate = (date: Date | null) => {
    if (date) {
      setDay(date.toISOString().split('T')[0]);
      return setSelectedDate(date);
    }
    return setSelectedDate(null);
  };

  return (
    <div className="w-full lg:w-[27%] relative">
      {/* RESERVATION CARD */}
      <div className="sticky top-0 w-full bg-white rounded-sm p-3 shadow-md">
        <div className="text-center border-b border-0 border-solid border-gray-300 pb-2 font-bold">
          <h4 className="mr-7 text-lg">Make a Reservation</h4>
        </div>
        <div className="my-3 flex flex-col">
          <label htmlFor="party">Party Size</label>
          <select
            id="party"
            className="py-3 border-b border-0 border-gray-300 border-solid font-light focus-within:ring-0"
          >
            {partySize.map((party, i) => (
              <option key={i} value={party.value}>
                {party.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-1">
          <div className="mb-3 flex flex-col w-full">
            <label htmlFor="">Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleChangeDate}
              className="py-3 border-b border-0 border-gray-300 border-solid font-light text-reg w-full focus-within:ring-0"
              dateFormat="MMMM d"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="time">Time</label>
            <select
              id="time"
              className="py-3 border-b border-0 border-gray-300 border-solid  focus-within:ring-0"
            >
              <option value="1">8</option>
              <option value="3">9</option>
            </select>
          </div>
        </div>

        <button className="p-3 w-full bg-red-400 rounded-sm md:text-xl text-red-50 active:scale-95 transition-all duration-200 mt-5">
          Find a team
        </button>
      </div>
      {/* RESERVATION CARD */}
    </div>
  );
};

export default ReserveCard;
