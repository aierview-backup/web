"use client";

import { useInterviewStore } from "@/shared/store/useInterviewStore";
import { useWhiteboardStore } from "@/shared/store/useWhiteboardStore";
import Button from "@/shared/ui/components/Button";
import Listiningloader from "@/shared/ui/components/ListiningLoader";
import VoiceRecordStopIcon from "@/shared/ui/icons/voice-record-stop.svg";
import VoiceRecordIcon from "@/shared/ui/icons/voice-record.svg";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./whiteboard.module.css";

export default function WhiteboardPage() {
  const router = useRouter();
  const {
    interview,
    setInterviews,
    currentQuestion,
    setCurrentQuestion,
    hasNextQuestion,
  } = useInterviewStore();
  const { sendAnswer, finish, isLoading } = useWhiteboardStore();

  useEffect(() => {
    const fetchCurrentQuestion = async () => {
      if (!interview?.id) return;
      await setCurrentQuestion(interview?.id);
    };
    fetchCurrentQuestion();
  }, [setCurrentQuestion, interview?.id]);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });

    const recorder = new MediaRecorder(stream);
    mediaRecorderRef.current = recorder;

    const chunks: Blob[] = [];

    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = async () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      const formData = new FormData();
      formData.append("interviewId", String(interview?.id));
      formData.append("questionId", String(currentQuestion?.id));
      formData.append("file", blob, "record.webm");

      const result = await sendAnswer(formData);

      if (result) {
        if (!hasNextQuestion && interview?.id) {
          const finished = await finish(interview.id, setInterviews);
          if (finished) {
            router.push(`/interview/whiteboard/feedback/${interview?.id}`);
          }
        } else if (interview?.id) {
          await setCurrentQuestion(interview.id);
        }
      }
    };

    recorder.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  const shouldShowListeningLoader = () => {
    return isRecording || isLoading;
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.question}>
          <h2>{currentQuestion?.question}</h2>
        </div>
        <Listiningloader hidden={!shouldShowListeningLoader()} />
        <div className={styles.record}>
          {isRecording ? (
            <Button
              handleClick={stopRecording}
              type="composedBtn"
              value="Stop Recording"
              icon={<VoiceRecordStopIcon />}
            />
          ) : (
            <Button
              className={isLoading ? styles.disabled : ""}
              handleClick={startRecording}
              type="composedBtn"
              value="Start Recording"
              icon={<VoiceRecordIcon />}
            />
          )}
        </div>
      </div>
    </div>
  );
}
