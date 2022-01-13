import { NextApiRequest, NextApiResponse } from "next";
import { decode, getToken } from "next-auth/jwt";
import httpProxyMiddleware from "next-http-proxy-middleware";

const TOKEN_SECRET = process.env.SECRET || "";
const API_URL = process.env.API_URL || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = await getToken({ req, secret: TOKEN_SECRET, raw: true });

  const session = await decode({ token, secret: TOKEN_SECRET });

  const headers = {
    Authorization: `Bearer ${session?.accessToken}`,
  };

  return httpProxyMiddleware(req, res, {
    target: API_URL,
    headers,
  });
}
