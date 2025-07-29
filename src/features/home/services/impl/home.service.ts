import IHome from "@/features/home/services/contract/home";
import { InterviewType } from "@/features/home/types/types";
import HttpClient from "@/shared/utils/HttpClient";

export default class HomeService implements IHome {
  private http = HttpClient.getInstance();

  async getInterviewTypes(): Promise<InterviewType[]> {
    const response = await this.http.get("/interview-types");
    const result = response.data?.data;
    return result;
  }
}
