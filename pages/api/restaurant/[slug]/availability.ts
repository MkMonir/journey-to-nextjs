import { times } from '@/data';
import { NextApiRequest, NextApiResponse } from 'next';

const availability = (req: NextApiRequest, res: NextApiResponse) => {
  const { slug, day, time, partySize } = req.query;

  if (!day || !time || !partySize) {
    return res.status(400).json({ status: 'fail', message: 'Invalid data provided' });
  }
  const searchTimes = times.find((t) => t.time === time)?.searchTimes;

  if (!searchTimes) {
    return res.status(400).json({ status: 'fail', message: 'Invalid data provided' });
  }

  return res.status(201).json({ status: 'success', data: { searchTimes } });
};

export default availability;
