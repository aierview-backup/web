"use client";

import { HeaderDashType } from "@/features/dashboard/types";
import { useApp } from "@/shared/hooks/useApp";
import Button from "@/shared/ui/components/Button";
import MenuIcon from "@/shared/ui/icons/menu.svg";
import SignoutIcon from "@/shared/ui/icons/singout.svg";
import styles from "./header.module.css";

export default function HeaderDash({ title }: HeaderDashType) {
  const { signout, toggleAside } = useApp();

  const handleSignout = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await signout();
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
