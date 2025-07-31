import { MouseEventHandler, ReactNode } from "react";
import styles from "./button.module.css";

type ButtonType = {
  type?: string;
  action?: "button" | "submit" | "reset" | undefined;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  value?: string | ReactNode;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function Button(props: ButtonType) {
  switch (props.type) {
    case "composedBtn":
      return (
        <button
          type={props.action}
          disabled={props.disabled}
          onClick={props.handleClick}
          className={`${styles.composedBtn} ${props.className} ${props.className && styles[props.className]} `}
        >
          {props.icon}
          {props.value}
        </button>
      );

    case "iconBtn":
      return (
        <button
          type={props.action}
          disabled={props.disabled}
          onClick={props.handleClick}
          className={`${styles.iconBtn} ${props.className} ${props.className && styles[props.className]} `}
        >
          {props.value}
        </button>
      );

    default:
      return (
        <button
          type={props.action}
          disabled={props.disabled}
          onClick={props.handleClick}
          className={`${styles.button} ${props.className} ${props.className && styles[props.className]} `}
        >
          {props.value}
        </button>
      );
  }
}
