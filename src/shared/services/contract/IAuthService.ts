import {SignupType} from "@/shared/types";

export default interface IAuthService {
    signup(params: SignupType): Promise<void>;

    signin(params: SignupType): Promise<void>;

    signout(): Promise<void>;
}
