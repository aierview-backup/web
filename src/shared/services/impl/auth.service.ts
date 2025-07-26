import HttpClient from "@/shared/utils/HttpClient";
import IAuthService from "@/shared/services/contract/IAuthService";
import {SigninType, SignupType} from "@/shared/types";

export default class AuthService implements IAuthService {
    private readonly http = HttpClient.getInstance();

    async signup(params: SignupType): Promise<void> {
        await this.http.post(`/auth/local/signup`, params);
    }

    async signin(params: SigninType): Promise<void> {
        const http = HttpClient.getInstanceAppRouter();
        console.log(http);
        await http.post("/auth/signin", params);
    }

    async signout(): Promise<void> {
        await this.http.post("/auth/signout", null, {withCredentials: true});
    }
}
