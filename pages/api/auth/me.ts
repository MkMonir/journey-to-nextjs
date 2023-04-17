import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import { promisify } from 'util';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const token =
    req.headers['authorization'] && (req.headers['authorization'].split(' ')[1] as string);

  if (!token) {
    return res.status(401).json({
      status: 'fail',
      message: 'You are not logged in. Please login first.',
    });
  }

  const decoded: any = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const user: any = await prisma.user.findUnique({
    where: {
      email: decoded.email,
    },
  });

  user.password = undefined;

  return res.status(200).json({ status: 'success', data: user });
};

export default handler;
