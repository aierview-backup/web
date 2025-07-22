"use client";
import Github from "@/shared/ui/icons/github.svg";
import Google from "@/shared/ui/icons/google.svg";
import Eye from "@/shared/ui/icons/visibility.svg";
import EyeOff from "@/shared/ui/icons/visibility_off.svg";
import Link from "next/link";
import { useState } from "react";
import styles from "./singin.module.css";

export default function SingIn() {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(EyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(Eye);
      setType("text");
    } else {
      setIcon(EyeOff);
      setType("password");
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.singinContent}>
        <h1>Sing-in</h1>
        <form className={styles.form}>
          <div className={styles.field}>
            <label> Email</label>
            <input type="email" placeholder="Enter your email" />
            <span className={styles.errorMessage}></span>
          </div>
          <div className={styles.field}>
            <label> Password</label>
            <span className={styles.inputIcon}>
              <input
                type={type}
                placeholder="Enter your Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <span onClick={handleToggle} className={styles.icon}>
                {icon}
              </span>
            </span>
            <span className={styles.errorMessage}>Invalid Password</span>
          </div>
          <div className={styles.remeberme}>
            <label>
              <input type="checkbox" />
              <span></span>
              Remember-me
            </label>
            <Link href="reset-password">Reset password</Link>
          </div>
          <button className={styles.singinBtn}>Sing-in</button>
          <div className={styles.auth}>
            <button>
              <Google />
            </button>
            <button>
              <Github />
            </button>
          </div>
          <span className={styles.singup}>
            <Link href="/sing-up">or sing up</Link>
          </span>
        </form>
      </div>
    </main>
  );
}
