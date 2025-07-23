"use client";
import Button from "@/shared/ui/components/Button";
import Input from "@/shared/ui/components/Input";
import Github from "@/shared/ui/icons/github.svg";
import Google from "@/shared/ui/icons/google.svg";
import Link from "next/link";
import styles from "./singup.module.css";

import { usePageTitle } from "@/shared/hooks/usePageTitle";
import { useEffect } from "react";

export default function SignupPage() {
  const { setTitle } = usePageTitle();

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

      <Button value="Sing-up" />
      <div className={styles.auth}>
        <Button type="iconBtn" value={<Google />} />
        <Button type="iconBtn" value={<Github />} />
      </div>
      <span className={styles.singup}>
        <Link href="/sing-in">or sing in</Link>
      </span>
    </>
  );
}
