import { User } from "@/shared/types";

export default interface IUserService {
  getUserDetails(): Promise<User>;
  getCookieUser(): Promise<User>;
  updateUser(params: User): Promise<User>;
}
