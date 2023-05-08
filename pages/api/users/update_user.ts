import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PATCH") {
    const { first_name, last_name, email, city, phone } = req.body;

    const errors: string[] = [];

    const validationSchema = [
      {
        valid: validator.isLength(first_name, {
          min: 1,
          max: 20,
        }),
        errorMessage: "First name is invalid",
      },
      {
        valid: validator.isLength(last_name, {
          min: 1,
          max: 20,
        }),
        errorMessage: "Last name is invalid",
      },
      {
        valid: validator.isEmail(email),
        errorMessage: "Email address is invalid",
      },
      {
        valid: validator.isMobilePhone(phone),
        errorMessage: "Phone number is invalid",
      },
      {
        valid: validator.isLength(city, {
          min: 1,
        }),
        errorMessage: "City name is Invalid",
      },
    ];

    validationSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errorMessage);
      }
    });

    if (errors.length) {
      return res.status(400).json({
        status: "fail",
        message: errors[0],
      });
    }

    const userExist = await prisma.user.findUnique({ where: { email } });

    if (!userExist) {
      return res.status(400).json({
        status: "fail",
        message: "User does not exist",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        email,
        first_name,
        last_name,
        phone,
        city,
      },
    });
  }

  return res.status(401).json({
    status: "fail",
    message: "Undefind Endpoint",
  });
};

export default handler;
