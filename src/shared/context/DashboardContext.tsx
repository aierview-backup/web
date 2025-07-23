"use client";

import { DashboardContextType } from "@/shared/types/types";
import { createContext } from "react";

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

export { DashboardContext };
