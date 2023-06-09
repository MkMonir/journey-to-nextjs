import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { setCookie } from "cookies-next";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const errors: string[] = [];

    const validationSchema = [
      {
        valid: validator.isEmail(email),
        message: "Email address is invalid",
      },
      {
        valid: validator.isLength(password, { min: 1 }),
        message: "Password invalid",
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

    const user: any = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(400).json({
        status: "fail",
        message: "Incorrect email or password",
      });
    }

    const passwordCorrect = await bcrypt.compare(password, user.password);

    if (!passwordCorrect) {
      return res.status(400).json({
        status: "fail",
        message: "Incorrect email or password",
      });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET ?? "", {
      expiresIn: "10d",
    });

    user.password = undefined;

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
