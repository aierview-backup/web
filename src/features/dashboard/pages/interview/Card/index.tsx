"use client";

import { InterviewCardType } from "@/features/dashboard/types";
import { useState } from "react";
import styles from "./interviewcard.module.css";

export default function InterviewCard(props: InterviewCardType) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.card}
    >
      <span>
        {props.icon}
        <h2>{props.title}</h2>
      </span>
      <p className={`${props.percent < 50 ? styles.red : styles.green}`}>
        {`${props.percent}%`}
      </p>
      <span className={`${styles.tooltip} ${isHovered ? styles.visible : ""}`}>
        <p>Pedding {props.pendig}</p>
        <p>Complete {props.complete}</p>
        <p>Total {props.total}</p>
      </span>
    </div>
  );
}
