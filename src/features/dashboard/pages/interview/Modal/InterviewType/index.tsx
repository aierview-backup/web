"use client";

import Card from "@/shared/ui/components/card";
import Modal from "@/shared/ui/components/Modal";
import CodeReviewIcon from "@/shared/ui/icons/code-review.svg";
import CodechallengeIcon from "@/shared/ui/icons/codechallenge.svg";
import WhiteboardIcon from "@/shared/ui/icons/whiteboard.svg";
import styles from "./interviewtype.module.css";

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

type InterviewTypeModalType = {
  onClose: () => void;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

export default function InterviewTypeModal(props: InterviewTypeModalType) {
  return (
    <Modal className={styles.modal} onClose={props.onClose}>
      <form className={styles.form}>
        <h1>Choose the type of technical interview you want to simulate.</h1>
        <div className={styles.cards}>
          {interviewCards.map((card, index) => (
            <Card
              key={index}
              className={styles.card}
              value={card.title}
              icon={card.icon}
              title={card.title}
              desc={card.desc}
              onClick={props.onClick}
            />
          ))}
        </div>
      </form>
    </Modal>
  );
}
