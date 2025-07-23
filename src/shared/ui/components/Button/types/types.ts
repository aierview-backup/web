import { MouseEventHandler, ReactNode } from "react";

export type ButtonProps = {
  type?: string;
  value?: string | ReactNode;
  className?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};
