"use client";

import {InterviewCardType} from "@/features/dashboard/types";
import {useState} from "react";
import styles from "./interviewcard.module.css";

export default function InterviewCard({
                                          icon,
                                          title,
                                          percent,
                                          pending,
                                          complete,
                                          total,
                                      }: InterviewCardType) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles.card}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
      <span>
        {icon}
          <h2>{title}</h2>
      </span>

            <p className={percent < 50 ? styles.red : styles.green}>
                {`${percent}%`}
            </p>

            <span className={`${styles.tooltip} ${isHovered ? styles.visible : ""}`}>
        <p>Pedding {pending}</p>
        <p>Complete {complete}</p>
        <p>Total {total}</p>
      </span>
        </div>
    );
}
