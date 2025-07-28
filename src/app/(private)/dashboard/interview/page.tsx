"use client";

import { useRef, useState } from "react";

import styles from "./interview.module.css";

import InterviewCard from "@/features/dashboard/pages/interview/Card";
import Table from "@/features/dashboard/pages/interview/table";
import { TableHeader, TableRow } from "@/features/dashboard/types";
import Button from "@/shared/ui/components/Button";
import Input from "@/shared/ui/components/Input";

import InterviewTypeModal from "@/features/dashboard/pages/interview/Modal/InterviewType";
import TechnologyModal from "@/features/dashboard/pages/interview/Modal/TechnologyModal";
import AddIcon from "@/shared/ui/icons/addLarge.svg";
import CodeReviewIcon from "@/shared/ui/icons/code-review.svg";
import CodechallengeIcon from "@/shared/ui/icons/codechallenge.svg";
import PlayIcon from "@/shared/ui/icons/paly.svg";
import TrashIcon from "@/shared/ui/icons/trash.svg";
import ViewIcon from "@/shared/ui/icons/view.svg";
import WhiteboardIcon from "@/shared/ui/icons/whiteboard.svg";

export default function Interview() {
  const interviewTypeRef = useRef("");
  const [interviewType, setInterviewType] = useState("");
  const [isInterviewTypeModalOpen, setIsInterviewTypeModalOpen] =
    useState(false);
  const [isTechnologyModalOpen, setIsTechnologyModal] = useState(false);

  const handleClickCard = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const value = e.currentTarget.getAttribute("data-value");
    if (!value) return;
    setInterviewType(value);
    interviewTypeRef.current = value;
    setIsInterviewTypeModalOpen(false);
    setIsTechnologyModal(true);
  };

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
          <Button
            className={styles.trash}
            type="iconBtn"
            value={<TrashIcon />}
          />
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
          <Button
            className={styles.trash}
            type="iconBtn"
            value={<TrashIcon />}
          />
        </>
      ),
    },
    // outros omitidos por brevidade...
  ];

  return (
    <div className={styles.content}>
      {/* Cards superiores */}
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

      {/* Tabela */}
      <div className={styles.tableContainer}>
        <div className={styles.searchAndAdd}>
          <Input id="search" type="search" placeholder="Search ..." />
          <Button
            className={styles.add}
            type="iconBtn"
            value={<AddIcon />}
            handleClick={() => setIsInterviewTypeModalOpen(true)}
          />
        </div>
        <Table headers={headers} rows={rows} />
      </div>

      {isInterviewTypeModalOpen && (
        <InterviewTypeModal
          onClose={() => setIsInterviewTypeModalOpen(false)}
          onClick={handleClickCard}
        />
      )}

      {isTechnologyModalOpen && (
        <TechnologyModal
          interviewType={interviewType}
          onClose={() => setIsTechnologyModal(false)}
        />
      )}
    </div>
  );
}
