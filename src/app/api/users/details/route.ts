import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const rawUser = req.cookies.get("user");
  let user = null;
  if (rawUser?.value) user = JSON.parse(rawUser.value);
  return NextResponse.json({ data: user });
}
