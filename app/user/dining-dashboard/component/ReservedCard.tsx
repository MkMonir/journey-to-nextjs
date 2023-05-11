"use client";

import Image from "next/image";
import done from "./..//../../../public/icons/done.png";
import avatar from "./..//../../../public/icons/avatar.png";
import calender from "./..//../../../public/icons/calender.png";
import Link from "next/link";
import { Restaurant } from "@prisma/client";
import { useContext } from "react";
import { AuthContext } from "@/app/context/AuthContext";
import { Time, convertToDisplayTime } from "@/utils/convertToDisplayTime";
import { format } from "date-fns";

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

  const [day, time] = new Date(booking.booking_time).toISOString().split("T");

  return (
    <>
      {booking.booker_email === data?.email ? (
        <Link
          href={`/restaurant/${booking.restaurant.slug}`}
          className="block p-4 border-primary rounded-md hover:shadow-md translate-all duration-300 ease-in-out "
        >
          <div className="flex gap-4">
            <img
              src={booking.restaurant.mainImage}
              alt=""
              className="w-[20%] h-32 rounded-md object-cover"
            />

            <div className="w-[80%] space-y-2">
              <h2 className="text-lg">{booking.restaurant.name}</h2>

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
            </div>
          </div>
        </Link>
      ) : (
        ""
      )}
    </>
  );
};

export default ReservedCard;
