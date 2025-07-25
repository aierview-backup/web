"use client";

import {AppContext} from "@/shared/context/AppContext";
import {useContext} from "react";

export function useAppContext() {
    const context = useContext(AppContext);
    if (!context)
        throw new Error("useAppContext must be used inside AppProvider");
    return context;
}
