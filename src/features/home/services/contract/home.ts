import { TypeCardProps } from "@/features/home/types/types";

export default interface IHome {
  getInterviewTypes(): Promise<TypeCardProps[]>;
}
