'use client';
import Loading, { Spinner } from '@/app/components/Loading';
import { partySize as partySizes, times } from '@/data';
import useAvailabilities from '@/hooks/useAvailabilities';
import { Time, convertToDisplayTime } from '@/utils/convertToDisplayTime';
import Link from 'next/link';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

const ReserveCard = ({
  openTime,
  closeTime,
  slug,
}: {
  openTime: string;
  closeTime: string;
  slug: string;
}) => {
  const { data, loading, fetchAvailabilities } = useAvailabilities();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [day, setDay] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState(openTime);
  const [partySize, setPartySize] = useState('2');

  const handleChangeDate = (date: Date | null) => {
    if (date) {
      setDay(date.toISOString().split('T')[0]);
      return setSelectedDate(date);
    }
    return setSelectedDate(null);
  };

  const handleClick = () => {
    fetchAvailabilities({ slug, day, time, partySize });
  };

  const filterTimesbyOpenWindow = () => {
    const timesInWindow: typeof times = [];
    let isWithonWindow = false;

    times.forEach((time) => {
      if (!isWithonWindow && time.time === openTime) {
        isWithonWindow = true;
      }

      if (isWithonWindow) {
        timesInWindow.push(time);
      }

      if (time.time === closeTime) {
        isWithonWindow = false;
      }
    });
    return timesInWindow;
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
            className="py-3 border-b border-0 border-gray-300 border-solid focus-within:ring-0"
            onChange={(e) => setPartySize(e.target.value)}
            value={partySize}
          >
            {partySizes.map((party, i) => (
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
              minDate={new Date()}
              onChange={handleChangeDate}
              className="py-3 border-b border-0 border-gray-300 border-solid w-full focus-within:ring-0"
              dateFormat="MMMM d"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="time">Time</label>
            <select
              id="time"
              className="py-3 border-b border-0 border-gray-300 border-solid  focus-within:ring-0"
              onChange={(e) => setTime(e.target.value)}
              value={time}
            >
              {filterTimesbyOpenWindow().map((time, i) => (
                <option value={time.time} key={i}>
                  {time.displayTime}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          className="p-3 w-full bg-teal-400 rounded-sm md:text-xl text-red-50 active:scale-95 transition-all duration-200 mt-5"
          onClick={handleClick}
        >
          {loading ? <Spinner /> : 'Find a time'}
        </button>

        {data && data.length ? (
          <div className="mt-4">
            <p className="text-reg">Select a Time</p>
            <div className="flex flex-wrap mt-2">
              {data.map((time, i) => {
                return time.available ? (
                  <Link
                    href={`/reserve/${slug}?date=${day}T${time.time}&partySize=${partySize}`}
                    className="bg-red-600 cursor-pointer p-2 w-24 text-center text-white mb-3 rounded mr-3"
                    key={i}
                  >
                    <p className="text-sm font-bold">{convertToDisplayTime(time.time as Time)}</p>
                  </Link>
                ) : (
                  <p className="bg-gray-300 p-2 w-24 mb-3 rounded mr-3"></p>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>

      {/* RESERVATION CARD */}
    </div>
  );
};

export default ReserveCard;
