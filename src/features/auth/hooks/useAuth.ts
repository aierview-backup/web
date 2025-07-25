import { useState } from "react";
import AuthService from "@/features/auth/services/impl/auth.service";
import {SignupType} from "@/features/auth/types/typs";
import {AxiosError} from "axios";

export function useSignup() {
    const service = new AuthService();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);

    const signup = async (params: SignupType) => {
        setIsLoading(true);
        setError(null);

        try {
            await service.signup(params);
        } catch (err: unknown) {
            if (err instanceof AxiosError)  setError(err?.response?.data?.data);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        signup,
        isLoading,
        error,
    };
}
