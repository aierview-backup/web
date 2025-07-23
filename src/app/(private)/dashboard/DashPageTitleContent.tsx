"use client";

import Aside from "@/features/dashboard/Aside";
import HeaderDash from "@/features/dashboard/Header";
import { useDashboardContext } from "@/shared/hooks/useDashboardContext";
import styles from "./layout.module.css";

export default function DashPageTitleContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { title, isAsideOpen } = useDashboardContext();

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
