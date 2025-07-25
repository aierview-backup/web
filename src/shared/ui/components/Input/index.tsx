"use client";

import { forwardRef, useState } from "react";
import styles from "./input.module.css";
import Search from "@/shared/ui/icons/search.svg";
import EyeIcon from "@/shared/ui/icons/visibility.svg";
import EyeOffIcon from "@/shared/ui/icons/visibility_off.svg";

import { InputType } from "@/shared/types";

const Input = forwardRef<HTMLInputElement, InputType>((props, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword((prev) => !prev);

    const renderSearch = () => (
        <div className={styles.field}>
      <span className={styles.inputIcon}>
        <input
            name={props.name}
            type="text"
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            ref={ref}
        />
        <span className={styles.icon}>
          <Search />
        </span>
      </span>
            {props.message && <span className={styles.errorMessage}>{props.message}</span>}
        </div>
    );

    const renderSelect = () => (
        <div className={styles.selectField}>
            {props.label && <label htmlFor={props.name}>{props.label}</label>}
            <select
                className={styles.select}
                name={props.name}
                value={props.value}
                onChange={props.onSelectChange}
            >
                <option disabled value="">
                    Choose an option
                </option>
                {props.options?.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            {props.message && <span className={styles.errorMessage}>{props.message}</span>}
        </div>
    );

    const renderCheckbox = () => (
        <label className={styles.checkbox}>
            <input
                type="checkbox"
                checked={props.checked}
                onChange={props.onChange}
                name={props.name}
                value={props.value}
                ref={ref}
            />
            <span></span>
            {props.label}
        </label>
    );

    const renderPassword = () => (
        <div className={styles.field}>
            {props.label && <label htmlFor={props.name}>{props.label}</label>}
            <span className={styles.inputIcon}>
        <input
            type={showPassword ? "text" : "password"}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            name={props.name}
            ref={ref}
        />
        <span onClick={togglePassword} className={styles.icon}>
          {showPassword ? <EyeIcon /> : <EyeOffIcon />}
        </span>
      </span>
            {props.message && <span className={styles.errorMessage}>{props.message}</span>}
        </div>
    );

    const renderDefault = () => (
        <div className={styles.field}>
            {props.label && <label htmlFor={props.name}>{props.label}</label>}
            <input
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                name={props.name}
                ref={ref}
            />
            {props.message && <span className={styles.errorMessage}>{props.message}</span>}
        </div>
    );

    switch (props.type) {
        case "search":
            return renderSearch();
        case "select":
            return renderSelect();
        case "checkbox":
            return renderCheckbox();
        case "password":
            return renderPassword();
        default:
            return renderDefault();
    }
});

Input.displayName = "Input";
export default Input;
