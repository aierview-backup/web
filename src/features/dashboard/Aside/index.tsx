import { usePageTitle } from "@/shared/hooks/usePageTitle";
import DashboardIcon from "@/shared/ui/icons/dashboard.svg";
import InterviewIcon from "@/shared/ui/icons/interview.svg";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import styles from "./aside.module.css";

export default function Aside() {
  const [clicked, setClicked] = useState("");
  const { setTitle } = usePageTitle();

  const handleClick = (title: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setTitle(title);
    setClicked(title);
  };

  return (
    <aside className={styles.aside}>
      <div className={styles.profile}>
        <Image src="/img/profile.jpeg" width={70} height={79} alt="profile" />
        <h2>Gervásio Dombo</h2>
      </div>
      <nav className={styles.nav}>
        <Link
          className={`${styles.link} ${
            clicked === "Dashboard" ? styles.clicked : ""
          }`}
          onClick={handleClick("Dashboard")}
          href="/dashboard"
        >
          <DashboardIcon /> Dashboard
        </Link>

        <Link
          className={`${styles.link} ${
            clicked === "Interview" ? styles.clicked : ""
          }`}
          onClick={handleClick("Interview")}
          href="/interview"
        >
          <InterviewIcon /> Interview
        </Link>
      </nav>
    </aside>
  );
}
