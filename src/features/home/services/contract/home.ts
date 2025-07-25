import {InterviewType} from "@/features/home/types/types";

export default interface IHome {
    getInterviewTypes(): Promise<InterviewType[]>;
}
