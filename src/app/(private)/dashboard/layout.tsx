"use client";
import Aside from "@/features/dashboard/components/Aside";
import HeaderDash from "@/features/dashboard/components/Header";
import { useApp } from "@/shared/hooks/useApp";
import { AppProvider } from "@/shared/provider/AppProvider";
import { GOOGLE_CLIENT_ID } from "@/shared/utils/lib.";
import { GoogleOAuthProvider } from "@react-oauth/google";
import styles from "./layout.module.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AppProvider>
        <LayoutContent>{children}</LayoutContent>
      </AppProvider>
    </GoogleOAuthProvider>
  );
}

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { user, title, isAsideOpen } = useApp();

  return (
    <div
      className={`${styles.dashboard} ${
        isAsideOpen ? styles.open : styles.closed
      }`}
    >
      <Aside user={user} />
      <HeaderDash title={title} />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
