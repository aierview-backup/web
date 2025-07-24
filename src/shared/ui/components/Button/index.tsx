import { ButtonType } from "@/shared/types";
import styles from "./button.module.css";

export default function Button(props: ButtonType) {
  switch (props.type) {
    case "iconBtn":
      return (
        <button
          onClick={props.handleClick}
          className={`${styles.iconBtn} ${props.className}`}
        >
          {props.value}
        </button>
      );
    default:
      return (
        <button onClick={props.handleClick} className={styles.button}>
          {props.value}
        </button>
      );
  }
}
