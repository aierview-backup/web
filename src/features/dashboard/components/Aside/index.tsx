"use client";

import { useAuthStore } from "@/shared/store/useAuthStore";
import DashboardIcon from "@/shared/ui/icons/dashboard.svg";
import InterviewIcon from "@/shared/ui/icons/interview.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, useCallback, useEffect, useMemo } from "react";
import styles from "./aside.module.css";

const NAV_LINKS = [
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
  const { user, fetchUser, isAsideOpen, setTitle } = useAuthStore();

  const activeLink = useMemo(
    () => NAV_LINKS.find((link) => pathname === link.href),
    [pathname]
  );

  useEffect(() => {
    if (activeLink) {
      setTitle(activeLink.title);
    }
  }, [activeLink, setTitle]);

  useEffect(() => {
    const fetchUserFn = async () => {
      await fetchUser();
    };
    fetchUserFn();
  }, [fetchUser]);

  const handleClick = useCallback(
    (title: string, href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setTitle(title);
      router.push(href);
    },
    [router, setTitle]
  );

  return (
    <aside className={styles.aside}>
      <div className={styles.profile}>
        <Image
          src={user?.picture || "/img/profile.svg"}
          width={70}
          height={79}
          alt="profile"
        />
        <h2 className={isAsideOpen ? styles.open : styles.closed}>
          {user?.name}
        </h2>
      </div>

      <nav className={styles.nav}>
        {NAV_LINKS.map(({ title, href, icon }) => {
          const isCurrent = pathname === href;
          const linkClass = `${styles.link} ${isCurrent ? styles.clicked : ""}`;

          return (
            <Link
              key={title}
              href={href}
              className={linkClass}
              onClick={handleClick(title, href)}
            >
              {icon} {isAsideOpen && title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
