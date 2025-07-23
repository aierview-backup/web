"use client";

import { useDashboardContext } from "@/shared/hooks/useDashboardContext";
import styles from "./layout.module.css";

export default function AuthPageTitleContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { title } = useDashboardContext();

  return (
    <main className={styles.main}>
      <div className={styles.signinContent}>
        <h1>{title}</h1>
        <form className={styles.form}>{children}</form>
      </div>
    </main>
  );
}
