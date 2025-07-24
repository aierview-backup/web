import Card from "@/features/dashboard/pages/interview/Card";
import Table from "@/features/dashboard/pages/interview/table";
import { TableHeader, TableRow } from "@/features/dashboard/types";
import Button from "@/shared/ui/components/Button";
import Input from "@/shared/ui/components/Input";
import AddIcon from "@/shared/ui/icons/addLarge.svg";
import CodeReviewIcon from "@/shared/ui/icons/code-review.svg";
import Codechallenge from "@/shared/ui/icons/codechallenge.svg";
import PlayIcon from "@/shared/ui/icons/paly.svg";
import TrsahIcon from "@/shared/ui/icons/trash.svg";
import ViewIcon from "@/shared/ui/icons/view.svg";
import WhiteboardIcon from "@/shared/ui/icons/whiteboard.svg";
import styles from "./interview.module.css";

const headers: TableHeader[] = [
  { key: "select", label: "", isCheckbox: true },
  { key: "type", label: "Type" },
  { key: "role", label: "Role" },
  { key: "level", label: "Level" },
  { key: "tech", label: "Technology" },
  { key: "date", label: "Date" },
  { key: "score", label: "Score" },
  { key: "status", label: "Status" },
  { key: "actions", label: "Actions" },
];

const rows: TableRow[] = [
  {
    select: false,
    type: "Whiteboard",
    role: "Backend",
    level: "Senior",
    tech: "Java",
    date: "2025-07-23",
    score: 50,
    status: "Done",
    actions: (
      <>
        <Button className={styles.view} type="iconBtn" value={<ViewIcon />} />
        <Button className={styles.trash} type="iconBtn" value={<TrsahIcon />} />
      </>
    ),
  },
  {
    select: false,
    type: "Code Review",
    role: "Mobile",
    level: "Mid Level",
    tech: "React Native",
    date: "2025-07-23",
    score: 50,
    status: "Pending",
    actions: (
      <>
        <Button className={styles.view} type="iconBtn" value={<PlayIcon />} />
        <Button className={styles.trash} type="iconBtn" value={<TrsahIcon />} />
      </>
    ),
  },
  {
    select: false,
    type: "Code Challenge",
    role: "Fullstack",
    level: "Junior",
    tech: ".Net",
    date: "2025-07-23",
    score: 30,
    status: "Done",
    actions: (
      <>
        <Button className={styles.view} type="iconBtn" value={<ViewIcon />} />
        <Button className={styles.trash} type="iconBtn" value={<TrsahIcon />} />
      </>
    ),
  },
  {
    select: false,
    type: "Whiteboard",
    role: "Frontend",
    level: "Senior",
    tech: "React",
    date: "2025-07-23",
    score: 70,
    status: "Done",
    actions: (
      <>
        <Button className={styles.view} type="iconBtn" value={<ViewIcon />} />
        <Button className={styles.trash} type="iconBtn" value={<TrsahIcon />} />
      </>
    ),
  },
  {
    select: false,
    type: "Code Challenge",
    role: "Fullstack",
    level: "Junior",
    tech: ".Net",
    date: "2025-07-23",
    score: 30,
    status: "Done",
    actions: (
      <>
        <Button className={styles.view} type="iconBtn" value={<ViewIcon />} />
        <Button className={styles.trash} type="iconBtn" value={<TrsahIcon />} />
      </>
    ),
  },
  {
    select: false,
    type: "Whiteboard",
    role: "Backend",
    level: "Senior",
    tech: "Java",
    date: "2025-07-23",
    score: 50,
    status: "Done",
    actions: (
      <>
        <Button className={styles.view} type="iconBtn" value={<ViewIcon />} />
        <Button className={styles.trash} type="iconBtn" value={<TrsahIcon />} />
      </>
    ),
  },
];

export default function Interview() {
  return (
    <div className={styles.content}>
      <div className={styles.cards}>
        <Card
          icon={<WhiteboardIcon />}
          title="Whiteboard"
          percent={50}
          pendig={100}
          complete={50}
          total={100}
        />
        <Card
          icon={<CodeReviewIcon />}
          title="Code Review"
          percent={70}
          pendig={30}
          complete={70}
          total={100}
        />
        <Card
          icon={<Codechallenge />}
          title="Code Challenge"
          percent={30}
          pendig={70}
          complete={30}
          total={100}
        />
      </div>
      <div className={styles.tableContainer}>
        <div className={styles.searchAndAdd}>
          <Input type="search" placeholder="Search ..." />
          <Button className={styles.add} type="iconBtn" value={<AddIcon />} />
        </div>
        <Table headers={headers} rows={rows} />;
      </div>
    </div>
  );
}
