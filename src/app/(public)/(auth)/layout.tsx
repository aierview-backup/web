// layout.tsx

"use client";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { useAuthStore } from "@/shared/store/useAuthStore";
import { GOOGLE_CLIENT_ID } from "@/shared/utils/lib";
import styles from "./layout.module.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { title } = useAuthStore();

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <main className={styles.main}>
        <div className={styles.signinContent}>
          <h1>{title}</h1>
          {children}
        </div>
      </main>
    </GoogleOAuthProvider>
  );
}
