import { HomeCardType } from "@/shared/types";
import styles from "./homecard.module.css";

export default function HomeCard(props: HomeCardType) {
  return (
    <div
      data-value={props.value}
      onClick={props.onClick}
      className={`${styles.card} ${props.className}`}
    >
      {props.icon}
      <h2>{props.title}</h2>
      <div>{props.desc}</div>
    </div>
  );
}
