"use client";

import { DashboardContext } from "@/shared/context/DashboardContext";
import { useContext } from "react";

export function useDashboardContext() {
  const context = useContext(DashboardContext);
  if (!context)
    throw new Error(
      "useDashboardContext must be used inside DashboardProvider"
    );
  return context;
}
