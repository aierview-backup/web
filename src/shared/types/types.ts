export type AppContextType = {
  title: string;
  setTitle: (value: string) => void;
  isAsideOpen?: boolean;
  toggleAside?: () => void;
};
