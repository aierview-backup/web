"use client";

import HeaderInterview from "@/features/interview/components/Header";
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
        <div>
          <HeaderInterview />
          <main className={styles.main}>{children}</main>
        </div>
      </AppProvider>
    </GoogleOAuthProvider>
  );
}
