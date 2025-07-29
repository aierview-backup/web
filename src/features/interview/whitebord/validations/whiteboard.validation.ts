import { z } from "zod";

export const answerSchema = z.object({
  questionId: z.number(),
  answer: z.string().min(1, "Answer is required"),
});

export type AnswerFormData = z.infer<typeof answerSchema>;
