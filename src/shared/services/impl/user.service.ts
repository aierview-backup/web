import IUserService from "@/shared/services/contract/IUserService";
import { User } from "@/shared/types";
import HttpClient from "@/shared/utils/HttpClient";
import { NEXT_PUBLIC_API_URL } from "@/shared/utils/lib";

export default class UserService implements IUserService {
  private readonly externalHttp = HttpClient.getInstance(NEXT_PUBLIC_API_URL);
  private readonly localHttp = HttpClient.getInstance();

  async getUserDetails(): Promise<User> {
    const response = await this.externalHttp.get("/users/details", {
      withCredentials: true,
    });
    const result = response.data?.data;
    return result;
  }

  async getCookieUser(): Promise<User> {
    const response = await this.localHttp.get("/api/users/details");
    const result = response.data?.data;
    return result;
  }

  async updateUser(params: User): Promise<User> {
    const response = await this.externalHttp.patch("/users/details", params, {
      withCredentials: true,
    });
    const result = response.data?.data;
    return result;
  }
}
