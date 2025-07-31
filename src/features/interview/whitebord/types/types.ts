import { QuestionResponseType } from "../../types/types";

export type WhiteboardContextType = {
  isLoading: boolean;
  error: string | null;
  setError: (value: string | null) => void;
  questions: QuestionResponseType[];
  setQuestions: React.Dispatch<React.SetStateAction<QuestionResponseType[]>>;

  begin: (params: WhiteBoardType) => Promise<void>;
};

export type WhiteBoardType = {
  type?: "whiteboard";
  role: string;
  level: string;
  technology: string;
};
