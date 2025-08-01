"use client";

import { useAuthStore } from "@/shared/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  const { user, fetchUser } = useAuthStore();

  useEffect(() => {
    const fetchUserFn = async () => {
      await fetchUser();
    };
    fetchUserFn();
  }, [fetchUser]);

  useEffect(() => {
    if (user && !user.name) {
      router.push("/account-details");
    }
  }, [user, router]);

  if (!user) return <p>Carregando...</p>;

  return <h1>Dashboard</h1>;
}
