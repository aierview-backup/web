export type SignupType = {
  email: string;
  password: string;
};

export type SigninType = {
  email: string;
  password: string;
};

export type AppContextType = {
  title: string;
  setTitle: (value: string) => void;
  isAsideOpen?: boolean;
  toggleAside?: () => void;
};

export type User = {
  email: string;
  name?: string;
  role?: string;
};

export type AuthContextType = {
  user: User | null;
  updateUser: (user: User) => void;
  error: string | null;
  isLoading: boolean;
  signin: (params: SigninType) => Promise<void>;
  signup: (params: SignupType) => Promise<void>;
  signout: () => Promise<void>;
};
