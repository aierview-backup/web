import styles from "./listiningloader.module.css";

type SpinnerType = {
  hidden: boolean;
};

export default function Listiningloader(pros: SpinnerType) {
  return (
    <span
      className={`${styles.loader}  ${pros.hidden ? styles.hidden : ""}`}
    ></span>
  );
}
