import { times } from '@/data';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const availability = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug, day, time, partySize } = req.query as {
    slug: string;
    day: string;
    time: string;
    partySize: string;
  };

  if (!day || !time || !partySize) {
    return res.status(400).json({ status: 'fail', message: 'Invalid data provided' });
  }
  const searchTimes = times.find((t) => t.time === time)?.searchTimes;

  if (!searchTimes) {
    return res.status(400).json({ status: 'fail', message: 'Invalid data provided' });
  }

  const bookings = await prisma.booking.findMany({
    where: {
      booking_time: {
        gte: new Date(`${day}T${searchTimes[0]}`),
        lte: new Date(`${day}T${searchTimes[searchTimes.length - 1]}`),
      },
    },
    select: {
      number_of_peaple: true,
      booking_time: true,
      tables: true,
    },
  });

  const bookingTableObj: { [key: string]: { [key: number]: true } } = {};

  bookings.forEach((booking) => {
    bookingTableObj[booking.booking_time.toISOString()] = booking.tables.reduce((obj, table) => {
      return {
        ...obj,
        [table.table_id]: true,
      };
    }, {});
  });

  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      tables: true,
      open_time: true,
      close_time: true,
    },
  });

  if (!restaurant) {
    return res.status(400).json({ status: 'fail', message: 'Invalid data provided' });
  }

  const tables = restaurant.tables;

  const searchTimesWithTables = searchTimes.map((searchTime) => {
    return {
      date: new Date(`${day}T${searchTime}`),
      time: searchTime,
      tables,
    };
  });

  searchTimesWithTables.forEach((t) => {
    t.tables = t.tables.filter((table) => {
      if (bookingTableObj[t.date.toISOString()]) {
        if (bookingTableObj[t.date.toISOString()][table.id]) return false;
      }
      return true;
    });
  });

  const availabilities = searchTimesWithTables
    .map((t) => {
      const sumSeats = t.tables.reduce((sum, table) => {
        return sum + table.seats;
      }, 0);

      return {
        time: t.time,
        available: sumSeats >= parseInt(partySize),
      };
    })
    .filter((availability) => {
      const timeIsAfterOpenHour =
        new Date(`${day}T${availability.time}`) >= new Date(`${day}T${restaurant.open_time}`);
      const timeIsBeforeCloseHour =
        new Date(`${day}T${availability.time}`) <= new Date(`${day}T${restaurant.close_time}`);

      return timeIsAfterOpenHour && timeIsBeforeCloseHour;
    });

  return res.status(201).json({
    status: 'success',
    data: { searchTimes, bookings, bookingTableObj, tables, searchTimesWithTables, availabilities },
  });
};

export default availability;
// vivaan-fine-indian-cuisine-ottawa
