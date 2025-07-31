"use client";
import { useInterviewStore } from "@/shared/store/useInterviewStore";
import Button from "@/shared/ui/components/Button";
import CloseIcon from "@/shared/ui/icons/close.svg";
import DashboardIcon from "@/shared/ui/icons/dashboard-large.svg";
import PauseIcon from "@/shared/ui/icons/pause.svg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import styles from "./header.module.css";

export default function HeaderInterview() {
  const router = useRouter();
  const pathname = usePathname();
  const { interview, pause, stop } = useInterviewStore();

  const isFeedbackPage = pathname.includes("feedback");

  const handlePause = async () => {
    if (!interview) return;
    const result = await pause(interview.id);
    if (result) router.push("/dashboard");
  };

  const handleStop = async () => {
    if (!interview) return;
    const result = await stop(interview.id);
    if (result) router.push("/dashboard");
  };

  const handleBaackToDashboard = async () => {
    router.push("/dashboard");
  };

  return (
    <header className={styles.header}>
      <Image
        src="/logos/aierview/logo.svg"
        width={56}
        height={56}
        alt="AIerview Logo"
      />
      <div className={styles.actions}>
        {isFeedbackPage ? (
          <Button
            handleClick={handleBaackToDashboard}
            className={styles.stop}
            type="iconBtn"
            value={<DashboardIcon />}
          />
        ) : (
          <>
            <Button
              handleClick={handlePause}
              className={styles.pause}
              type="iconBtn"
              value={<PauseIcon />}
            />
            <Button
              handleClick={handleStop}
              className={styles.close}
              type="iconBtn"
              value={<CloseIcon />}
            />
          </>
        )}
      </div>
    </header>
  );
}
