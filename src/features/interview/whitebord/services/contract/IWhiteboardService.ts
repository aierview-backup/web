import { InterviewResponseType, WhiteBoardType } from "../../types/types";

export interface IWhiteboardService {
  begin(params: WhiteBoardType): Promise<InterviewResponseType>;
}
