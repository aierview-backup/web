"use client";

import { TableType } from "@/features/dashboard/types";
import Input from "@/shared/ui/components/Input";
import { useState } from "react";
import styles from "./table.module.css";

export default function Table({ headers, rows }: TableType) {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState<boolean[]>(() =>
    rows.map(() => false)
  );

  const handleToggleAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setSelectedRows(rows.map(() => newSelectAll));
  };

  const handleToggleRow = (index: number) => {
    const updated = [...selectedRows];
    updated[index] = !updated[index];
    setSelectedRows(updated);
    setSelectAll(updated.every(Boolean));
  };

  const getCellStyle = (
    key: string,
    colIdx: number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    row: any
  ): React.CSSProperties | undefined => {
    const score = typeof row.score === "number" ? row.score : Number(row.score);
    const status = String(row.status).toLowerCase();

    let color: string | undefined;
    if (status === "pending" || score < 50) color = "#ff383c";
    else if (status === "done" && score >= 50) color = "#34c759";

    const isStyledText = colIdx === 6 || colIdx === 7;

    return {
      ...(colIdx === 1 && color ? { borderLeft: `2px solid ${color}` } : {}),
      ...(isStyledText && color ? { color, fontWeight: "bold" } : {}),
    };
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headers.map(({ key, label, isCheckbox }) => (
            <th key={key}>
              {isCheckbox ? (
                <Input
                  type="checkbox"
                  id="selectAll"
                  checked={selectAll}
                  onChange={handleToggleAll}
                />
              ) : (
                label
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {headers.map(({ key, isCheckbox }, colIdx) => (
              <td key={key} style={getCellStyle(key, colIdx, row)}>
                {isCheckbox ? (
                  <Input
                    type="checkbox"
                    checked={selectedRows[rowIdx]}
                    onChange={() => handleToggleRow(rowIdx)}
                  />
                ) : (
                  row[key]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
