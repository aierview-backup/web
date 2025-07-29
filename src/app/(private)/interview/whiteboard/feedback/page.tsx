"use client";
import { useWhiteboardStore } from "@/shared/store/whiteboardStore";
import Image from "next/image";
import styles from "./feedback.module.css";

export default function FeedbackWhiteboard() {
  const { interview } = useWhiteboardStore();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2>
            Interview: <span>{interview?.id}</span>
          </h2>
          <h2>
            Level: <span>{interview?.level}</span>
          </h2>
          <h2>
            Role: <span>{interview?.role}</span>
          </h2>
          <h2>
            Technology: <span>{interview?.technology}</span>
          </h2>
          <h2>
            Total Questions: <span>{interview?.questions?.length}</span>
          </h2>
        </div>
        <Image
          src="/logos/aierview/logo-composed.svg"
          alt="logo composed"
          width={223}
          height={56}
        />
      </div>
      <hr />
      {interview?.questions?.map((question, index) => (
        <div key={index} className={styles.question}>
          <p>
            Question {index + 1}: <span>{question.question}</span>
          </p>
          <p>
            Answer {index + 1}: <span>{question.answer}</span>
          </p>
          <p>
            {question.feedback.split(":")[0]}:
            <span>{question.feedback.split(":")[1]}</span>
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}
