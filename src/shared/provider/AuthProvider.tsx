"use client";

import AuthContext from "@/shared/context/AuthContext";
import AuthService from "@/shared/services/impl/auth.service";
import UserService from "@/shared/services/impl/user.service";
import { SigninType, SignupType, User } from "@/shared/types";
import { AxiosError } from "axios";
import { useState } from "react";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const service = new AuthService();
  const userService = new UserService();

  const signin = async (params: SigninType): Promise<void> => {
    setIsLoading(true);
    setError(null);
    try {
      await service.signin(params);
      const user = await userService.getUserDetails();
      setUser(user);
    } catch (err) {
      if (err instanceof AxiosError) setError(err.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (params: SignupType): Promise<void> => {
    setIsLoading(true);
    setError(null);
    try {
      await service.signup(params);
    } catch (err) {
      if (err instanceof AxiosError) setError(err.response?.data?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const signout = async () => {
    await service.signout();
    setUser(null);
  };

  const updateUser = (user: User) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider
      value={{ user, updateUser, isLoading, error, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
