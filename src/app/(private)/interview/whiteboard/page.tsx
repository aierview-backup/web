"use client";

import { useWhiteboardStore } from "@/shared/store/whiteboardStore";
import Button from "@/shared/ui/components/Button";
import Textarea from "@/shared/ui/components/Textarea";
import { FormEvent, useState } from "react";
import styles from "./whiteboard.module.css";

export default function WhiteboardPage() {
  const { questions, setAnswer: setZustandAnswer } = useWhiteboardStore();
  const [currentIndex, setCurrentIndex] = useState(0);
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
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (answer.trim() === "" && !currentQuestion.answer) {
      setError("Answer is required");
      return;
    }

    setError("");
    setZustandAnswer(currentIndex, answer ? answer : currentQuestion.answer);

    if (currentIndex === questions.length - 1) {
      sendAnsweres();
      return;
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setAnswer("");
    }
  };

  const sendAnsweres = async () => {};

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.question}>
          <h2>{currentQuestion?.question}</h2>
          <div className={styles.answer}>
            <p>
              Your Answer : <span>{currentQuestion?.answer}</span>
            </p>
            <p>
              Feeback : <span>Hooo</span>
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
        {isLast && <Button handleClick={sendAnsweres} value="Finish" />}
      </div>
    </div>
  );
}
