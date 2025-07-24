"use client";

import Link from "next/link";
import { useEffect } from "react";

import { useAppContext } from "@/shared/hooks/useAppContext";
import Button from "@/shared/ui/components/Button";
import Input from "@/shared/ui/components/Input";

import GithubIcon from "@/shared/ui/icons/github.svg";
import GoogleIcon from "@/shared/ui/icons/google.svg";

import styles from "./signup.module.css";

export default function SignupPage() {
  const { setTitle } = useAppContext();

  useEffect(() => {
    setTitle("Sign-up");
  }, [setTitle]);

  return (
    <>
      <Input label="Email" type="email" placeholder="Enter your email" />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
      <Input
        label="Confirm password"
        type="password"
        placeholder="Confirm your password"
      />

      <Button value="Sign-up" />

      <div className={styles.auth}>
        <Button type="iconBtn" value={<GoogleIcon />} />
        <Button type="iconBtn" value={<GithubIcon />} />
      </div>

      <span className={styles.signup}>
        <Link href="/sign-in">or sign in</Link>
      </span>
    </>
  );
}
