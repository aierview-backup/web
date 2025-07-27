import IAuthService from "@/shared/services/contract/IAuthService";
import { GoogleSinginType, SigninType, SignupType } from "@/shared/types";
import HttpClient from "@/shared/utils/HttpClient";

export default class AuthService implements IAuthService {
  private readonly localHttp = HttpClient.getInstance();
  private readonly externalHttp = HttpClient.getInstance(
    process.env.NEXT_PUBLIC_API_URL
  );

  async googleSingin(params: GoogleSinginType): Promise<void> {
    await this.localHttp.post(`/api/auth/google`, params);
  }

  async signup(params: SignupType): Promise<void> {
    await this.externalHttp.post(`/auth/local/signup`, params);
  }

  async signin(params: SigninType): Promise<void> {
    await this.localHttp.post("/api/auth/signin", params);
  }

  async signout(): Promise<void> {
    await this.externalHttp.post("/auth/signout", null, {
      withCredentials: true,
    });
  }
}
