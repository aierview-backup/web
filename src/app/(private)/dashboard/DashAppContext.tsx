"use client";

import Aside from "@/features/dashboard/Aside";
import HeaderDash from "@/features/dashboard/Header";
import { useAppContext } from "@/shared/hooks/useAppContext";
import styles from "./layout.module.css";

export default function DashAppContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const { title, isAsideOpen } = useAppContext();

  return (
    <div
      className={`${styles.dashboard} ${
        isAsideOpen ? styles.open : styles.closed
      }`}
    >
      <Aside />
      <HeaderDash title={title} />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
