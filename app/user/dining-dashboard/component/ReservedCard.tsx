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
import axios from "axios";

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
  const [deletedId, setDeletedId] = useState(0);

  const [day, time] = new Date(booking.booking_time).toISOString().split("T");

  const handleDelete = async (bookingId: number) => {
    try {
      if (window.confirm("Are you sure you want to cancel this booking")) {
        const deleteReservation = await axios.delete(
          `http://localhost:3000/api/reserve/delete?bookingId=${bookingId}`
        );

        if (deleteReservation.data.status === "success") {
          setDeletedId(deleteReservation.data.data);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {booking.booker_email === data?.email && booking.id !== deletedId ? (
        <div className="block p-4 border-primary rounded-md hover:shadow-md translate-all duration-300 ease-in-out ">
          <div className="flex gap-4">
            <img
              src={booking.restaurant.mainImage}
              alt=""
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
                onClick={() => handleDelete(booking.id)}
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
