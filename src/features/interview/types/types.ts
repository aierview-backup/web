export type QuestionResponseType = {
  id: number;
  question: string;
  answer: string;
  feedback: string;
};

export type getCurrentQuestionResponseType = {
  question: QuestionResponseType;
  hasNext: boolean;
};

export type InterviewResponseType = {
  id: number;
  type: string;
  role: string;
  date: string;
  score: number;
  level: string;
  status: string;
  technology: string;
  questions: QuestionResponseType[];
};
