import Button from "@/shared/ui/components/Button";
import MenuIcon from "@/shared/ui/icons/menu.svg";
import SingoutIcon from "@/shared/ui/icons/singout.svg";
import styles from "./header.module.css";

type HeaderDashProps = {
  title: string;
};

export default function HeaderDash(props: HeaderDashProps) {
  return (
    <header className={styles.header}>
      <h1>{props.title}</h1>
      <div className={styles.actions}>
        <Button className={styles.menu} type="iconBtn" value={<MenuIcon />} />
        <Button
          className={styles.singout}
          type="iconBtn"
          value={<SingoutIcon />}
        />
      </div>
    </header>
  );
}
