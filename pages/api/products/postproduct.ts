import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const Prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url, image, name } = req.body;

  if (req.method === "POST") {
    if (!url || !image || !name) {
      res.status(400).json({ message: "Data is Required" });
      return;
    }
    await Prisma.products.createMany({
      data: {
        image: image,
        name: name,
        url: url,
      },
    });
    res.status(200).json({ message: "Product created", data: req.body });
  } else {
    res.status(400).json({ message: "Invalid request" });
  }
}
