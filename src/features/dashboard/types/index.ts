import {ReactNode} from "react";

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

export type TableHeader = {
    key: string;
    label: string;
    isCheckbox?: boolean;
};

export type TableRow = {
    [key: string]: string | number | React.ReactNode | boolean;
};

export type TableType = {
    headers: TableHeader[];
    rows: TableRow[];
};
