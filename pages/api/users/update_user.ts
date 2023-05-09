import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { setCookie } from "cookies-next";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PATCH") {
    const { first_name, last_name, email, city, phone, id } = req.body;

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

    const updateUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        first_name,
        last_name,
        email,
        city,
        phone,
      },
      select: {
        first_name: true,
        last_name: true,
        email: true,
        city: true,
        phone: true,
      },
    });

    if (!updateUser) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid Data Provided",
      });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET ?? "", {
      expiresIn: "10d",
    });

    setCookie("jwt", token, { res, req, maxAge: 60 * 60 * 7 * 24 });

    res.status(200).json({
      status: "success",
      message: "User updated successfully",
      data: {
        updateUser,
      },
    });
  }

  return res.status(401).json({
    status: "fail",
    message: "Undefind Endpoint",
  });
};

export default handler;
