import HttpClient from "@/shared/utils/HttpClient";
import {User} from "@/shared/types";
import IUserService from "@/shared/services/contract/IUserService";

export default class UserService implements IUserService {
    private readonly externalHttp = HttpClient.getInstance(process.env.NEXT_PUBLIC_API_URL);

    async getUserDetails(): Promise<User> {
        const response = await this.externalHttp.post("/users/details", null, {withCredentials: true});
        const result = response.data?.data;
        return result;
    }

    async updateUser(params: User): Promise<User> {
        const response = await this.externalHttp.patch("/users/details", params, {withCredentials: true});
        const result = response.data?.data;
        return result;
    }
}
