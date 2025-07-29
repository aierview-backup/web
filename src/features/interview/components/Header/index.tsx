"use client";
import { useWhiteboardStore } from "@/shared/store/whiteboardStore";
import Button from "@/shared/ui/components/Button";
import CloseIcon from "@/shared/ui/icons/close.svg";
import PauseIcon from "@/shared/ui/icons/pause.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./header.module.css";

export default function HeaderInterview() {
  const router = useRouter();
  const { pause, interview } = useWhiteboardStore();

  const handlePause = async () => {
    if (!interview) return;
    const result = await pause(interview);
    if (result) router.push("/dashboard");
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
        <Button
          handleClick={handlePause}
          className={styles.pause}
          type="iconBtn"
          value={<PauseIcon />}
        />
        <Button className={styles.close} type="iconBtn" value={<CloseIcon />} />
      </div>
    </header>
  );
}
