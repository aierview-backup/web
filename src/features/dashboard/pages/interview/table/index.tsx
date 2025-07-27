"use client";

import {TableType} from "@/features/dashboard/types";
import Input from "@/shared/ui/components/Input";
import {useCallback, useMemo, useState} from "react";
import styles from "./table.module.css";

export default function Table({headers, rows}: TableType) {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState<boolean[]>(() =>
        rows.map(() => false)
    );

    const handleToggleAll = useCallback(() => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        setSelectedRows(rows.map(() => newSelectAll));
    }, [selectAll, rows]);

    const handleToggleRow = useCallback(
        (index: number) => {
            setSelectedRows((prev) => {
                const updated = [...prev];
                updated[index] = !updated[index];
                setSelectAll(updated.every(Boolean));
                return updated;
            });
        },
        [setSelectedRows]
    );

    const renderHeader = useCallback(
        () => (
            <thead>
            <tr>
                {headers.map(({key, label, isCheckbox}) => (
                    <th key={key}>
                        {isCheckbox ? <Input type="checkbox" id="selectAll"/> : label}
                    </th>
                ))}
            </tr>
            </thead>
        ),
        [headers, selectAll, handleToggleAll]
    );

    const getCellStyle = useCallback(
        (
            key: string,
            colIdx: number,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            row: any
        ): React.CSSProperties | undefined => {
            const score =
                typeof row.score === "number" ? row.score : Number(row.score);
            const status = String(row.status).toLowerCase();

            let color: string | undefined;
            if (status === "pending" || score < 50) color = "#ff383c";
            else if (status === "done" && score >= 50) color = "#34c759";

            const isStyledText = colIdx === 6 || colIdx === 7;

            return {
                ...(colIdx === 1 && color ? {borderLeft: `2px solid ${color}`} : {}),
                ...(isStyledText && color ? {color, fontWeight: "bold"} : {}),
            };
        },
        []
    );

    const renderCell = useCallback(
        (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            row: any,
            rowIdx: number,
            colIdx: number,
            key: string,
            isCheckbox?: boolean
        ) => {
            if (isCheckbox) {
                return (
                    <td key={key}>
                        <Input type="checkbox" id="selectAll"/>
                    </td>
                );
            }

            return (
                <td key={key} style={getCellStyle(key, colIdx, row)}>
                    {row[key]}
                </td>
            );
        },
        [selectedRows, handleToggleRow, getCellStyle]
    );

    const renderRow = useCallback(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (row: any, rowIdx: number) => (
            <tr key={rowIdx}>
                {headers.map(({key, isCheckbox}, colIdx) =>
                    renderCell(row, rowIdx, colIdx, key, isCheckbox)
                )}
            </tr>
        ),
        [headers, renderCell]
    );

    const tableBody = useMemo(() => {
        return rows.map((row, idx) => renderRow(row, idx));
    }, [rows, renderRow]);

    return (
        <table className={styles.table}>
            {renderHeader()}
            <tbody>{tableBody}</tbody>
        </table>
    );
}
