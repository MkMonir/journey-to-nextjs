import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const bookings = await prisma.booking.findMany({
      select: {
        id: true,
        restaurant: true,
        booking_time: true,
        number_of_people: true,
        booker_email: true,
      },
    });

    return res.status(200).json({
      status: "success",
      data: bookings,
    });
  }

  return res.status(401).json({
    status: "fail",
    message: "Undefined Endpoint",
  });
};

export default handler;
