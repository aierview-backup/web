"use client";
import {useAuth} from "@/shared/hooks/useAuth";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function Dashboard() {
    const {user} = useAuth();
    const router = useRouter();

    return <h1>Dashboard</h1>;
}
