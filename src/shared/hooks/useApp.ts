"use client";

import {useContext} from "react";
import AppContext from "../context/AppContext";

export function useApp() {
    const context = useContext(AppContext);
    if (!context) throw new Error("useAppp must be used inside AppProvider");
    return context;
}
