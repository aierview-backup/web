import UserService from "@/shared/services/impl/user.service";
import {User} from "@/shared/types";
import {AxiosError} from "axios";
import {useState} from "react";
import {useApp} from "./useApp";

export function useUser() {
    const service = new UserService();
    const {updateUser} = useApp();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const updateUserDetails = async (params: User): Promise<void> => {
        setIsLoading(true);
        setError(null);
        try {
            const user = await service.updateUser(params);
            updateUser(user);
        } catch (err) {
            if (err instanceof AxiosError) setError(err.response?.data?.message);
        } finally {
            setIsLoading(false);
        }
    };

    return {updateUserDetails, error, isLoading};
}
