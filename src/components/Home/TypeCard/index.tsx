import Image from "next/image";
import React from "react";

import styles from "./TypeCard.module.css";

export type TypeCardIcon = {
  icon: string;
  type: string;
  altText: string;
};

export type TypeCardProps = {
  title: string;
  mainIcon: string;
  altText: string;
  desc: string;
  icons: TypeCardIcon[];
};

export default function TypeCard(props: TypeCardProps) {
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

      {/* TYPE CARD ICONS */}
      <div className={styles.typeCardIcons}>
        {props.icons &&
          props.icons.map((icon) => (
            <Image
              key={icon.icon}
              src={`/logos/${icon.type}/${icon.icon}.svg`}
              alt={icon.altText}
              width={24}
              height={24}
            />
          ))}
      </div>
      <p>{props.desc}</p>
    </div>
  );
}
