"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { Restaurant } from "@prisma/client";

interface Booking {
  id: number;
  restaurant: Restaurant;
  booking_time: Date;
  number_of_people: number;
  booker_email: string;
}

interface BookingContext {
  bookings: Booking[];
  isLoading: boolean;
  cancelBooking: (bookingId: number) => void;
}

export const BookingContext = createContext<BookingContext>({
  bookings: [],
  isLoading: false,
  cancelBooking: () => {},
});

export const BookingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBookings = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:3000/api/bookings/getBookings`
      );
      setIsLoading(false);
      return setBookings(res.data.data);
    } catch (err: any) {
      setIsLoading(false);
      return console.log(err);
    }
  };

  const cancelBooking = async (bookingId: number) => {
    setIsLoading(true);

    try {
      if (window.confirm("Are you sure you want to cancel this booking")) {
        const deleteReservation = await axios.delete(
          `http://localhost:3000/api/reserve/delete?bookingId=${bookingId}`
        );
        setBookings((prev) =>
          prev.filter((booking) => booking.id !== bookingId)
        );
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const valuItems = {
    bookings,
    isLoading,
    cancelBooking,
    setBookings,
  };

  return (
    <BookingContext.Provider value={valuItems}>
      {children}
    </BookingContext.Provider>
  );
};
