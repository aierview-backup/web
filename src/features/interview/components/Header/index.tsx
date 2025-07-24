import Button from "@/shared/ui/components/Button";
import CloseIcon from "@/shared/ui/icons/close.svg";
import PauseIcon from "@/shared/ui/icons/pause.svg";
import Image from "next/image";
import styles from "./header.module.css";

export default function HeaderInterview() {
  return (
    <header className={styles.header}>
      <Image
        src="/logos/aierview/logo.svg"
        width={56}
        height={56}
        alt="AIerview Logo"
      />
      <div className={styles.actions}>
        <Button className={styles.pause} type="iconBtn" value={<PauseIcon />} />
        <Button className={styles.close} type="iconBtn" value={<CloseIcon />} />
      </div>
    </header>
  );
}
