"use client";

import {HeaderDashType} from "@/features/dashboard/types";
import {useAppContext} from "@/shared/hooks/useAppContext";
import Button from "@/shared/ui/components/Button";
import MenuIcon from "@/shared/ui/icons/menu.svg";
import SignoutIcon from "@/shared/ui/icons/singout.svg";
import {useRouter} from "next/navigation";
import styles from "./header.module.css";
import {useAuth} from "@/shared/hooks/useAuth";

export default function HeaderDash({title}: HeaderDashType) {
    const {toggleAside} = useAppContext();
    const router = useRouter();
    const {signout} = useAuth();

    const handleSignout = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        await signout();
        router.push("/signin");
    };

    return (
        <header className={styles.header}>
            <h1>{title}</h1>
            <div className={styles.actions}>
                <Button
                    handleClick={toggleAside}
                    className={styles.menu}
                    type="iconBtn"
                    value={<MenuIcon/>}
                />
                <Button
                    handleClick={handleSignout}
                    className={styles.signout}
                    type="iconBtn"
                    value={<SignoutIcon/>}
                />
            </div>
        </header>
    );
}
