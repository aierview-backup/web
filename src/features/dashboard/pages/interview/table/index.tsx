import { TableType } from "@/features/dashboard/types";
import Input from "@/shared/ui/components/Input";
import styles from "./table.module.css";

export default function Table({ headers, rows }: TableType) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headers.map(({ key, label, isCheckbox }) => (
            <th key={key}>{isCheckbox ? <Input type="checkbox" /> : label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {headers.map(({ key, isCheckbox }, colIdx) => {
              const cellValue = row[key];

              if (isCheckbox) {
                return (
                  <td key={key}>
                    <Input type="checkbox" />
                  </td>
                );
              }

              let color: string | undefined;
              const score =
                typeof row.score === "number" ? row.score : Number(row.score);
              const status = String(row.status).toLowerCase();

              if (status === "pending" || score < 50) color = "#ff383c";
              else if (status === "done" && score >= 50) color = "#34c759";

              const tdStyle =
                colIdx === 1 && color
                  ? { borderLeft: `2px solid ${color}` }
                  : undefined;

              const isStyledText = colIdx === 6 || colIdx === 7;

              return (
                <td
                  key={key}
                  style={{
                    ...tdStyle,
                    ...(isStyledText && color
                      ? { color, fontWeight: "bold" }
                      : undefined),
                  }}
                >
                  {cellValue}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
