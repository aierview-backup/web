"use client";

import Link from "next/link";
import {useEffect} from "react";

import {useAppContext} from "@/shared/hooks/useAppContext";
import Button from "@/shared/ui/components/Button";
import Input from "@/shared/ui/components/Input";

import GithubIcon from "@/shared/ui/icons/github.svg";
import GoogleIcon from "@/shared/ui/icons/google.svg";

import styles from "./signup.module.css";
import {useForm} from "react-hook-form";
import {SignupFormData, signupSchema} from "@/features/auth/validations/signup/signup.validation";
import {zodResolver} from "@hookform/resolvers/zod";
import {useSignup} from "@/features/auth/hooks/useAuth";

export default function SignupPage() {
    const {setTitle} = useAppContext();
    const {signup, isLoading, error}   = useSignup();

    useEffect(() => {
        setTitle("Sign-up");
    }, [setTitle]);

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
    });

    const onSubmit = async (data: SignupFormData) => {
        await signup({email: data.email, password: data.password});
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                message={errors.email?.message}
            />

            <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                {...register("password")}
                message={errors.password?.message}
            />

            <Input
                label="Confirm password"
                type="password"
                placeholder="Confirm your password"
                {...register("confirmPassword")}
                message={errors.confirmPassword?.message}
            />

            <Button value="Sign-up" disabled={isSubmitting}/>

            <span  className={`${styles.error} ${!error && styles.hidden}`}>{error}</span>

            <div className={styles.auth}>
                <Button type="iconBtn" value={<GoogleIcon/>}/>
                <Button type="iconBtn" value={<GithubIcon/>}/>
            </div>

            <span className={styles.signup}>
                <Link href="/signin">or sign in</Link>
            </span>
        </form>
    );
}
