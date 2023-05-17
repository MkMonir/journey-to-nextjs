import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "DELETE") {
    const { bookingId } = req.query as unknown as { bookingId: number };

    if (!bookingId) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid Data",
      });
    }

    const reseravtion = await prisma.booking.findUnique({
      where: {
        id: +bookingId,
      },
      select: {
        id: true,
        restaurant_id: true,
      },
    });

    if (!reseravtion) {
      return res.status(401).json({
        status: "fail",
        message: "No reservation at this id",
      });
    }

    await prisma.bookingsOnTables.deleteMany({
      where: {
        booking_id: reseravtion.id,
      },
    });

    const deletedReservation = await prisma.booking.delete({
      where: {
        id: reseravtion.id,
      },
    });

    return res.status(200).json({
      status: "success",
      data: deletedReservation.id,
    });
  }

  return res.status(401).json({
    status: "fail",
    message: "Undefind Endpoint",
  });
};

export default handler;
