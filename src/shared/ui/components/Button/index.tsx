import styles from "./button.module.css";
import {MouseEventHandler, ReactNode} from "react";

type ButtonType = {
    type?: string;
    value?: string | ReactNode;
    className?: string;
    disabled?: boolean;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
};

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
