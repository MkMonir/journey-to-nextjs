import { NextApiRequest, NextApiResponse } from "next";

import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bearerToken = req.headers["authorization"] as string;
  const token = bearerToken.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized request",
    });
  }

  const payload = jwt.decode(token) as { email: string };

  if (!payload.email) {
    return res.status(401).json({
      message: "Unauthorized request",
    });
  }

  const user: any = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
    select: {
      email: true,
      first_name: true,
      last_name: true,
      city: true,
      phone: true,
      id: true,
    },
  });

  if (!user) {
    return res.status(401).json({
      message: "Unauthorized request",
    });
  }

  user.password = undefined;

  return res.status(201).json({
    status: "success",
    data: user,
  });
}
