"use client";

import {AppContext} from "@/shared/context/AppContext";
import {ReactNode, useState} from "react";

export default function DashboardProvider({
                                              children,
                                          }: {
    children: ReactNode;
}) {
    const [title, setTitle] = useState("");
    const [isAsideOpen, setIsAsideOpen] = useState(true);
    const toggleAside = () => setIsAsideOpen((prev) => !prev);

    return (
        <AppContext.Provider value={{title, setTitle, isAsideOpen, toggleAside}}>
            {children}
        </AppContext.Provider>
    );
}
