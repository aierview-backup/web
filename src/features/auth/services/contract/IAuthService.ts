import {SignupType} from "@/features/auth/types/typs";

export default interface IAuthService {
    signup(params: SignupType): Promise<void>;
}