"use client";
import SendIcon from "@/shared/ui/icons/send.svg";
import { useEffect, useRef, useState } from "react";
import Button from "../Button";
import styles from "./textarea.module.css";

export default function Textarea() {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
    }
  }, [value]);

  return (
    <div className={styles.field}>
      <span className={styles.inputIcon}>
        <textarea
          ref={textareaRef}
          className={styles.textarea}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Write here ..."
        />
        <Button type="iconBtn" className={styles.icon} value={<SendIcon />} />
      </span>
    </div>
  );
}
