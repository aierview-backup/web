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
import { useRouter } from "next/navigation";
import { useMemo, useRef, useState } from "react";
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
  const [interviewType, setInterviewType] = useState("");
  const interviewTypeRef = useRef("");

  const [isInterviewTypeModalOpen, setIsInterviewTypeModalOpen] =
    useState(false);
  const handleOpenInterviewTypeModal = () => setIsInterviewTypeModalOpen(true);
  const handleCloseInterviewTypeModal = () =>
    setIsInterviewTypeModalOpen(false);

  const [isTechnologyModalOpen, setIsTechnologyModal] = useState(false);
  const handleOpenTechnologyModal = () => setIsTechnologyModal(true);
  const handleCloseTechnologyModal = () => setIsTechnologyModal(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const value = event.currentTarget.getAttribute("data-value");
    if (!value) return;
    setInterviewType(value);
    interviewTypeRef.current = value;
    handleCloseInterviewTypeModal();
    handleOpenTechnologyModal();
  };

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
          handleClick={handleOpenInterviewTypeModal}
        />
      </div>
      <Table headers={headers} rows={rows} />
    </div>
  );

  const renderInterviewTypeModal = () => {
    if (!isInterviewTypeModalOpen) return null;

    return (
      <Modal className={styles.modal} onClose={handleCloseInterviewTypeModal}>
        <form className={styles.form}>
          <h1>Choose the type of technical interview you want to simulate.</h1>
          <div className={styles.cards}>
            {interviewCards.map((card, index) => (
              <Card
                value={card.title}
                className={styles.card}
                key={index}
                icon={card.icon}
                title={card.title}
                desc={card.desc}
                onClick={handleClick}
              />
            ))}
          </div>
        </form>
      </Modal>
    );
  };

  const [selectedRole, setSelectedRole] = useState("");
  const roleOptions = useMemo(
    () => [
      { label: "Frontend", value: "frontend" },
      { label: "Mobile", value: "mobile" },
      { label: "Fullstack", value: "fullstack" },
    ],
    []
  );

  const [selectedProgramingLanguage, setSelectedProgramingLanguage] =
    useState("");
  const programmingLanguages = useMemo(
    () => [
      { label: "Java", value: "java" },
      { label: "Javascript", value: "javascript" },
      { label: "Dart", value: "dart" },
    ],
    []
  );

  const [selectedLevel, setSelectedLevel] = useState("");
  const levels = useMemo(
    () => [
      { label: "Junior", value: "junior" },
      { label: "Mid Level", value: "midlevel" },
      { label: "Senior", value: "senior" },
    ],
    []
  );

  const router = useRouter();

  const handleClickNext = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const type = interviewTypeRef.current;
    console.log(type);
    if (!type) return;
    router.push(`/interview/${type.toLowerCase().replace(/\s+/g, "-")}`);
  };

  const renderTechnologyModal = () => {
    if (!isTechnologyModalOpen) return null;

    return (
      <Modal className={styles.modal} onClose={handleCloseTechnologyModal}>
        <form className={styles.form}>
          <h1>{interviewType} mode activated</h1>
          <p>
            Please provide the specialization, programming language, and
            seniority level to begin the simulation.
          </p>
          <div className={styles.fields}>
            <Input
              type="select"
              label="Role"
              name="role"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              options={roleOptions}
              message=""
            />
            <Input
              type="select"
              label="Programing Languages"
              name="programingLanguage"
              value={selectedProgramingLanguage}
              onChange={(e) => setSelectedProgramingLanguage(e.target.value)}
              options={programmingLanguages}
              message=""
            />
            <Input
              type="select"
              label="Level"
              name="level"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              options={levels}
              message=""
            />
          </div>
          <span>
            <Button handleClick={handleClickNext} value="Next" />
          </span>
        </form>
      </Modal>
    );
  };

  return (
    <div className={styles.content}>
      {renderCards()}
      {renderTable()}
      {renderInterviewTypeModal()}
      {renderTechnologyModal()}
    </div>
  );
}
