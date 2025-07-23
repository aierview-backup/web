"use client";
import { useAppContext } from "@/shared/hooks/useAppContext";
import Button from "@/shared/ui/components/Button";
import Input from "@/shared/ui/components/Input";
import Github from "@/shared/ui/icons/github.svg";
import Google from "@/shared/ui/icons/google.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "./signin.module.css";

export default function SigninPage() {
  const router = useRouter();
  const { setTitle } = useAppContext();

  useEffect(() => {
    setTitle("Sign-in");
  }, [setTitle]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push("/account-details");
  };

  return (
    <>
      <Input label="Email" type="email" placeholder="Enter your email" />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
      <div className={styles.remeberme}>
        <Input label="Remember-me" type="checkbox" />
        <Link href="reset-password">Reset password</Link>
      </div>
      <Button handleClick={handleClick} value="Sign-in" />
      <div className={styles.auth}>
        <Button type="iconBtn" value={<Google />} />
        <Button type="iconBtn" value={<Github />} />
      </div>
      <span className={styles.signup}>
        <Link href="/sign-up">or sign up</Link>
      </span>
    </>
  );
}
