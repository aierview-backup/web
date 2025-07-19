import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../features/home/components/Navbar";

export default function Header() {
  return (
    <header id="header" className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image
          src="/logos/aierview/logo-composed.svg"
          alt="LOGO AIERVIEW"
          width={147}
          height={76}
        />
      </Link>
      <Navbar />
    </header>
  );
}
