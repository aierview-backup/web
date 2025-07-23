"use client";
import Button from "@/shared/ui/components/Button";
import Input from "@/shared/ui/components/Input";
import Github from "@/shared/ui/icons/github.svg";
import Google from "@/shared/ui/icons/google.svg";
import Link from "next/link";
import styles from "./signup.module.css";

import { useDashboardContext } from "@/shared/hooks/useDashboardContext";
import { useEffect } from "react";

export default function SignupPage() {
  const { setTitle } = useDashboardContext();

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
        placeholder="Enter your password"
      />

      <Button value="Sign-up" />
      <div className={styles.auth}>
        <Button type="iconBtn" value={<Google />} />
        <Button type="iconBtn" value={<Github />} />
      </div>
      <span className={styles.signup}>
        <Link href="/sign-in">or sign in</Link>
      </span>
    </>
  );
}
