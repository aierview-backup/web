import { InterviewResponseType, WhiteBoardType } from "../../types/types";

export interface IWhiteboardService {
  deleteOne(id: number): Promise<void>;
  deleteMany(ids: number[]): Promise<void>;
  readAll(): Promise<InterviewResponseType[]>;
  pause(params: InterviewResponseType): Promise<void>;
  begin(params: WhiteBoardType): Promise<InterviewResponseType>;
  sendAnswers(params: InterviewResponseType): Promise<InterviewResponseType>;
}
