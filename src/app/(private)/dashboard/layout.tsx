"use client";
import Aside from "@/features/dashboard/components/Aside";
import HeaderDash from "@/features/dashboard/components/Header";
import { useAuthStore } from "@/shared/store/authStore";
import { GOOGLE_CLIENT_ID } from "@/shared/utils/lib.";
import { GoogleOAuthProvider } from "@react-oauth/google";
import styles from "./layout.module.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAsideOpen } = useAuthStore();

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div
        className={`${styles.dashboard} ${
          isAsideOpen ? styles.open : styles.closed
        }`}
      >
        <Aside />
        <HeaderDash />
        <main className={styles.main}>{children}</main>
      </div>
    </GoogleOAuthProvider>
  );
}
