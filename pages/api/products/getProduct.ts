import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const Prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const products = await Prisma.products.findMany();
      res.status(200).json({ message: "succes", products });
    } else {
      res.status(400).json({ message: "Invalid request" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
