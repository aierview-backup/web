import HttpClient from "@/shared/utils/HttpClient";
import { NEXT_PUBLIC_API_URL } from "@/shared/utils/lib";
import { AxiosError } from "axios";
import { serialize } from "cookie";
import { NextRequest, NextResponse } from "next/server";

const externalHttp = HttpClient.getInstance(NEXT_PUBLIC_API_URL);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    let response = await externalHttp.post(
      "/auth/local/signin",
      { email, password },
      { withCredentials: true }
    );

    // GETTING TOKEN
    const token = response.data.data;
    if (!token)
      return NextResponse.json(
        { message: "Token not provided by backend" },
        { status: 401 }
      );

    //GETTING USER DETAILS
    response = await externalHttp.post("/users/details", null, {
      headers: {
        Cookie: `token=${token}`,
      },
      withCredentials: true,
    });

    const user = response.data.data;
    if (!user)
      return NextResponse.json(
        { message: "Error fetching user details" },
        { status: 401 }
      );

    const tokenCookie = serialize("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
      // maxAge: 60 * 60 * 24 * 7, // 7 dias
    });

    const userCookie = serialize("user", JSON.stringify(user), {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      // maxAge: 60 * 60 * 24 * 7,
    });

    const res = NextResponse.json({ success: true });
    res.headers.append("Set-Cookie", userCookie);
    res.headers.append("Set-Cookie", tokenCookie);
    return res;
  } catch (err: unknown) {
    let message = "Login failed";
    if (err instanceof AxiosError) message = err?.response?.data?.data;
    return NextResponse.json({ message }, { status: 401 });
  }
}
