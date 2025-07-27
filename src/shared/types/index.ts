export type GoogleSinginType = {
  idToken: string;
};

export type SignupType = {
  email: string;
  password: string;
};

export type SigninType = {
  email: string;
  password: string;
};

export type User = {
  email: string;
  name?: string;
  role?: string;
  picture?: string;
};

export type AppContextType = {
  title: string;
  isAsideOpen: boolean;
  toggleAside: () => void;
  setTitle: (value: string) => void;

  user: User | null;
  isLoading: boolean;
  error: string | null;
  setError: (value: string | null) => void;
  signout: () => Promise<void>;
  updateUser: (user: User) => void;
  signin: (params: SigninType) => Promise<void>;
  signup: (params: SignupType) => Promise<void>;
  googleSignin: (params: GoogleSinginType) => Promise<void>;
};
