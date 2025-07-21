import React from "react";

import styles from "./page.module.css";
import HeaderHome from "@/features/home/components/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeaderHome />
      Hello
    </main>
  );
}
