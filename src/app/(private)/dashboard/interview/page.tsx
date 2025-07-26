"use client";

import { useRouter } from "next/navigation";
import { useMemo, useRef, useState } from "react";

import styles from "./interview.module.css";

import InterviewCard from "@/features/dashboard/pages/interview/Card";
import Table from "@/features/dashboard/pages/interview/table";
import { TableHeader, TableRow } from "@/features/dashboard/types";
import Button from "@/shared/ui/components/Button";
import Card from "@/shared/ui/components/card";
import Input from "@/shared/ui/components/Input";
import Modal from "@/shared/ui/components/Modal";

import Select from "@/shared/ui/components/Select";
import AddIcon from "@/shared/ui/icons/addLarge.svg";
import CodeReviewIcon from "@/shared/ui/icons/code-review.svg";
import CodechallengeIcon from "@/shared/ui/icons/codechallenge.svg";
import PlayIcon from "@/shared/ui/icons/paly.svg";
import TrashIcon from "@/shared/ui/icons/trash.svg";
import ViewIcon from "@/shared/ui/icons/view.svg";
import WhiteboardIcon from "@/shared/ui/icons/whiteboard.svg";

export default function Interview() {
  const router = useRouter();
  // ============================
  // Estados e Refs
  // ============================

  const [interviewType, setInterviewType] = useState("");
  const interviewTypeRef = useRef("");

  const [isInterviewTypeModalOpen, setIsInterviewTypeModalOpen] =
    useState(false);
  const [isTechnologyModalOpen, setIsTechnologyModal] = useState(false);
  // ============================
  // Opções dos selects
  // ============================

  const roleOptions = useMemo(
    () => [
      { label: "Frontend", value: "frontend" },
      { label: "Mobile", value: "mobile" },
      { label: "Fullstack", value: "fullstack" },
    ],
    []
  );

  const programmingLanguages = useMemo(
    () => [
      { label: "Java", value: "java" },
      { label: "Javascript", value: "javascript" },
      { label: "Dart", value: "dart" },
    ],
    []
  );

  const levels = useMemo(
    () => [
      { label: "Junior", value: "junior" },
      { label: "Mid Level", value: "midlevel" },
      { label: "Senior", value: "senior" },
    ],
    []
  );

  // ============================
  // Handlers
  // ============================

  const handleClickCard = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const value = e.currentTarget.getAttribute("data-value");
    if (!value) return;
    setInterviewType(value);
    interviewTypeRef.current = value;
    setIsInterviewTypeModalOpen(false);
    setIsTechnologyModal(true);
  };

  const handleClickNext = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const type = interviewTypeRef.current;
    if (!type) return;
    router.push(`/interview/${type.toLowerCase().replace(/\s+/g, "-")}`);
  };

  // ============================
  // Dados Estáticos
  // ============================

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

  const interviewCards = [
    {
      icon: <WhiteboardIcon />,
      title: "Whiteboard",
      desc: "Challenges focused on logic, code structure, and problem-solving.",
    },
    {
      icon: <CodeReviewIcon />,
      title: "Code Review",
      desc: "Analyze code snippets, identify issues, and suggest improvements.",
    },
    {
      icon: <CodechallengeIcon />,
      title: "Code Challenge",
      desc: "Solve real programming challenges with instant technical feedback.",
    },
  ];

  // ============================
  // JSX
  // ============================

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

      {/* Modal 1: Tipo de Entrevista */}
      {isInterviewTypeModalOpen && (
        <Modal
          className={styles.modal}
          onClose={() => setIsInterviewTypeModalOpen(false)}
        >
          <form className={styles.form}>
            <h1>
              Choose the type of technical interview you want to simulate.
            </h1>
            <div className={styles.cards}>
              {interviewCards.map((card, index) => (
                <Card
                  key={index}
                  className={styles.card}
                  value={card.title}
                  icon={card.icon}
                  title={card.title}
                  desc={card.desc}
                  onClick={handleClickCard}
                />
              ))}
            </div>
          </form>
        </Modal>
      )}

      {/* Modal 2: Tecnologia */}
      {isTechnologyModalOpen && (
        <Modal
          className={styles.modal}
          onClose={() => setIsTechnologyModal(false)}
        >
          <form className={styles.form}>
            <h1>{interviewType} mode activated</h1>
            <p>
              Please provide the specialization, programming language, and
              seniority level to begin the simulation.
            </p>
            <div className={styles.fields}>
              <Select
                id="role"
                name="role"
                label="Slect a Role"
                placeholder="Choose your role"
                options={roleOptions}
              />

              <Select
                id="programingLanguage"
                name="programingLanguage"
                label="Select a Programing Language"
                placeholder="Choose your programing language"
                options={programmingLanguages}
              />

              <Select
                id="level"
                name="level"
                label="Select a Level"
                placeholder="Choose a level"
                options={levels}
              />
            </div>
            <span>
              <Button handleClick={handleClickNext} value="Next" />
            </span>
          </form>
        </Modal>
      )}
    </div>
  );
}
