import styles from "./homecard.module.css";
import { ReactNode } from "react";

type HomeCardType = {
  icon: ReactNode;
  title: string;
  desc: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  value?: string;
};

export default function HomeCard(props: HomeCardType) {
  return (
    <div
      data-value={props.value}
      onClick={props.onClick}
      className={`${styles.card} ${props.className}`}
    >
      {props.icon}
      <h2>{props.title}</h2>
      <div>{props.desc}</div>
    </div>
  );
}
