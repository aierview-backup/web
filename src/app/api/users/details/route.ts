import HttpClient from "@/shared/utils/HttpClient";
import { NEXT_PUBLIC_API_URL } from "@/shared/utils/lib";
import { NextRequest, NextResponse } from "next/server";

const externalHttp = HttpClient.getInstance(NEXT_PUBLIC_API_URL);

export async function GET(req: NextRequest) {
  const rawUser = req.cookies.get("user");
  let user = null;
  if (rawUser?.value) user = JSON.parse(rawUser.value);
  return NextResponse.json({ data: user });
}
