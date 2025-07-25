"use client";

import Link from "next/link";
import {useRouter} from "next/navigation";
import {useCallback, useEffect} from "react";

import {useAppContext} from "@/shared/hooks/useAppContext";
import Button from "@/shared/ui/components/Button";
import Input from "@/shared/ui/components/Input";

import GithubIcon from "@/shared/ui/icons/github.svg";
import GoogleIcon from "@/shared/ui/icons/google.svg";

import styles from "./signin.module.css";

export default function SigninPage() {
    const router = useRouter();
    const {setTitle} = useAppContext();

    useEffect(() => {
        setTitle("Sign-in");
    }, [setTitle]);

    const handleSignIn = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
            router.push("/account-details");
        },
        [router]
    );

    return (
        <form className={styles.form}>
            <Input label="Email" type="email" placeholder="Enter your email"/>
            <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
            />
            <div className={styles.rememberme}>
                <Input label="Remember-me" type="checkbox"/>
                <Link href="/reset-password">Reset password</Link>
            </div>

            <Button value="Sign-in" handleClick={handleSignIn}/>

            <div className={styles.auth}>
                <Button type="iconBtn" value={<GoogleIcon/>}/>
                <Button type="iconBtn" value={<GithubIcon/>}/>
            </div>

            <span className={styles.signup}>
        <Link href="/signup">or sign up</Link>
      </span>
        </form>);
}
