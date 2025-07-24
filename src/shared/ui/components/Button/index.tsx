import { ButtonType } from "@/shared/types";
import styles from "./button.module.css";

export default function Button({
  type,
  handleClick,
  className = "",
  value,
}: ButtonType) {
  if (type === "iconBtn") {
    return (
      <button
        onClick={handleClick}
        className={`${styles.iconBtn} ${className}`}
      >
        {value}
      </button>
    );
  }

  return (
    <button onClick={handleClick} className={styles.button}>
      {value}
    </button>
  );
}
