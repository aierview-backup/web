"use client";

import { WhiteboardService } from "@/features/interview/whitebord/services/impl/whiteboard.service";
import {
  InterviewResponseType,
  WhiteBoardType,
} from "@/features/interview/whitebord/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type WhiteboardStore = {
  isLoading: boolean;
  error: string | null;
  interview: InterviewResponseType | null;
  interviews: InterviewResponseType[];

  clear: () => void;
  readAll: () => Promise<boolean>;
  deleteOne(id: number): Promise<boolean>;
  deleteMany(ids: number[]): Promise<boolean>;
  setAnswer: (index: number, answer: string) => void;
  begin: (params: WhiteBoardType) => Promise<boolean>;
  setIntverview: (interview: InterviewResponseType) => void;
  pause: (interview: InterviewResponseType) => Promise<boolean>;
  sendAnswers: (params: InterviewResponseType) => Promise<boolean>;
};

export const useWhiteboardStore = create<WhiteboardStore>()(
  persist(
    (set) => {
      const service = new WhiteboardService();

      return {
        error: null,
        interviews: [],
        interview: null,
        isLoading: false,

        setIntverview: (interview) => set({ interview }),

        clear: () => set({ interview: null, isLoading: false, error: null }),

        setAnswer: (index, answer) =>
          set((state) => {
            if (!state.interview) return state;
            const updatedQuestions = [...state.interview.questions];

            if (updatedQuestions[index]) {
              updatedQuestions[index] = {
                ...updatedQuestions[index],
                answer,
              };
            }

            return {
              interview: {
                ...state.interview,
                questions: updatedQuestions,
              },
            };
          }),

        begin: async (params: WhiteBoardType) => {
          let result = false;
          set({ isLoading: true, error: null });
          try {
            const interview = await service.begin(params);
            set({ interview });
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

        pause: async (interview: InterviewResponseType) => {
          let result = false;
          set({ isLoading: true, error: null });
          try {
            await service.pause(interview);
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

        sendAnswers: async (
          params: InterviewResponseType
        ): Promise<boolean> => {
          let result = false;
          set({ isLoading: true, error: null });
          try {
            const interview = await service.sendAnswers(params);
            set({ interview });
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
      };
    },
    {
      name: "whiteboard-storage",
      partialize: (state) => ({ interview: state.interview }),
    }
  )
);
