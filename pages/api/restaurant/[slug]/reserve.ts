import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { slug, day, time, partySize } = req.query as {
    slug: string;
    day: string;
    time: string;
    partySize: string;
  };

  return res.status(201).json({
    status: 'success',
    data: { slug, day, time, partySize },
  });
};

export default handler;
