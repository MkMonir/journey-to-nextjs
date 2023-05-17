import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { rating, text, first_name, last_name, user_id, restaurant_id } =
      req.body as {
        rating: number;
        text: string;
        first_name: string;
        last_name: string;
        user_id: number;
        restaurant_id: number;
      };

    if (
      !rating ||
      !text ||
      !first_name ||
      !last_name ||
      !user_id ||
      !restaurant_id
    ) {
      return res.status(401).json({
        status: "Fail",
        message: "Invalid Data",
      });
    }

    const review = await prisma.review.create({
      data: { rating, text, first_name, last_name, user_id, restaurant_id },
    });

    return res.status(201).json({
      status: "success",
      data: review,
    });
  }

  return res.status(401).json({
    status: "Fail",
    message: "Undefined Endpoint",
  });
};

export default handler;
