import Image from "next/image";
import React from "react";

import styles from "./TypeCard.module.css";
import { InterviewType } from "@/features/home/types/types";

export default function TypeCard(props: InterviewType) {
  return (
    <div className={styles.typeCard}>
      {/* TYPE CARD HEADER */}
      <div className={styles.typeCardHeader}>
        <h2>{props.title}</h2>
        <Image
          src={`/icons/${props.mainIcon}.svg`}
          alt={props.altText}
          width={24}
          height={24}
        />
      </div>

      {/* TYPE CARD TECHNOLOGIES */}
      <div className={styles.typeCardIcons}>
        {props.technologies &&
          props.technologies.map((item) => (
            <Image
              key={item.id}
              src={`/logos/${props.type}/${item.icon}.svg`}
              alt={item.altText}
              width={24}
              height={24}
            />
          ))}
      </div>
      <p>{props.description}</p>
    </div>
  );
}
