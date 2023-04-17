import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;
  const errors: string[] = [];

  const validationSchema = [
    {
      valid: validator.isEmail(email),
      errorMessage: 'Email address is invalid',
    },
    {
      valid: validator.isLength(password, { min: 1 }),
      errorMessage: 'Password invalid',
    },
  ];

  validationSchema.forEach((check) => {
    if (!check.valid) {
      errors.push(check.errorMessage);
    }
  });

  if (errors.length) {
    return res.status(400).json({
      status: 'fail',
      data: errors[0],
    });
  }

  const userExist = await prisma.user.findUnique({ where: { email } });

  if (!userExist) {
    return res.status(400).json({
      status: 'fail',
      message: 'Incorrect email or password',
    });
  }

  const passwordCarrect = await bcrypt.compare(password, userExist.password);

  if (!passwordCarrect) {
    return res.status(400).json({
      status: 'fail',
      message: 'Incorrect email or password',
    });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET ?? '', { expiresIn: '10d' });

  if (req.method === 'POST') {
    res.status(200).json({
      status: 'success',
      token,
      data: userExist,
    });
  }

  return res.status(401).json({
    status: 'fail',
    message: 'Undefind Endpoint',
  });
};

export default handler;
