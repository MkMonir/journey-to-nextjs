'use client';

import { BookingContext } from '@/app/context/BookingContext';
import React, { useContext, useEffect } from 'react';
import ReservedCard from './ReservedCard';
import { Spinner } from '@/app/components/Loading';
import Alert from '@/app/components/Alert';
import { AuthContext } from '@/app/context/AuthContext';

const Reservations = () => {
  const { bookings, isLoading, error, fetchBookings } =
    useContext(BookingContext);
  const { data } = useContext(AuthContext);

  useEffect(() => {
    fetchBookings();
  }, [data]);

  const isValidDate = () => {
    return bookings
      .filter((booking) => {
        const compareDate = new Date(booking.booking_time);
        const presentDate = new Date();

        if (compareDate < presentDate) {
          return false;
        } else if (compareDate > presentDate) {
          return true;
        } else {
          return true;
        }
      })
      .filter((booking) => booking.booker_email === data?.email);
  };

  return (
    <div>
      {isLoading ? (
        <div className='grid  w-full place-items-center'>
          <Spinner />
        </div>
      ) : (
        <>
          {error && !data ? (
            <Alert text={error} />
          ) : (
            <>
              {bookings.length !== 0 && isValidDate().length > 0 ? (
                <>
                  {isValidDate().map((booking, i) => (
                    <ReservedCard booking={booking} key={i} />
                  ))}
                </>
              ) : (
                <div>
                  <h4>You have no upcoming reservations</h4>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Reservations;
