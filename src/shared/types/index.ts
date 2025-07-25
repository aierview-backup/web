import {MouseEventHandler, ReactNode} from "react";

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
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    value?: string;
};

export type ButtonType = {
    type?: string;
    value?: string | ReactNode;
    className?: string;
    disabled?: boolean;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
};

export type InputType = {
    label?: string;
    type: string;
    message?: string;
    placeholder?: string;
    value?: string;
    checked?: boolean;
    options?: { label: string; value: string }[];
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSelectChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    name?: string;
};
