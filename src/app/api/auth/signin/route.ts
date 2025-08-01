import HttpClient from "@/shared/utils/HttpClient";
import { NEXT_PUBLIC_API_URL } from "@/shared/utils/lib";
import { serialize } from "cookie";
import { NextRequest, NextResponse } from "next/server";

const externalHttp = HttpClient.getInstance(NEXT_PUBLIC_API_URL);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { user } = body;

  console.log(user);
  const userCookie = serialize("user", JSON.stringify(user), {
    httpOnly: true,
    secure: true,
    // secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    // maxAge: 60 * 60 * 24 * 7,
  });

  const res = NextResponse.json({ success: true });
  res.headers.append("Set-Cookie", userCookie);
  return res;
}
