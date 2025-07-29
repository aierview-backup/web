import styles from "./Spinner.module.css";

type SpinnerType = {
  hidden: boolean;
};

export default function Spinner(pros: SpinnerType) {
  return (
    <span className={styles.container}>
      <span
        className={`${styles.loader}  ${pros.hidden ? styles.hidden : ""}`}
      ></span>
    </span>
  );
}
