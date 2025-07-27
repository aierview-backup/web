"use client";

import AuthContext from "@/shared/context/AppContext";
import AuthService from "@/shared/services/impl/auth.service";
import UserService from "@/shared/services/impl/user.service";
import { GoogleSinginType, SigninType, SignupType, User } from "@/shared/types";
import { logger } from "@/shared/utils/logger";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState("");
  const [isAsideOpen, setIsAsideOpen] = useState(true);
  const toggleAside = () => setIsAsideOpen((prev) => !prev);

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const service = new AuthService();
  const userService = useMemo(() => {
    return new UserService();
  }, []);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const user = await userService.getUserDetails();
        setUser(user);
      } catch (err) {
        if (err instanceof Error) logger.error(err.message);
        setUser(null);
      }
    };
    loadUser();
  }, [userService]);

  const googleSignin = async (params: GoogleSinginType): Promise<void> => {
    setIsLoading(true);
    setError(null);
    try {
      if (!params) throw new Error("Bad credentials");
      await service.googleSingin(params);
      const user = await userService.getUserDetails();
      setUser(user);
      router.push("/account-details");
    } catch (err) {
      const error = "Falied to login";
      if (err instanceof AxiosError)
        setError(err.response?.data?.message || error);
    } finally {
      setIsLoading(false);
    }
  };

  const signin = async (params: SigninType): Promise<void> => {
    setIsLoading(true);
    setError(null);
    try {
      await service.signin(params);
      const user = await userService.getUserDetails();
      setUser(user);
      router.push("/account-details");
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
    router.push("/signin");
  };

  const updateUser = (user: User) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        updateUser,
        isLoading,
        error,
        setError,
        signin,
        signup,
        signout,
        title,
        setTitle,
        isAsideOpen,
        toggleAside,
        googleSignin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
