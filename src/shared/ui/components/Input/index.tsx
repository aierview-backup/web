"use client";

import { InputType } from "@/shared/types";
import Search from "@/shared/ui/icons/search.svg";
import EyeIcon from "@/shared/ui/icons/visibility.svg";
import EyeOffIcon from "@/shared/ui/icons/visibility_off.svg";
import { useState } from "react";
import styles from "./input.module.css";

export default function Input(props: InputType) {
  const {
    type,
    placeholder,
    value,
    onChange,
    onSelectChange,
    label,
    name,
    message,
    checked,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const renderSearch = () => (
    <div className={styles.field}>
      <span className={styles.inputIcon}>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
        <span className={styles.icon}>
          <Search />
        </span>
      </span>
      {message && <span className={styles.errorMessage}>{message}</span>}
    </div>
  );

  const renderSelect = () => (
    <div className={styles.selectField}>
      {label && <label htmlFor={name}>{label}</label>}
      <select
        className={styles.select}
        name={name}
        value={value}
        onChange={onSelectChange}
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
      {message && <span className={styles.errorMessage}>{message}</span>}
    </div>
  );

  const renderCheckbox = () => (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        name={name}
        value={value}
      />
      <span></span>
      {label}
    </label>
  );

  const renderPassword = () => (
    <div className={styles.field}>
      {label && <label htmlFor={name}>{label}</label>}
      <span className={styles.inputIcon}>
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
        <span onClick={togglePassword} className={styles.icon}>
          {showPassword ? <EyeIcon /> : <EyeOffIcon />}
        </span>
      </span>
      {message && <span className={styles.errorMessage}>{message}</span>}
    </div>
  );

  const renderDefault = () => (
    <div className={styles.field}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
      {message && <span className={styles.errorMessage}>{message}</span>}
    </div>
  );

  switch (type) {
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
}
