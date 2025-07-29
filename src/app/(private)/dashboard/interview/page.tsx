"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./interview.module.css";

import InterviewCard from "@/features/dashboard/pages/interview/Card";
import Table, { TableHeader } from "@/features/dashboard/pages/interview/table";
import Button from "@/shared/ui/components/Button";
import Input from "@/shared/ui/components/Input";

import InterviewTypeModal from "@/features/dashboard/pages/interview/Modal/InterviewType";
import TechnologyModal from "@/features/dashboard/pages/interview/Modal/TechnologyModal";
import { InterviewResponseType } from "@/features/interview/whitebord/types/types";
import { useWhiteboardStore } from "@/shared/store/whiteboardStore";
import AddIcon from "@/shared/ui/icons/addLarge.svg";
import CodeReviewIcon from "@/shared/ui/icons/code-review.svg";
import CodechallengeIcon from "@/shared/ui/icons/codechallenge.svg";
import PlayIcon from "@/shared/ui/icons/paly.svg";
import TrashIconLarge from "@/shared/ui/icons/trash-large.svg";
import TrashIcon from "@/shared/ui/icons/trash.svg";
import ViewIcon from "@/shared/ui/icons/view.svg";
import WhiteboardIcon from "@/shared/ui/icons/whiteboard.svg";
import { useRouter } from "next/navigation";

export default function Interview() {
  const router = useRouter();
  const interviewTypeRef = useRef("");
  const [interviewType, setInterviewType] = useState("");
  const [isInterviewTypeModalOpen, setIsInterviewTypeModalOpen] =
    useState(false);
  const [isTechnologyModalOpen, setIsTechnologyModal] = useState(false);
  const { interviews, readAll, deleteOne, deleteMany, setIntverview } =
    useWhiteboardStore();

  const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);

  useEffect(() => {
    const fetchInterviews = async () => {
      await readAll();
    };
    fetchInterviews();
  }, [readAll]);

  const handleClickCard = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const value = e.currentTarget.getAttribute("data-value");
    if (!value) return;
    setInterviewType(value);
    interviewTypeRef.current = value;
    setIsInterviewTypeModalOpen(false);
    setIsTechnologyModal(true);
  };

  const handleDeleteRow = async (id: number) => {
    await deleteOne(id);
  };

  const handleDeleteSelected = async () => {
    await deleteMany(selectedIds as number[]);
    setSelectedIds([]);
  };

  const handlePlayClick = (interview: InterviewResponseType) => {
    setIntverview(interview);
    router.push(`/interview/${interview.type.toLowerCase()}`);
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

  const rows = interviews.map((interview) => ({
    select: false,
    id: interview.id,
    type: interview.type,
    role: interview.role,
    level: interview.level,
    tech: interview.technology,
    date: interview.date,
    score: interview.score,
    status: interview.status,
    actions: (
      <>
        {interview.status === "pending".toUpperCase() ? (
          <Button
            handleClick={() => handlePlayClick(interview)}
            className={styles.view}
            type="iconBtn"
            value={<PlayIcon />}
          />
        ) : (
          <Button className={styles.view} type="iconBtn" value={<ViewIcon />} />
        )}
        <Button
          handleClick={() => handleDeleteRow(interview.id)}
          className={styles.trash}
          type="iconBtn"
          value={<TrashIcon />}
        />
      </>
    ),
  }));

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
        <div className={styles.wrapper}>
          <div className={styles.searchAndAdd}>
            <Input id="search" type="search" placeholder="Search ..." />
            <Button
              className={styles.add}
              type="iconBtn"
              value={<AddIcon />}
              handleClick={() => setIsInterviewTypeModalOpen(true)}
            />
            <Button
              className={`${styles.deleteAll} ${!selectedIds.length && styles.disabled}`}
              type="iconBtn"
              value={<TrashIconLarge />}
              handleClick={handleDeleteSelected}
            />
          </div>
          <h1>{interviews.length} interviews</h1>
        </div>
        <Table
          rows={rows}
          headers={headers}
          onDeleteRow={handleDeleteRow}
          onSelectionChange={setSelectedIds}
        />
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
