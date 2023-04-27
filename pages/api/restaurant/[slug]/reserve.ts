import findAvailableTables from '@/services/restaurant/findAvailableTables';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug, day, time, partySize } = req.query as {
    slug: string;
    day: string;
    time: string;
    partySize: string;
  };

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
    return res.status(400).json({ status: 'fail', message: 'Restaurant not found' });
  }

  if (
    new Date(`${day}T${time}`) < new Date(`${day}T${restaurant.open_time}`) ||
    new Date(`${day}T${time}`) > new Date(`${day}T${restaurant.close_time}`)
  ) {
    return res.status(400).json({ status: 'fail', message: 'Restaurant is not open at that time' });
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

  const searchTimeWithTables = searchTimesWithTables.find(
    (t) => t.date.toISOString() === new Date(`${day}T${time}`).toISOString()
  );

  const tablesCount: { 2: number[]; 4: number[] } = { 2: [], 4: [] };

  searchTimeWithTables?.tables.forEach((table) => {
    if (table.seats === 2) {
      tablesCount[2].push(table.id);
    } else {
      tablesCount[4].push(table.id);
    }
  });

  return res.status(201).json({
    status: 'success',
    data: tablesCount,
  });
};

export default handler;
