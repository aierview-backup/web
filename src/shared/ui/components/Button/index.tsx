import styles from "./button.module.css";
import { ButtonProps } from "./types/types";

export default function Button(props: ButtonProps) {
  switch (props.type) {
    case "iconBtn":
      return <button className={styles.iconBtn}>{props.value}</button>;
    default:
      return <button className={styles.button}>{props.value}</button>;
  }
}
