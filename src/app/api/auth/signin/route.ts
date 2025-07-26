import {NextRequest, NextResponse} from "next/server";
import {serialize} from "cookie";
import HttpClient from "@/shared/utils/HttpClient";
import {AxiosError} from "axios";

const http = HttpClient.getInstance();

export async function POST(req: NextRequest) {

    try {
        const body = await req.json();
        const {email, password} = body;

        const response = await http.post("/auth/local/signin",
            {email, password}, {withCredentials: true});

        const token = response.data.data;
        if (!token) return NextResponse.json({message: "Token not provided by backend"}, {status: 401});

        const cookie = serialize("token", token, {
            httpOnly: true,
            secure: true,
            // secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            // maxAge: 60 * 60 * 24,
        });
        console.log(cookie);
        const res = NextResponse.json({success: true});
        res.headers.set("Set-Cookie", cookie);
        return res;

    } catch (err: unknown) {
        let message = "Login failed";
        if (err instanceof AxiosError) message = err?.response?.data?.data;
        return NextResponse.json({message}, {status: 401});
    }
}
