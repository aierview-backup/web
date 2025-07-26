"use client";

import HeaderInterview from "@/features/interview/components/Header";
import styles from "./layout.module.css";

export default function InterviewAppContext({
                                                children,
                                            }: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <HeaderInterview/>
            <main className={styles.main}>{children}</main>
        </div>
    );
}
