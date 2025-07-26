"use client";

import Button from "@/shared/ui/components/Button";
import Input from "@/shared/ui/components/Input";
import {useRouter} from "next/navigation";
import {useEffect, useMemo} from "react";
import styles from "./accountdetails.module.css";
import {useAuth} from "@/shared/hooks/useAuth";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    AccountDetailsFormData,
    accountDetailsSchema
} from "@/features/account-details/validations/account-details.validation";
import {useUser} from "@/shared/hooks/useUser";
import Select from "@/shared/ui/components/Select";

export default function AccountDetails() {
    const {user} = useAuth();
    const {updateUserDetails,error} = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/signin");
        }
    }, [user, router]);

    const roleOptions = [
        { label: "Frontend", value: "frontend" },
        { label: "Mobile", value: "mobile" },
        { label: "Fullstack", value: "fullstack" },
    ];

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm<AccountDetailsFormData>({
        resolver: zodResolver(accountDetailsSchema),
    });

    if (!user) return null;

    const onSubmit = async (data: AccountDetailsFormData) => {
        await updateUserDetails({email: user.email, name: data.name, role: data.role});
        if(error) return;
        router.push("/dashboard");
    };

    return (
        <main className={styles.main}>
            <div className={styles.accountDetailsContent}>
                <h1>Name and role</h1>
                <p className={styles.desc}>
                    We are almost done with your registration! Before we finish, tell us
                    your name and area of expertise.
                </p>

                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        id="name"
                        label="Name"
                        placeholder="Enter your name"
                        register={register("name")}
                        message={errors.name?.message}
                    />

                    <Select
                        id="role"
                        name="role"
                        label="Slect a Role"
                        placeholder="Choose your role"
                        options={roleOptions}
                        register={register("role")}
                        message={errors.role?.message}
                    />

                    <Button className={styles.next} value="Next" disabled={isSubmitting}/>
                    <span className={`${styles.error} ${!error && styles.hidden}`}>{error}</span>

                </form>
            </div>
        </main>
    );
}
