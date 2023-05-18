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
import { getCookie } from "cookies-next";

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
  error: string;
  cancelBooking: (bookingId: number) => void;
}

export const BookingContext = createContext<BookingContext>({
  bookings: [],
  isLoading: false,
  error: "",
  cancelBooking: () => {},
});

export const BookingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBookings = async () => {
    setIsLoading(true);
    try {
      const jwt = getCookie("jwt");

      const res = await axios.get(
        `http://localhost:3000/api/bookings/getBookings`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

      setIsLoading(false);
      return setBookings(res.data.data);
    } catch (err: any) {
      setIsLoading(false);
      setError(err.response.data.message);
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
    } catch (err: any) {
      setIsLoading(false);
      setError(err.response.data.message);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const valuItems = {
    bookings,
    isLoading,
    error,
    cancelBooking,
    setBookings,
  };

  return (
    <BookingContext.Provider value={valuItems}>
      {children}
    </BookingContext.Provider>
  );
};
