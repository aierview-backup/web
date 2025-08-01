import { serialize } from "cookie";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const deletedCookie = serialize("user", "", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });

  const res = NextResponse.json({ success: true });
  res.headers.set("Set-Cookie", deletedCookie);
  return res;
}
