import { ReactNode } from "react";

export type HeaderDashType = {
  title: string;
};

export type InterviewCardType = {
  icon: ReactNode;
  title: string;
  percent: number;
  pending: number;
  complete: number;
  total: number;
};
