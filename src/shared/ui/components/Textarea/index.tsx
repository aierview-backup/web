// Textarea.tsx
import SendIcon from "@/shared/ui/icons/send.svg";
import { TextareaHTMLAttributes, useEffect, useRef } from "react";
import Button from "../Button";
import styles from "./textarea.module.css";

type TextareaType = {
  error?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({ error, ...rest }: TextareaType) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
    }
  }, [rest.value]);

  return (
    <div className={styles.field}>
      <span className={styles.inputIcon}>
        <textarea className={styles.textarea} {...rest} ref={textareaRef} />
        <Button type="iconBtn" className={styles.icon} value={<SendIcon />} />
      </span>
      <p className={styles.error}>{error}</p>
    </div>
  );
}
