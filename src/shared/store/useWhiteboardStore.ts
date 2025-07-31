"use client";

import { InterviewService } from "@/features/interview/services/impl/interview.service";
import { InterviewResponseType } from "@/features/interview/types/types";
import { WhiteboardService } from "@/features/interview/whitebord/services/impl/whiteboard.service";
import { WhiteBoardType } from "@/features/interview/whitebord/types/types";
import { create } from "zustand";

type WhiteboardStore = {
  isLoading: boolean;
  error: string | null;

  begin: (
    params: WhiteBoardType,
    setInterview: (interview: InterviewResponseType) => void
  ) => Promise<boolean>;
  finish: (
    interviewId: number,
    setInterviews: (interviews: InterviewResponseType[]) => void
  ) => Promise<boolean>;
  sendAnswer: (formData: FormData) => Promise<boolean>;
};

export const useWhiteboardStore = create<WhiteboardStore>((set) => {
  const service = new WhiteboardService();
  const interviewService = new InterviewService();

  return {
    error: null,
    interviews: [],
    interview: null,
    isLoading: false,

    begin: async (
      params: WhiteBoardType,
      setInterview: (interview: InterviewResponseType) => void
    ) => {
      let result = false;
      set({ isLoading: true, error: null });
      try {
        const interview = await service.begin(params);
        setInterview(interview);
        result = true;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        set({ error: err?.response?.data?.message });
        result = false;
      } finally {
        set({ isLoading: false });
      }
      return result;
    },

    sendAnswer: async (formData: FormData): Promise<boolean> => {
      let result = false;
      set({ isLoading: true, error: null });

      try {
        await service.sendAnswer(formData);
        result = true;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        set({ error: err?.response?.data?.message });
        result = false;
      } finally {
        set({ isLoading: false });
      }
      return result;
    },

    finish: async (
      interviewId: number,
      setInterviews: (interviews: InterviewResponseType[]) => void
    ) => {
      let result = false;
      set({ isLoading: true, error: null });
      try {
        await service.finish(interviewId);
        const interviews = await interviewService.readAll();
        setInterviews(interviews);
        result = true;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        set({ error: err?.response?.data?.message });
        result = false;
      } finally {
        set({ isLoading: false });
      }
      return result;
    },
  };
});
