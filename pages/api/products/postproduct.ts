import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const Prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url, image, name } = req.body;
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ message: "Not Authenticated" });
    return;
  }
  try {
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
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
