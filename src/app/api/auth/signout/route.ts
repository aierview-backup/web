import HttpClient from "@/shared/utils/HttpClient";
import { NEXT_PUBLIC_API_URL } from "@/shared/utils/lib";
import { AxiosError } from "axios";
import { serialize } from "cookie";
import { NextRequest, NextResponse } from "next/server";

const externalHttp = HttpClient.getInstance(NEXT_PUBLIC_API_URL);

export async function POST(req: NextRequest) {
  try {
    await externalHttp.post("/auth/signout", null, {
      withCredentials: true,
    });

    const removeToken = serialize("token", "", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 0,
    });

    const removeUser = serialize("user", "", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 0,
    });

    const res = NextResponse.json({ success: true });
    res.headers.append("Set-Cookie", removeToken);
    res.headers.append("Set-Cookie", removeUser);
    return res;
  } catch (err: unknown) {
    let message = "Signout failed";
    if (err instanceof AxiosError) message = err?.response?.data?.data;
    return NextResponse.json({ message }, { status: 401 });
  }
}
