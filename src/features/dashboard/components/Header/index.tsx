"use client";

import { useAuthStore } from "@/shared/store/useAuthStore";
import Button from "@/shared/ui/components/Button";
import MenuIcon from "@/shared/ui/icons/menu.svg";
import SignoutIcon from "@/shared/ui/icons/singout.svg";
import { useRouter } from "next/navigation";
import styles from "./header.module.css";

export default function HeaderDash() {
  const router = useRouter();
  const { signout, toggleAside, title } = useAuthStore();

  const handleSignout = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const result = await signout();
    if (result) router.push("/signin");
  };

  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <div className={styles.actions}>
        <Button
          handleClick={toggleAside}
          className={styles.menu}
          type="iconBtn"
          value={<MenuIcon />}
        />
        <Button
          handleClick={handleSignout}
          className={styles.signout}
          type="iconBtn"
          value={<SignoutIcon />}
        />
      </div>
    </header>
  );
}
