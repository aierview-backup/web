import HttpClient from "@/shared/utils/HttpClient";
import { NEXT_PUBLIC_API_URL } from "@/shared/utils/lib";
import { InterviewResponseType, WhiteBoardType } from "../../types/types";
import { IWhiteboardService } from "../contract/IWhiteboardService";

export class WhiteboardService implements IWhiteboardService {
  private readonly externalHttp = HttpClient.getInstance(
    `${NEXT_PUBLIC_API_URL}/interviews`
  );

  async begin(params: WhiteBoardType): Promise<InterviewResponseType> {
    const response = await this.externalHttp.post(
      "/whiteboard/begin",
      { role: params.role, level: params.level, technology: params.technology },
      {
        withCredentials: true,
      }
    );
    const result = response.data?.data;
    return result;
  }

  async sendAnswers(
    params: InterviewResponseType
  ): Promise<InterviewResponseType> {
    const response = await this.externalHttp.post(
      "/whiteboard/send-answers",
      { ...params },
      {
        withCredentials: true,
      }
    );
    const result = response.data?.data;
    return result;
  }

  async pause(params: InterviewResponseType): Promise<void> {
    await this.externalHttp.post(
      "/whiteboard/pause",
      { ...params },
      {
        withCredentials: true,
      }
    );
  }

  async readAll(): Promise<InterviewResponseType[]> {
    const response = await this.externalHttp.get("/whiteboard", {
      withCredentials: true,
    });
    const result = response.data?.data;
    return result;
  }

  async deleteOne(id: number): Promise<void> {
    await this.externalHttp.delete(`/whiteboard/${id}`, {
      withCredentials: true,
    });
  }

  async deleteMany(ids: number[]): Promise<void> {
    await this.externalHttp.delete("/whiteboard", {
      params: { ids },
      paramsSerializer: (params) => {
        const query = new URLSearchParams();
        params.ids.forEach((id: number) => query.append("ids", id.toString()));
        return query.toString();
      },
      withCredentials: true,
    });
  }
}
