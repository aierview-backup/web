"use client";

import Link from "next/link";

import Button from "@/shared/ui/components/Button";
import Input from "@/shared/ui/components/Input";

import {
  SigninFormData,
  signinSchema,
} from "@/features/auth/validations/signin/signin.validation";
import { useAuthStore } from "@/shared/store/useAuthStore";
import Spinner from "@/shared/ui/components/Spinner/Spinner";
import { logger } from "@/shared/utils/logger";
import { zodResolver } from "@hookform/resolvers/zod";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./signin.module.css";

export default function SigninPage() {
  const { signin, googleSignin, error, setTitle, clear } = useAuthStore();

  useEffect(() => {
    clear();
    setTitle("Sign-in");
  }, [setTitle, clear]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SigninFormData>({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = async (data: SigninFormData) => {
    const sucess = await signin({ email: data.email, password: data.password });
    if (sucess) window.location.href = "/dashboard";
  };

  const google = async (credentialResponse: CredentialResponse) => {
    const idToken = credentialResponse.credential as string;
    const result = await googleSignin({ idToken });
    if (result) window.location.href = "/dashboard";
  };

  const onError = () => {
    logger.info("Google login failed  hashahs");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="email"
        label="Email"
        type="email"
        placeholder="Enter your Email"
        register={register("email")}
        message={errors.email?.message}
      />

      <Input
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        register={register("password")}
        message={errors.password?.message}
      />

      <div className={styles.rememberme}>
        <Input id="rememberme" type="checkbox" label="Remember-me" />
        <Link href="/reset-password">Reset password</Link>
      </div>

      <Button value="Sign-in" disabled={isSubmitting} />
      <span className={`${styles.error} ${!error && styles.hidden}`}>
        {error}
      </span>
      <Spinner hidden={!isSubmitting} />

      <div className={styles.auth}>
        <GoogleLogin onSuccess={google} onError={onError} />
      </div>

      <span className={styles.signup}>
        <Link href="/signup">or sign up</Link>
      </span>
    </form>
  );
}
