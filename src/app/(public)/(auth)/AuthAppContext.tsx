"use client";

import {useAppContext} from "@/shared/hooks/useAppContext";
import styles from "./layout.module.css";

export default function AuthAppContext({
                                           children,
                                       }: {
    children: React.ReactNode;
}) {
    const {title} = useAppContext();

    return (
        <main className={styles.main}>
            <div className={styles.signinContent}>
                <h1>{title}</h1>
                {children}
            </div>
        </main>
    );
}
