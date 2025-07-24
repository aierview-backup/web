import { MouseEventHandler, ReactNode } from "react";

export type AppContextType = {
  title: string;
  setTitle: (value: string) => void;
  isAsideOpen?: boolean;
  toggleAside?: () => void;
};

export type HomeCardType = {
  icon: ReactNode;
  title: string;
  desc: string;
};

export type ButtonType = {
  type?: string;
  value?: string | ReactNode;
  className?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

export type InputType = {
  label?: string;
  type: string;
  message?: string;
  placeholder?: string;
  value?: string;
};
