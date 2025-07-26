"use client";

import Link from "next/link";
import { useEffect } from "react";

import { useAppContext } from "@/shared/hooks/useAppContext";
import Button from "@/shared/ui/components/Button";
import Input from "@/shared/ui/components/Input";

import GithubIcon from "@/shared/ui/icons/github.svg";
import GoogleIcon from "@/shared/ui/icons/google.svg";

import {
  SignupFormData,
  signupSchema,
} from "@/features/auth/validations/signup/signup.validation";
import { useAuth } from "@/shared/hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styles from "./signup.module.css";

export default function SignupPage() {
  const { setTitle } = useAppContext();
  const router = useRouter();
  const { signup, error } = useAuth();

  useEffect(() => {
    setTitle("Sign-up");
  }, [setTitle]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    await signup({ email: data.email, password: data.password });
    router.push("/signin");
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

      <Input
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        placeholder="Enter your password"
        register={register("confirmPassword")}
        message={errors.confirmPassword?.message}
      />

      <Button value="Sign-up" disabled={isSubmitting} />

      <span className={`${styles.error} ${!error && styles.hidden}`}>
        {error}
      </span>

      <div className={styles.auth}>
        <Button type="iconBtn" value={<GoogleIcon />} disabled={isSubmitting} />
        <Button type="iconBtn" value={<GithubIcon />} disabled={isSubmitting} />
      </div>

      <span className={styles.signup}>
        <Link href="/signin">or sign in</Link>
      </span>
    </form>
  );
}
