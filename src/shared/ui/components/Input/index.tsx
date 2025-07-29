"use client";

import Search from "@/shared/ui/icons/search.svg";
import EyeIcon from "@/shared/ui/icons/visibility.svg";
import EyeOffIcon from "@/shared/ui/icons/visibility_off.svg";
import { InputHTMLAttributes, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./input.module.css";

export type InputType = {
  label?: string;
  message?: string;
  register?: UseFormRegisterReturn;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputType) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  switch (props.type) {
    case "search":
      return (
        <div className={styles.field}>
          <span className={styles.inputIcon}>
            <input
              id={props.id}
              // type={props.type}
              placeholder={props.placeholder}
              {...props.register}
            />
            <span className={styles.icon}>
              <Search />
            </span>
          </span>
          <span className={styles.errorMessage}>{props.message}</span>
        </div>
      );
    case "checkbox":
      return (
        <label className={styles.checkbox} htmlFor={props.id}>
          <input
            id={props.id}
            type="checkbox"
            {...props.register}
            checked={props.checked}
            onChange={props.onChange}
            placeholder={props.placeholder}
            {...props}
          />
          <span></span>
          {props.label}
        </label>
      );

    case "password":
      return (
        <div className={styles.field}>
          {props.label && <label htmlFor={props.id}>{props.label}</label>}
          <span className={styles.inputIcon}>
            <input
              id={props.id}
              type={showPassword ? "text" : "password"}
              placeholder={props.placeholder}
              {...props.register}
            />
            <span onClick={togglePassword} className={styles.icon}>
              {showPassword ? <EyeIcon /> : <EyeOffIcon />}
            </span>
          </span>
          <span className={styles.errorMessage}>{props.message}</span>
        </div>
      );

    default:
      return (
        <div className={styles.field}>
          {props.label && <label htmlFor={props.id}>{props.label}</label>}
          <input
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            {...props.register}
          />
          <span className={styles.errorMessage}>{props.message}</span>
        </div>
      );
  }
}
