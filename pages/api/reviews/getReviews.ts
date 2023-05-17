import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { restaurant_id } = req.query as unknown as { restaurant_id: number };

    const id = +restaurant_id;

    const reviews = await prisma.review.findMany({
      where: { restaurant_id: id },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        text: true,
        rating: true,
        restaurant_id: true,
        user_id: true,
      },
    });

    return res.status(200).json({
      status: "success",
      data: reviews,
    });
  }

  return res.status(401).json({
    status: "fail",
    message: "Undefined Endpoint",
  });
};

export default handler;
