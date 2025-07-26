import HttpClient from "@/shared/utils/HttpClient";
import {User} from "@/shared/types";
import IUserService from "@/shared/services/contract/IUserService";

export default class UserService implements IUserService {
    private readonly http = HttpClient.getInstance();

    async getUserDetails(): Promise<User> {
        const response = await this.http.post("/users/details", null, {withCredentials: true});
        const result = response.data?.data;
        return result;
    }

    async updateUser(params: User): Promise<User> {
        const response = await this.http.patch("/users/details", params, {withCredentials: true});
        const result = response.data?.data;
        return result;
    }
}
