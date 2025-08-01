import HttpClient from "@/shared/utils/HttpClient";
import { NEXT_PUBLIC_API_URL } from "@/shared/utils/lib";
import { logger } from "@/shared/utils/logger";
import {
  getCurrentQuestionResponseType,
  InterviewResponseType,
  QuestionResponseType,
} from "../../types/types";
import { IInterviewService } from "../contract/IInterviewService";

export class InterviewService implements IInterviewService {
  getCuurentQuestion(interviewId: number): Promise<QuestionResponseType> {
    throw new Error("Method not implemented.");
  }
  private readonly externalHttp = HttpClient.getInstance(
    `${NEXT_PUBLIC_API_URL}/interviews`
  );

  async readAll(): Promise<InterviewResponseType[]> {
    try {
      const response = await this.externalHttp.get("", {
        withCredentials: true,
      });
      const result = response.data?.data;
      return result;
    } catch (error) {
      logger.info("Error => ", error);
      return [];
    }
  }

  async deleteOne(id: number): Promise<void> {
    await this.externalHttp.delete(`/${id}`, {
      withCredentials: true,
    });
  }

  async deleteMany(ids: number[]): Promise<void> {
    await this.externalHttp.delete("", {
      params: { ids },
      paramsSerializer: (params) => {
        const query = new URLSearchParams();
        params.ids.forEach((id: number) => query.append("ids", id.toString()));
        return query.toString();
      },
      withCredentials: true,
    });
  }
  async readIntervirewQuestions(
    interviewId: number
  ): Promise<QuestionResponseType[]> {
    const response = await this.externalHttp.get(`/questions/${interviewId}`, {
      withCredentials: true,
    });
    const result = response.data?.data;
    return result;
  }

  async readInterview(interviewId: number): Promise<InterviewResponseType> {
    const response = await this.externalHttp.get(`/${interviewId}`, {
      withCredentials: true,
    });
    const result = response.data?.data;
    return result;
  }

  async pause(interviewId: number): Promise<void> {
    await this.externalHttp.post(`/pause/${interviewId}`, {
      withCredentials: true,
    });
  }

  async stop(interviewId: number): Promise<void> {
    await this.externalHttp.post(`/stop/${interviewId}`, {
      withCredentials: true,
    });
  }

  async getCurrentQuestion(
    interviewId: number
  ): Promise<getCurrentQuestionResponseType> {
    const response = await this.externalHttp.get(
      `/questions/current/${interviewId}`,
      {
        withCredentials: true,
      }
    );
    const result = response.data?.data;
    return result;
  }
}
