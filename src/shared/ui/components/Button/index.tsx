import { MouseEventHandler, ReactNode } from "react";
import styles from "./button.module.css";

type ButtonType = {
  type?: string;
  action?: "button" | "submit" | "reset" | undefined;
  className?: string;
  disabled?: boolean;
  value?: string | ReactNode;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function Button(props: ButtonType) {
  if (props.type === "iconBtn") {
    return (
      <button
        type={props.action}
        disabled={props.disabled}
        onClick={props.handleClick}
        className={`${styles.iconBtn} ${props.className}`}
      >
        {props.value}
      </button>
    );
  }

  return (
    <button
      type={props.action}
      disabled={props.disabled}
      onClick={props.handleClick}
      className={`${styles.button} ${styles.className}`}
    >
      {props.value}
    </button>
  );
}
