"use client";

import Aside from "@/features/dashboard/Aside";
import HeaderDash from "@/features/dashboard/Header";
import { usePageTitle } from "@/shared/hooks/usePageTitle";
import styles from "./layout.module.css";

export default function DashPageTitleContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { title } = usePageTitle();

  return (
    <div className={styles.dashboard}>
      <Aside />
      <HeaderDash title={title} />
      <main className={styles.main}></main>
    </div>
  );
}
