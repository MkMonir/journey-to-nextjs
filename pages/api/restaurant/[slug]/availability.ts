import { times } from '@/data';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const availability = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug, day, time, partySize } = req.query;

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

  return res.status(201).json({ status: 'success', data: { bookings } });
};

export default availability;
// vivaan-fine-indian-cuisine-ottawa
