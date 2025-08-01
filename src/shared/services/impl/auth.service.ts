import IAuthService from "@/shared/services/contract/IAuthService";
import { GoogleSinginType, SigninType, SignupType } from "@/shared/types";
import HttpClient from "@/shared/utils/HttpClient";
import { NEXT_PUBLIC_API_URL } from "@/shared/utils/lib";

export default class AuthService implements IAuthService {
  private readonly externalHttp = HttpClient.getInstance(NEXT_PUBLIC_API_URL);

  async googleSingin(params: GoogleSinginType): Promise<void> {
    await this.externalHttp.post(`/auth/external/google`, params);
  }

  async signup(params: SignupType): Promise<void> {
    await this.externalHttp.post(`/auth/local/signup`, params);
  }

  async signin(params: SigninType): Promise<void> {
    await this.externalHttp.post("/auth/local/signin", params);
  }

  async signout(): Promise<void> {
    await this.externalHttp.post("/auth/signout", null);
  }
}
