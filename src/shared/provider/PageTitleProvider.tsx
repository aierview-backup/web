"use client";

import { ReactNode, useState } from "react";
import { PageTitleContext } from "../context/PageTitleContext";

export default function PageTitleProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [title, setTitle] = useState("");

  return (
    <PageTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
}
