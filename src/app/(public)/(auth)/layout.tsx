// layout.tsx

"use client";
import {AppProvider} from "@/shared/provider/AppProvider";
import {GoogleOAuthProvider} from "@react-oauth/google";

import {useApp} from "@/shared/hooks/useApp";
import TitleWrapper from "@/shared/ui/components/TitleWrapper";
import {GOOGLE_CLIENT_ID} from "@/shared/utils/lib.";
import styles from "./layout.module.css";

export default function AuthLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    const {title} = useApp();

    return (
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <AppProvider>
                <main className={styles.main}>
                    <div className={styles.signinContent}>
                        <TitleWrapper/>
                        {children}
                    </div>
                </main>
            </AppProvider>
        </GoogleOAuthProvider>
    );
}
