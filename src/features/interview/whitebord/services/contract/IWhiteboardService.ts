import { InterviewResponseType, WhiteBoardType } from "../../types/types";

export interface IWhiteboardService {
  begin(params: WhiteBoardType): Promise<InterviewResponseType>;
  sendAnswer(form: FormData): Promise<void>;
  finish(interviewId: number): Promise<void>;
}
