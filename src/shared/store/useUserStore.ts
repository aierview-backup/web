import { create } from "zustand";
import UserService from "../services/impl/user.service";
import { User } from "../types";

type UserStore = {
  isLoading: boolean;
  error: string | null;

  clear: () => void;
  update: (params: User, setUser: (u: User) => void) => Promise<boolean>;
};

export const useUserStore = create<UserStore>((set) => {
  const service = new UserService();

  return {
    isLoading: false,
    error: null,

    clear: () => set({ isLoading: false, error: null }),

    update: async (params: User, setUser: (u: User) => void) => {
      let result = false;
      set({ isLoading: true, error: null });
      try {
        const user = await service.updateUser(params);
        setUser(user);
        result = true;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        set({ error: err?.response?.data?.data });
        result = false;
      } finally {
        set({ isLoading: false });
      }
      return result;
    },
  };
});
