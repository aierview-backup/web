"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useLoadingStore } from "../store/useLoadingStore";

export default function LoadingListener() {
  const pathname = usePathname();
  const setLoading = useLoadingStore((state) => state.setLoading);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname, setLoading]);

  return null;
}
