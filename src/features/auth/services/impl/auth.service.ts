import HttpClient from "@/shared/utils/HttpClient";
import IAuthService from "@/features/auth/services/contract/IAuthService";
import {SignupType} from "@/features/auth/types/typs";

export default class AuthService implements IAuthService {
    private readonly baseUrl = "/auth";
    private readonly http = HttpClient.getInstance();

    async signup(params: SignupType): Promise<void> {
        const response = await this.http.post(`${this.baseUrl}/local/signup`, params);
        const result = response.data?.data;
        return result;
    }
}
