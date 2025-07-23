"use client";

import { DashboardContext } from "@/shared/context/DashboardContext";
import { ReactNode, useState } from "react";

export default function DashboardProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [title, setTitle] = useState("");
  const [isAsideOpen, setIsAsideOpen] = useState(true);
  const toggleAside = () => setIsAsideOpen((prev) => !prev);

  return (
    <DashboardContext.Provider
      value={{ title, setTitle, isAsideOpen, toggleAside }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
