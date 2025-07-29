// app/components/GlobalLoading.tsx
"use client";

import { useLoadingStore } from "@/shared/store/loadingStore";

export default function GlobalLoading() {
  const loading = useLoadingStore((state) => state.loading);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent" />
    </div>
  );
}
