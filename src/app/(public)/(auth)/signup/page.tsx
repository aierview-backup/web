"use client";

import Link from "next/link";

import Button from "@/shared/ui/components/Button";
import Input from "@/shared/ui/components/Input";

import {
  SignupFormData,
  signupSchema,
} from "@/features/auth/validations/signup/signup.validation";
import { useAuthStore } from "@/shared/store/useAuthStore";
import Spinner from "@/shared/ui/components/Spinner/Spinner";
import { logger } from "@/shared/utils/logger";
import { zodResolver } from "@hookform/resolvers/zod";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./signup.module.css";

export default function SignupPage() {
  const router = useRouter();
  const { signup, googleSignin, error, setTitle } = useAuthStore();

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
    const sucess = await signup({ email: data.email, password: data.password });
    if (sucess) router.push("/signin");
  };

  const google = async (credentialResponse: CredentialResponse) => {
    const idToken = credentialResponse.credential as string;
    const result = await googleSignin({ idToken });
    if (result) router.push("/account-details");
  };

  const onError = () => {
    logger.info("Google login failed");
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

      <Button className={isSubmitting ? "disabled" : ""} value="Sign-up" />
      <span className={`${styles.error} ${!error && styles.hidden}`}>
        {error}
      </span>
      <Spinner hidden={!isSubmitting} />

      <div className={styles.auth}>
        <GoogleLogin onSuccess={google} onError={onError} />
      </div>

      <span className={styles.signup}>
        <Link href="/signin">or sign in</Link>
      </span>
    </form>
  );
}
