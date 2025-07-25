import {ButtonType} from "@/shared/types";
import styles from "./button.module.css";

export default function Button(props: ButtonType) {
    if (props.type === "iconBtn") {
        return (
            <button
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
            disabled={props.disabled}
            onClick={props.handleClick}
            className={`${styles.button} ${styles.className}`}
        >
            {props.value}
        </button>
    );
}
