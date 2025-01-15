"use client";
import { NextApiRequest, NextApiResponse } from "next";

interface TenantResponse {
  id: number;
  tenantId: string;
  name: string;
  memo?: string;
  imageUrl?: string;
  isCompleted: boolean;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TenantResponse | { error: string }>
) {
  const tenantId = "20211586";

  if (req.method === "POST") {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    const response: TenantResponse = {
      id: Date.now(), // Example static ID
      tenantId: tenantId as string,
      name,
      memo: "Optional memo",
      imageUrl: "https://example.com/image.png",
      isCompleted: false,
    };

    return res.status(200).json(response);
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
