import { WhiteboardService } from "@/features/interview/whitebord/services/impl/whiteboard.service";
import {
  QuestionResponseType,
  WhiteBoardType,
} from "@/features/interview/whitebord/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type WhiteboardStore = {
  isLoading: boolean;
  error: string | null;
  questions: QuestionResponseType[];

  clear: () => void;
  // sendAnswers: () => void;
  setQuestions: (q: QuestionResponseType[]) => void;
  setAnswer: (index: number, answer: string) => void;
  begin: (params: WhiteBoardType) => Promise<boolean>;
};

export const useWhiteboardStore = create<WhiteboardStore>()(
  persist(
    (set) => {
      const service = new WhiteboardService();

      return {
        questions: [],
        isLoading: false,
        error: null,

        setQuestions: (questions) => set({ questions }),

        clear: () => set({ questions: [], isLoading: false, error: null }),

        setAnswer: (index, answer) =>
          set((state) => {
            const updatedQuestions = [...state.questions];
            if (updatedQuestions[index]) {
              updatedQuestions[index] = {
                ...updatedQuestions[index],
                answer,
              };
            }
            return { questions: updatedQuestions };
          }),

        begin: async (params: WhiteBoardType) => {
          let result = false;
          set({ isLoading: true, error: null });
          try {
            const interview = await service.begin(params);
            if (!interview) throw new Error("Interview not returned");
            set({ questions: interview.questions });
            result = true;
          } catch (err: any) {
            set({ error: err?.response?.data?.message || "Signup failed" });
            result = false;
          } finally {
            set({ isLoading: false });
          }
          return result;
        },

        // sendAnswers: async () => {
        //   let result = false;
        //   set({ isLoading: true, error: null });
        //   try {
        //     const interview = await service.begin(params);
        //     if (!interview) throw new Error("Interview not returned");
        //     set({ questions: interview.questions });
        //     result = true;
        //   } catch (err: any) {
        //     set({ error: err?.response?.data?.message || "Signup failed" });
        //     result = false;
        //   } finally {
        //     set({ isLoading: false });
        //   }
        //   return result;
        // },
      };
    },
    {
      name: "whiteboard-storage",
      partialize: (state) => ({ questions: state.questions }),
    }
  )
);
