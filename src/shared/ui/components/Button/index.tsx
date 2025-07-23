import styles from "./button.module.css";
import { ButtonProps } from "./types/types";

export default function Button(props: ButtonProps) {
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
