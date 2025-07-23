import { ReactNode } from "react";

export type CardType = {
  icon: ReactNode;
  title: string;
  percent: number;
  pendig: number;
  complete: number;
  total: number;
};
