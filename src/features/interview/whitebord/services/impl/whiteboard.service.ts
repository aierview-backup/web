import { InterviewResponseType } from "@/features/interview/types/types";
import HttpClient from "@/shared/utils/HttpClient";
import { NEXT_PUBLIC_API_URL } from "@/shared/utils/lib";
import { WhiteBoardType } from "../../types/types";
import { IWhiteboardService } from "../contract/IWhiteboardService";

export class WhiteboardService implements IWhiteboardService {
  private readonly externalHttp = HttpClient.getInstance(
    `${NEXT_PUBLIC_API_URL}/interviews/whiteboard`
  );

  async begin(params: WhiteBoardType): Promise<InterviewResponseType> {
    const response = await this.externalHttp.post("/begin", {
      role: params.role,
      level: params.level,
      technology: params.technology,
    });
    const result = response.data?.data;
    return result;
  }

  async sendAnswer(formData: FormData): Promise<void> {
    await this.externalHttp.post("/send-answer", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  async finish(interviewId: number): Promise<void> {
    await this.externalHttp.post(`/finish/${interviewId}`, null);
  }
}
