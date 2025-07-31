// app/components/Recorder.tsx
"use client";

import { useRef, useState } from "react";

export default function Recorder() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [recording, setRecording] = useState(false);
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    if (videoRef.current) videoRef.current.srcObject = stream;

    const recorder = new MediaRecorder(stream);
    mediaRecorderRef.current = recorder;

    const chunks: Blob[] = [];

    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      setBlobUrl(url);
      uploadRecording(blob);
    };

    recorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  const uploadRecording = async (blob: Blob) => {
    const formData = new FormData();
    formData.append("file", blob, "resposta.webm");
    console.log(formData);

    // const res = await fetch("http://localhost:8080/transcribe", {
    //   method: "POST",
    //   body: formData,
    // });

    // const result = await res.text();
    // alert("Transcrição: " + result);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        {!recording ? (
          <button
            onClick={startRecording}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Gravar
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Parar
          </button>
        )}
      </div>
    </div>
  );
}
