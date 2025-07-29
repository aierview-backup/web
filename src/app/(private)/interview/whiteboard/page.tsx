"use client";

import { useWhiteboardStore } from "@/shared/store/whiteboardStore";
import Button from "@/shared/ui/components/Button";
import Textarea from "@/shared/ui/components/Textarea";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import styles from "./whiteboard.module.css";

export default function WhiteboardPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    interview,
    setAnswer: setZustandAnswer,
    sendAnswers,
  } = useWhiteboardStore();

  const questions = interview?.questions || [];
  const currentQuestion = questions[currentIndex];

  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === questions.length - 1;
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (answer.trim() === "" && !currentQuestion.answer) {
      setError("Answer is required");
      return;
    }

    setError("");
    setZustandAnswer(currentIndex, answer ? answer : currentQuestion.answer);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setAnswer("");
    }

    if (isLast) {
      const result = await handleSendAnswers();
      if (result) router.push("/interview/whiteboard/feedback");
    }
  };

  const handleSendAnswers = async (): Promise<boolean> => {
    if (!interview) return false;
    return await sendAnswers(interview);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.question}>
          <h2>{currentQuestion?.question}</h2>
          <div className={styles.answer}>
            <p>
              Your Answer : <span>{currentQuestion?.answer}</span>
            </p>
          </div>
          <Textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            error={error}
          />
        </div>
      </form>

      <div className={styles.controls}>
        {!isFirst && (
          <Button
            className={isFirst ? styles.disabled : ""}
            handleClick={handlePrev}
            value="Prev"
          />
        )}
      </div>
    </div>
  );
}
