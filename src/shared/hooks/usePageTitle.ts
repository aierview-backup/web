"use client";

import { useContext } from "react";
import { PageTitleContext } from "../context/PageTitleContext";

export function usePageTitle() {
  const context = useContext(PageTitleContext);
  if (!context)
    throw new Error("usePageTitle must be used inside PageTitleProvider");
  return context;
}
