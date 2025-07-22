"use client";

import { createContext } from "react";
import { TitleContextType } from "../types/types";

const PageTitleContext = createContext<TitleContextType | undefined>(undefined);
export { PageTitleContext };
