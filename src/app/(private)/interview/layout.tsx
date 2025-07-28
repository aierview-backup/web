"use client";

import HeaderInterview from "@/features/interview/components/Header";
import { GOOGLE_CLIENT_ID } from "@/shared/utils/lib.";
import { GoogleOAuthProvider } from "@react-oauth/google";

import styles from "./layout.module.css";

export default function InterviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <HeaderInterview />
      <main className={styles.main}>{children}</main>
    </GoogleOAuthProvider>
  );
}
