"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Button from "@/shared/ui/components/Button";
import Input from "@/shared/ui/components/Input";

import {
  SigninFormData,
  signinSchema,
} from "@/features/auth/validations/signin/signin.validation";
import { useApp } from "@/shared/hooks/useApp";
import { zodResolver } from "@hookform/resolvers/zod";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useForm } from "react-hook-form";
import styles from "./signin.module.css";

export default function SigninPage() {
  const router = useRouter();
  const { signin, googleSignin, error, setError, title, setTitle } = useApp();

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
  };

  const google = async (credentialResponse: CredentialResponse) => {
    const idToken = credentialResponse.credential as string;
    await googleSignin({ idToken });
  };

  const onError = () => {
    setError("Login failed");
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
        <GoogleLogin onSuccess={google} onError={onError} />
        {/* <Button type="iconBtn" value={<GithubIcon />} disabled={isSubmitting} /> */}
      </div>

      <span className={styles.signup}>
        <Link href="/signup">or sign up</Link>
      </span>
    </form>
  );
}
