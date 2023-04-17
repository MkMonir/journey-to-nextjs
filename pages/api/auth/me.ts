import { NextApiRequest, NextApiResponse } from 'next';

import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const bearerToken = req.headers['authorization'] as string;
  const token = bearerToken.split(' ')[1];

  const payload = jwt.decode(token) as { email: string };

  if (!payload.email) {
    return res.status(401).json({
      errorMessage: 'Unauthorized request',
    });
  }

  const user: any = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (!user) {
    return res.status(401).json({
      errorMessage: 'User not found',
    });
  }

  user.password = undefined;

  return res.status(201).json({
    status: 'success',
    data: user,
  });
}
