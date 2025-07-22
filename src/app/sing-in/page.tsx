"use client";
import Button from "@/shared/ui/components/Button";
import Input from "@/shared/ui/components/Input";
import Github from "@/shared/ui/icons/github.svg";
import Google from "@/shared/ui/icons/google.svg";
import Link from "next/link";
import styles from "./singin.module.css";

export default function SingIn() {
  return (
    <main className={styles.main}>
      <div className={styles.singinContent}>
        <h1>Sing-in</h1>
        <form className={styles.form}>
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
          <Button value="Sing-in" />
          <div className={styles.auth}>
            <Button type="iconBtn" value={<Google />} />
            <Button type="iconBtn" value={<Github />} />
          </div>
          <span className={styles.singup}>
            <Link href="/sing-up">or sing up</Link>
          </span>
        </form>
      </div>
    </main>
  );
}
