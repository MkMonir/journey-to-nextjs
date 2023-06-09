import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { setCookie } from "cookies-next";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { first_name, last_name, email, password, city, phone } = req.body;
    const errors: string[] = [];

    const validationSchema = [
      {
        valid: validator.isLength(first_name, {
          min: 1,
          max: 20,
        }),
        message: "First name is invalid",
      },
      {
        valid: validator.isLength(last_name, {
          min: 1,
          max: 20,
        }),
        message: "Last name is invalid",
      },
      {
        valid: validator.isEmail(email),
        message: "Email address is invalid",
      },
      {
        valid: validator.isMobilePhone(phone),
        message: "Phone number is invalid",
      },
      {
        valid: validator.isLength(city, {
          min: 1,
        }),
        message: "City name is Invalid",
      },
      {
        valid: validator.isStrongPassword(password),
        message: "Password is not strong enough",
      },
    ];

    validationSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.message);
      }
    });

    if (errors.length) {
      return res.status(400).json({
        status: "fail",
        message: errors[0],
      });
    }

    const userExist = await prisma.user.findUnique({ where: { email } });

    if (userExist) {
      return res.status(400).json({
        status: "fail",
        message: "You already have an account with this email address",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        first_name,
        last_name,
        email,
        password: hashedPassword,
        city,
        phone,
      },
    });

    const token = jwt.sign({ email }, process.env.JWT_SECRET ?? "", {
      expiresIn: "10d",
    });

    setCookie("jwt", token, { res, req, maxAge: 60 * 60 * 7 * 24 });

    return res.status(200).json({
      status: "success",
      data: user,
    });
  }

  return res.status(401).json({
    status: "fail",
    message: "Undefind Endpoint",
  });
};

export default handler;
