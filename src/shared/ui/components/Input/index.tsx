import Eye from "@/shared/ui/icons/visibility.svg";
import EyeOff from "@/shared/ui/icons/visibility_off.svg";
import { useState } from "react";
import styles from "./input.module.css";
import { InputProps } from "./types/types";

export default function Input(props: InputProps) {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(<EyeOff />);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(<Eye />);
      setType("text");
    } else {
      setIcon(<EyeOff />);
      setType("password");
    }
  };

  switch (props.type) {
    case "checkbox":
      return (
        <label className={styles.checkbox}>
          <input type={props.type} />
          <span></span>
          {props.label}
        </label>
      );
    case "password":
      return (
        <div className={styles.field}>
          <label>Password</label>
          <span className={styles.inputIcon}>
            <input
              type={props.type}
              placeholder={props.placeholder}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <span onClick={handleToggle} className={styles.icon}>
              {icon}
            </span>
          </span>
          <span className={styles.errorMessage}>{props.message}</span>
        </div>
      );

    default:
      return (
        <div className={styles.field}>
          <label>{props.label}</label>
          <input
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
          />
          <span className={styles.errorMessage}>{props.message}</span>
        </div>
      );
  }
}
