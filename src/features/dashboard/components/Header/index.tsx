"use client";

import { HeaderDashType } from "@/features/dashboard/types";
import { useAppContext } from "@/shared/hooks/useAppContext";
import Button from "@/shared/ui/components/Button";
import MenuIcon from "@/shared/ui/icons/menu.svg";
import SignoutIcon from "@/shared/ui/icons/singout.svg";
import { useRouter } from "next/navigation";
import styles from "./header.module.css";

export default function HeaderDash(props: HeaderDashType) {
  const { toggleAside } = useAppContext();
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push("/");
  };

  return (
    <header className={styles.header}>
      <h1>{props.title}</h1>
      <div className={styles.actions}>
        <Button
          handleClick={toggleAside}
          className={styles.menu}
          type="iconBtn"
          value={<MenuIcon />}
        />
        <Button
          handleClick={handleClick}
          className={styles.signout}
          type="iconBtn"
          value={<SignoutIcon />}
        />
      </div>
    </header>
  );
}
