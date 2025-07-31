"use client";

import { InterviewService } from "@/features/interview/services/impl/interview.service";
import {
  InterviewResponseType,
  QuestionResponseType,
} from "@/features/interview/types/types";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type WhiteboardStore = {
  isLoading: boolean;
  error: string | null;

  interview: InterviewResponseType | null;
  setInterview: (interview: InterviewResponseType) => void;

  interviews: InterviewResponseType[];
  setInterviews: (interview: InterviewResponseType[]) => void;

  currentQuestion: QuestionResponseType | null;
  setCurrentQuestion: (interviewId: number) => Promise<void>;

  hasNextQuestion: boolean;

  clear: () => void;
  readAll: () => Promise<boolean>;
  deleteOne: (id: number) => Promise<boolean>;
  pause: (interviewId: number) => Promise<boolean>;
  stop: (interviewId: number) => Promise<boolean>;
  readInterview: (id: number) => Promise<boolean>;
  deleteMany: (ids: number[]) => Promise<boolean>;
  readIntervirewQuestions: (
    interviewId: number
  ) => Promise<QuestionResponseType[]>;
};

export const useInterviewStore = create<WhiteboardStore>()(
  persist(
    (set) => {
      const service = new InterviewService();

      return {
        error: null,
        interviews: [],
        interview: null,
        currentQuestion: null,
        isLoading: false,
        hasNextQuestion: false,

        setInterview: (interview) => set({ interview }),
        setInterviews: (interviews) => set({ interviews }),

        clear: () => set({ interview: null, isLoading: false, error: null }),

        setCurrentQuestion: async (interviewId: number): Promise<void> => {
          set({ isLoading: true, error: null });
          try {
            const response = await service.getCurrentQuestion(interviewId);
            set({
              currentQuestion: response.question,
              hasNextQuestion: response.hasNext,
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (err: any) {
            set({ error: err?.response?.data?.message });
          } finally {
            set({ isLoading: false });
          }
        },

        readAll: async (): Promise<boolean> => {
          let result = false;
          set({ isLoading: true, error: null });
          try {
            const interviews = await service.readAll();
            set({ interviews });
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

        deleteOne: async (id: number): Promise<boolean> => {
          let result = false;
          set({ isLoading: true, error: null });
          try {
            await service.deleteOne(id);
            const interviews = await service.readAll();
            set({ interviews });
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

        deleteMany: async (ids: number[]): Promise<boolean> => {
          let result = false;
          set({ isLoading: true, error: null });
          try {
            await service.deleteMany(ids);
            const interviews = await service.readAll();
            set({ interviews });
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
        readIntervirewQuestions: async (
          interviewId: number
        ): Promise<QuestionResponseType[]> => {
          set({ isLoading: true, error: null });
          try {
            return await service.readIntervirewQuestions(interviewId);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (err: any) {
            set({ error: err?.response?.data?.message });
          } finally {
            set({ isLoading: false });
          }
          return [];
        },
        readInterview: async (interviewId: number): Promise<boolean> => {
          set({ isLoading: true, error: null });
          const result = false;
          try {
            const interview = await service.readInterview(interviewId);
            set({ interview });
            return true;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (err: any) {
            set({ error: err?.response?.data?.message });
          } finally {
            set({ isLoading: false });
          }
          return result;
        },
        pause: async (interviewId: number) => {
          let result = false;
          set({ isLoading: true, error: null });
          try {
            await service.pause(interviewId);
            set({ interview: null });
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
        stop: async (interviewId: number) => {
          let result = false;
          set({ isLoading: true, error: null });
          try {
            await service.stop(interviewId);
            set({ interview: null });

            const interviews = await service.readAll();
            set({ interviews });
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
    },
    {
      name: "interview-storage",
      partialize: (state) => ({ interview: state.interview }),
    }
  )
);
