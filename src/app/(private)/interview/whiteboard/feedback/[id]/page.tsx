"use client";
import { useInterviewStore } from "@/shared/store/useInterviewStore";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import styles from "./feedback.module.css";

export default function FeedbackWhiteboard() {
  const params = useParams();
  const interviewId = params.id;
  const { interview, readInterview } = useInterviewStore();

  useEffect(() => {
    const fetchInterview = async () => {
      await readInterview(Number(interviewId));
    };
    fetchInterview();
  }, [readInterview]);

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
            Feedback {index + 1}:
            <span>{question.feedback?.split("feedback:")[1]}</span>
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}
