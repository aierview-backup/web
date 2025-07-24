import { ReactNode } from "react";

export type HeaderDashType = {
  title: string;
};

export type InterviewCardType = {
  icon: ReactNode;
  title: string;
  percent: number;
  pendig: number;
  complete: number;
  total: number;
};
