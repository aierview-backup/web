"use client";

import { useApp } from "@/shared/hooks/useApp";

export default function TitleWrapper() {
  const { title } = useApp();

  return <h1>{title}</h1>;
}
