import { create } from "zustand";
import UserService from "../services/impl/user.service";
import { User } from "../types";
import { useAuthStore } from "./authStore";

type UserStore = {
  isLoading: boolean;
  error: string | null;

  update: (params: User) => Promise<boolean>;
};

export const useUserStore = create<UserStore>((set) => {
  const { setUser } = useAuthStore();
  const service = new UserService();

  return {
    isLoading: false,
    error: null,

    update: async (params: User) => {
      let result = false;
      set({ isLoading: true, error: null });
      try {
        const user = await service.updateUser(params);
        setUser(user);
        result = true;
      } catch (err: any) {
        set({ error: err?.response?.data?.message });
        result = false;
      } finally {
        set({ isLoading: false });
      }
      return result;
    },
  };
});
