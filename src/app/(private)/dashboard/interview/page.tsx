"use client";

import InterviewCard from "@/features/dashboard/pages/interview/Card";
import Table from "@/features/dashboard/pages/interview/table";
import { TableHeader, TableRow } from "@/features/dashboard/types";
import Button from "@/shared/ui/components/Button";
import Card from "@/shared/ui/components/card";
import Input from "@/shared/ui/components/Input";
import Modal from "@/shared/ui/components/Modal";
import AddIcon from "@/shared/ui/icons/addLarge.svg";
import CodeReviewIcon from "@/shared/ui/icons/code-review.svg";
import CodechallengeIcon from "@/shared/ui/icons/codechallenge.svg";
import PlayIcon from "@/shared/ui/icons/paly.svg";
import TrashIcon from "@/shared/ui/icons/trash.svg";
import ViewIcon from "@/shared/ui/icons/view.svg";
import WhiteboardIcon from "@/shared/ui/icons/whiteboard.svg";
import { useCallback, useState } from "react";
import styles from "./interview.module.css";

// ----------------------
// Table headers
// ----------------------
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

// ----------------------
// Table rows
// ----------------------
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
        <Button className={styles.trash} type="iconBtn" value={<TrashIcon />} />
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
        <Button className={styles.trash} type="iconBtn" value={<TrashIcon />} />
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
        <Button className={styles.trash} type="iconBtn" value={<TrashIcon />} />
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
        <Button className={styles.trash} type="iconBtn" value={<TrashIcon />} />
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
        <Button className={styles.trash} type="iconBtn" value={<TrashIcon />} />
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
        <Button className={styles.trash} type="iconBtn" value={<TrashIcon />} />
      </>
    ),
  },
];

const interviewCards = [
  {
    icon: <WhiteboardIcon />,
    title: "Whiteboard",
    desc:
      "Challenges focused on logic, code structure, and problem-solving. " +
      "Respond by explaining your reasoning and demonstrate your technical skills — no actual coding required.",
  },
  {
    icon: <CodeReviewIcon />,
    title: "Code Review",
    desc:
      "Analyze code snippets, identify issues, and suggest improvements. " +
      "Show your mastery of best practices, readability, and software quality.",
  },
  {
    icon: <CodechallengeIcon />,
    title: "Code Challenge",
    desc:
      "Solve real programming challenges based on your chosen language and skill level. " +
      "Get instant analysis of your solution with technical feedback and improvement suggestions.",
  },
];

// ----------------------
// Component
// ----------------------
export default function Interview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const value = event.currentTarget.getAttribute("data-value");
    console.log(value);
  }, []);

  const renderCards = () => (
    <div className={styles.cards}>
      <InterviewCard
        icon={<WhiteboardIcon />}
        title="Whiteboard"
        percent={50}
        pending={100}
        complete={50}
        total={100}
      />
      <InterviewCard
        icon={<CodeReviewIcon />}
        title="Code Review"
        percent={70}
        pending={30}
        complete={70}
        total={100}
      />
      <InterviewCard
        icon={<CodechallengeIcon />}
        title="Code Challenge"
        percent={30}
        pending={70}
        complete={30}
        total={100}
      />
    </div>
  );

  const renderTable = () => (
    <div className={styles.tableContainer}>
      <div className={styles.searchAndAdd}>
        <Input type="search" placeholder="Search ..." />
        <Button
          className={styles.add}
          type="iconBtn"
          value={<AddIcon />}
          handleClick={handleOpenModal}
        />
      </div>
      <Table headers={headers} rows={rows} />
    </div>
  );

  const renderModal = () => {
    if (!isModalOpen) return null;

    return (
      <Modal className={styles.modal} onClose={handleCloseModal}>
        <div className={styles.modalContent}>
          <h1>Choose the type of technical interview you want to simulate.</h1>
          <div className={styles.cards}>
            {interviewCards.map((card, index) => (
              <Card
                value={card.title.toLowerCase().replace(/\s+/g, "")}
                className={styles.card}
                key={index}
                icon={card.icon}
                title={card.title}
                desc={card.desc}
                onClick={handleClick}
              />
            ))}
          </div>
        </div>
      </Modal>
    );
  };

  return (
    <div className={styles.content}>
      {renderCards()}
      {renderTable()}
      {renderModal()}
    </div>
  );
}
