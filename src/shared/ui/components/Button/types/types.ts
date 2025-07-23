import { MouseEventHandler, ReactNode } from "react";

export type ButtonProps = {
  type?: string;
  value?: string | ReactNode;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};
