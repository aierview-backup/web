"use client";

import Input from "@/shared/ui/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { tableSelectionSchema } from "./table-validation";
import styles from "./table.module.css";

export type TableHeader = {
  key: string;
  label: string;
  isCheckbox?: boolean;
};

export type TableRow = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export type TableType = {
  headers: TableHeader[];
  rows: TableRow[];
};

type TableProps = TableType & {
  onDeleteRow: (id: number) => void;
  onSelectionChange?: (selectedIds: (string | number)[]) => void;
};

export default function Table({
  headers,
  rows,
  onSelectionChange,
}: TableProps) {
  const {
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(tableSelectionSchema),
    defaultValues: {
      selectedIds: [],
    },
  });

  const watchedSelectedIds = watch("selectedIds");
  const selectedIds = useMemo(
    () => watchedSelectedIds || [],
    [watchedSelectedIds]
  );

  useEffect(() => {
    if (onSelectionChange) onSelectionChange(selectedIds);
  }, [selectedIds, onSelectionChange]);

  const handleToggleAll = () => {
    const allIds = rows.map((row) => row.id);
    const isAllSelected = selectedIds.length === allIds.length;
    setValue("selectedIds", isAllSelected ? [] : allIds);
  };

  const handleToggleRow = (id: string | number) => {
    const current = getValues("selectedIds") || [];
    if (current.includes(id)) {
      setValue(
        "selectedIds",
        current.filter((item) => item !== id)
      );
    } else {
      setValue("selectedIds", [...current, id]);
    }
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
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map(({ key, label, isCheckbox }) => (
              <th key={key}>
                {isCheckbox ? (
                  <Input
                    type="checkbox"
                    id="selectAll"
                    checked={selectedIds.length === rows.length}
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
          {rows.map((row) => (
            <tr key={row.id}>
              {headers.map(({ key, isCheckbox }, colIdx) => (
                <td key={key} style={getCellStyle(key, colIdx, row)}>
                  {isCheckbox ? (
                    <Input
                      type="checkbox"
                      checked={selectedIds.includes(row.id)}
                      onChange={() => handleToggleRow(row.id)}
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
      {errors.selectedIds && (
        <p className="text-red">{errors.selectedIds.message}</p>
      )}
    </div>
  );
}
