import type { NextApiRequest, NextApiResponse } from "next";
import { prhases } from "../../../services/dataApi";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;

    if (method !== "GET")
      res.status(405).json({ statusCode: 405, message: "Method not allowed" });

    res.status(200).json(prhases);
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);

    res.status(500).json({ statusCode: 500, message: message });
  }
};

export default handler;
