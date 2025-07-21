import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

export default function HeaderHome() {
  return (
    <header className={styles.header}>
      <Image src="logos/aierview/logo.svg" width={56} height={56} alt="logo" />

      <nav className={styles.nav}>
        <Link href="#interviewTypes">Interview Types</Link>
        <Link href="#reviews">Reviews </Link>
      </nav>

      <div className={styles.auth}>
        <Link href="/sing-in">Sing-in</Link>
        <Link className={styles.getstarted} href="/sing-up">
          Get Started
        </Link>
      </div>
    </header>
  );
}
