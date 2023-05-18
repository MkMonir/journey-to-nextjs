"use client";

import Image from "next/image";
import done from "./..//../../../public/icons/done.png";
import avatar from "./..//../../../public/icons/avatar.png";
import calender from "./..//../../../public/icons/calender.png";
import Link from "next/link";
import { Restaurant } from "@prisma/client";
import { useContext, useState } from "react";
import { AuthContext } from "@/app/context/AuthContext";
import { Time, convertToDisplayTime } from "@/utils/convertToDisplayTime";
import { format } from "date-fns";
import { BookingContext } from "@/app/context/BookingContext";

const ReservedCard = ({
  booking,
}: {
  booking: {
    id: number;
    restaurant: Restaurant;
    booking_time: Date;
    number_of_people: number;
    booker_email: string;
  };
}) => {
  const { data } = useContext(AuthContext);
  const { cancelBooking } = useContext(BookingContext);

  const [day, time] = new Date(booking.booking_time).toISOString().split("T");

  return (
    <>
      {booking.booker_email === data?.email ? (
        <div className="block p-4 border-primary rounded-md hover:shadow-md translate-all duration-300 ease-in-out ">
          <div className="flex gap-4">
            <Image
              src={booking.restaurant.mainImage}
              alt=""
              width={400}
              height={400}
              className="w-[20%] h-32 rounded-md object-cover"
            />

            <div className="w-[80%] space-y-2">
              <Link
                href={`/restaurant/${booking.restaurant.slug}`}
                className="text-lg font-medium"
              >
                {booking.restaurant.name}
              </Link>

              <div className="flex items-center gap-3 font-medium">
                <div className="w-5 h-5 bg-green-600 rounded-full grid place-items-center">
                  <Image src={done} alt="" className="w-3 h-3" />
                </div>
                <p>Reservation Completed</p>
              </div>

              <div className="flex gap-5">
                <div className="flex gap-1">
                  <Image src={avatar} alt="" className="w-6 h-6" />
                  <p>{booking.number_of_people}</p>
                </div>

                <div className="flex gap-1">
                  <Image src={calender} alt="" className="w-6 h-6" />
                  <p>{format(new Date(day), "ccc, LLL d")} at</p>
                  <p>{convertToDisplayTime(time as Time)}</p>
                </div>
              </div>

              <button
                className="text-lg text-red-500 cursor-pointer"
                onClick={() => cancelBooking(booking.id)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="text-xl font-medium">
          You have no upcoming reservations
        </h2>
      )}
    </>
  );
};

export default ReservedCard;
