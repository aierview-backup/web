"use client";

import { usePageTitle } from "@/shared/hooks/usePageTitle";
import styles from "./layout.module.css";

export default function AuthPageTitleContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { title } = usePageTitle();

  return (
    <main className={styles.main}>
      <div className={styles.singinContent}>
        <h1>{title}</h1>
        <form className={styles.form}>{children}</form>
      </div>
    </main>
  );
}
