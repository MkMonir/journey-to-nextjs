import findAvailableTables from '@/services/restaurant/findAvailableTables';
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

  const searchTimesWithTables = await findAvailableTables({
    day,
    time,
    res,
    restaurant,
  });

  if (!searchTimesWithTables) {
    return res.status(400).json({
      errorMessage: 'Invalid data provided',
    });
  }

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
    data: { availabilities },
  });
};

export default availability;
// vivaan-fine-indian-cuisine-ottawa
