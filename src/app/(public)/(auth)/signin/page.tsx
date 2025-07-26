"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useAppContext } from "@/shared/hooks/useAppContext";
import Button from "@/shared/ui/components/Button";
import Input from "@/shared/ui/components/Input";

import GithubIcon from "@/shared/ui/icons/github.svg";
import GoogleIcon from "@/shared/ui/icons/google.svg";

import {
  SigninFormData,
  signinSchema,
} from "@/features/auth/validations/signin/signin.validation";
import { useAuth } from "@/shared/hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import styles from "./signin.module.css";

export default function SigninPage() {
  const { setTitle } = useAppContext();
  const router = useRouter();
  const { user, signin, error } = useAuth();

  useEffect(() => {
    setTitle("Sign-in");
  }, [setTitle]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SigninFormData>({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = async (data: SigninFormData) => {
    await signin({ email: data.email, password: data.password });
    router.push("/account-details");
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

      <div className={styles.auth}>
        <Button type="iconBtn" value={<GoogleIcon />} disabled={isSubmitting} />
        <Button type="iconBtn" value={<GithubIcon />} disabled={isSubmitting} />
      </div>

      <span className={styles.signup}>
        <Link href="/signup">or sign up</Link>
      </span>
    </form>
  );
}
