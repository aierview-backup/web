import {} from "@/features/interview/services/impl/interview.service";
import {
  getCurrentQuestionResponseType,
  InterviewResponseType,
  QuestionResponseType,
} from "@/features/interview/types/types";

export interface IInterviewService {
  pause(interviewId: number): Promise<void>;
  stop(interviewId: number): Promise<void>;
  deleteOne(id: number): Promise<void>;
  deleteMany(ids: number[]): Promise<void>;
  readAll(): Promise<InterviewResponseType[]>;
  readInterview(interviewId: number): Promise<InterviewResponseType>;
  readIntervirewQuestions(interviewId: number): Promise<QuestionResponseType[]>;
  getCurrentQuestion(
    interviewId: number
  ): Promise<getCurrentQuestionResponseType>;
}
