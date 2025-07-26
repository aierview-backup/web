"use client";
import {useAuth} from "@/shared/hooks/useAuth";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function Dashboard() {
    const {user} = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/signin");
        }
    }, [user, router]);

    if (!user) return null;

    return <h1>Dashboard</h1>;
}
