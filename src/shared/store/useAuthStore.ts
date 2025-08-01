"use client";

import AuthService from "@/shared/services/impl/auth.service";
import UserService from "@/shared/services/impl/user.service";
import { GoogleSinginType, SigninType, SignupType, User } from "@/shared/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthStore = {
  title: string | null;
  isAsideOpen: boolean;

  toggleAside: () => void;
  setTitle: (value: string) => void;

  user: User | null;
  isLoading: boolean;
  error: string | null;

  clear: () => void;
  fetchUser: () => void;
  signout: () => Promise<boolean>;
  setUser: (user: User | null) => void;
  signin: (params: SigninType) => Promise<boolean>;
  signup: (params: SignupType) => Promise<boolean>;
  googleSignin: (params: GoogleSinginType) => Promise<boolean>;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => {
      const authService = new AuthService();
      const userService = new UserService();

      return {
        title: null,
        isAsideOpen: true,

        setTitle: (value) => set({ title: value }),
        toggleAside: () =>
          set((state) => ({ isAsideOpen: !state.isAsideOpen })),

        user: null,
        isLoading: false,
        error: null,

        setUser: (user) => set({ user }),

        clear: () => set({ isLoading: false, error: null }),

        signin: async (params) => {
          let result = false;
          set({ isLoading: true, error: null });
          try {
            await authService.signin(params);
            await get().fetchUser;
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

        signup: async (params) => {
          let result = false;
          set({ isLoading: true, error: null });
          try {
            await authService.signup(params);
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

        googleSignin: async (params) => {
          let result = false;
          set({ isLoading: true, error: null });
          try {
            await authService.googleSingin(params);
            await get().fetchUser;
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

        signout: async () => {
          await authService.signout();
          set({ user: null });
          return true;
        },
        fetchUser: async () => {
          const user = await userService.getUserDetails();
          set({ user });
          return true;
        },
      };
    },
    {
      name: "auth-storage", // localStorage key
      partialize: (state) => ({ user: state.user }), // persist only user
    }
  )
);
