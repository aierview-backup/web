import { CardProps } from "@/features/home/types/types";

import styles from "./card.module.css";

export default function Card(props: CardProps) {
  return (
    <div className={styles.card}>
      {props.icon}
      <h2>{props.title}</h2>
      <div>{props.desc}</div>
    </div>
  );
}
