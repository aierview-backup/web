"use client";

import { useDashboardContext } from "@/shared/hooks/useDashboardContext";
import DashboardIcon from "@/shared/ui/icons/dashboard.svg";
import InterviewIcon from "@/shared/ui/icons/interview.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, useCallback, useEffect } from "react";
import styles from "./aside.module.css";

const links = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Interview",
    href: "/dashboard/interview",
    icon: <InterviewIcon />,
  },
];

export default function Aside() {
  const router = useRouter();
  const pathname = usePathname();
  const { setTitle, isAsideOpen } = useDashboardContext();
  const isActive = useCallback((href: string) => pathname === href, [pathname]);

  useEffect(() => {
    const activeLink = links.find((link) => isActive(link.href));
    if (activeLink) setTitle(activeLink.title);
  }, [pathname, setTitle, isActive]);

  const handleClick =
    (title: string, href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setTitle(title);
      router.push(href);
    };

  return (
    <aside className={styles.aside}>
      <div className={styles.profile}>
        <Image src="/img/profile.jpeg" width={70} height={79} alt="profile" />
        <h2 className={`${isAsideOpen ? styles.open : styles.closed}`}>
          Gervásio Dombo
        </h2>
      </div>
      <nav className={styles.nav}>
        {links.map(({ title, href, icon }) => (
          <Link
            key={title}
            className={`${styles.link} ${isActive(href) ? styles.clicked : ""}`}
            onClick={handleClick(title, href)}
            href={href}
          >
            {icon} {isAsideOpen ? title : ""}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
