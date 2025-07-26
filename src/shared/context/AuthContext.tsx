import {createContext} from "react";


import {AuthContextType} from "@/shared/types";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);
export default AuthContext;
