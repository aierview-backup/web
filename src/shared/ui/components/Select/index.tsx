import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./select.module.css";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  id: string;
  label?: string;
  name: string;
  options: Option[];
  placeholder?: string;
  message?: string;
  register?: UseFormRegisterReturn;
};

const Select: React.FC<SelectProps> = ({
  label,
  name,
  options,
  placeholder,
  message,
  register,
}) => {
  return (
    <div className={styles.selectField}>
      {label && <label htmlFor={name}>{label}</label>}
      <select id={name} {...register} className={styles.select}>
        <option value="">{placeholder || "Selecione uma opção"}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {message && <span className={styles.errorMessage}>{message}</span>}
    </div>
  );
};

export default Select;
