import { PrismaClient } from "@prisma/client";
import ReservedCard from "./component/ReservedCard";

const prisma = new PrismaClient();

const fetchBookings = async () => {
  const bookings = await prisma.booking.findMany({
    select: {
      id: true,
      restaurant: true,
      booking_time: true,
      number_of_people: true,
      booker_email: true,
    },
  });

  return bookings;
};

const page = async () => {
  const bookings = await fetchBookings();

  return (
    <div className="bg-white rounded p-5 w-[70%] space-y-6">
      <div>
        <h4 className="text-2xl font-medium">Upcoming reservations</h4>
      </div>

      {bookings.map((booking, i) => (
        <ReservedCard booking={booking} key={i} />
      ))}
    </div>
  );
};

export default page;
