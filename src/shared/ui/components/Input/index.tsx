"use client";

import Search from "@/shared/ui/icons/search.svg";
import EyeIcon from "@/shared/ui/icons/visibility.svg";
import EyeOffIcon from "@/shared/ui/icons/visibility_off.svg";
import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./input.module.css";

type InputType = {
  id: string;
  label?: string;
  type?: string;
  register?: UseFormRegisterReturn;
  placeholder?: string;
  message?: string;
};

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
              type={props.type}
              placeholder={props.placeholder}
              {...props.register}
            />
            <span className={styles.icon}>
              <Search />
            </span>
          </span>
          {props.message && (
            <span className={styles.errorMessage}>{props.message}</span>
          )}
        </div>
      );
    case "checkbox":
      return (
        <label className={styles.checkbox}>
          <input
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            {...props.register}
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
          {props.message && (
            <span className={styles.errorMessage}>{props.message}</span>
          )}
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
            {...props.register}
          />
          {props.message && (
            <span className={styles.errorMessage}>{props.message}</span>
          )}
        </div>
      );
  }
}
