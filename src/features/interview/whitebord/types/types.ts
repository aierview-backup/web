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

export type QuestionResponseType = {
  id: number;
  question: string;
  answer: string;
  feedback: string;
};

export type InterviewResponseType = {
  id: number;
  type: string;
  role: string;
  level: string;
  technology: string;
  questions: QuestionResponseType[];
};
