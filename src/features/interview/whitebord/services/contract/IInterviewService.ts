import {
  getCurrentQuestionResponseType,
  InterviewResponseType,
  QuestionResponseType,
} from "../../types/types";

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
