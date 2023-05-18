"use client";

import { BookingContext } from "@/app/context/BookingContext";
import React, { useContext } from "react";
import ReservedCard from "./ReservedCard";
import { Spinner } from "@/app/components/Loading";
import Alert from "@/app/components/Alert";

const Reservations = () => {
  const { bookings, isLoading, error } = useContext(BookingContext);

  return (
    <div>
      {isLoading ? (
        <div className="grid w-full place-items-center">
          <Spinner />
        </div>
      ) : (
        <>
          {bookings.length ? (
            <>
              {bookings?.map((booking, i) => (
                <React.Fragment key={i}>
                  {new Date().getDate() -
                    new Date(booking.booking_time).getDate() <
                    0 && <ReservedCard booking={booking} />}
                </React.Fragment>
              ))}
            </>
          ) : (
            <div>
              {error ? (
                <Alert text={error} />
              ) : (
                <h4>You have no upcoming reservations</h4>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Reservations;
