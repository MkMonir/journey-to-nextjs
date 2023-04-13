import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { first_name, last_name, email, password, city, phone } = req.body;
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
    {
      valid: validator.isStrongPassword(password),
      errorMessage: "Password is not strong enough",
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
      data: errors[0],
    });
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (user) {
    return res.status(400).json({
      status: "fail",
      data: "You already exists with the same email",
    });
  }

  if (req.method === "POST") {
    res.status(200).json({
      status: "success",
      data: "Hello world",
    });
  }
};

export default handler;
