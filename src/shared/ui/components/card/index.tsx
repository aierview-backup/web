import { HomeCardType } from "@/shared/types";
import styles from "./card.module.css";

export default function Card(props: HomeCardType) {
  return (
    <div className={styles.card}>
      {props.icon}
      <h2>{props.title}</h2>
      <div>{props.desc}</div>
    </div>
  );
}
