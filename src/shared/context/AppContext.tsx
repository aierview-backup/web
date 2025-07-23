"use client";

import { AppContextType } from "@/shared/types/types";
import { createContext } from "react";

const AppContext = createContext<AppContextType | undefined>(undefined);

export { AppContext };
