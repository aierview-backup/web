"use client";

import {
  AccountDetailsFormData,
  accountDetailsSchema,
} from "@/features/account-details/validations/account-details.validation";
import { useAuthStore } from "@/shared/store/authStore";
import { useUserStore } from "@/shared/store/userStore";
import Button from "@/shared/ui/components/Button";
import Input from "@/shared/ui/components/Input";
import Select from "@/shared/ui/components/Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styles from "./accountdetails.module.css";

export default function AccountDetails() {
  const { user, setUser, error } = useAuthStore();
  const { update } = useUserStore();
  const router = useRouter();

  const roleOptions = [
    { label: "Frontend", value: "frontend" },
    { label: "Mobile", value: "mobile" },
    { label: "Fullstack", value: "fullstack" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AccountDetailsFormData>({
    resolver: zodResolver(accountDetailsSchema),
  });

  const onSubmit = async (data: AccountDetailsFormData) => {
    if (!user) return;
    await update(
      {
        email: user.email,
        name: data.name,
        role: data.role,
      },
      setUser
    );
    if (error) return;
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
            value={user?.name}
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

          <Button
            className={styles.next}
            value="Next"
            disabled={isSubmitting}
          />
          <span className={`${styles.error} ${!error && styles.hidden}`}>
            {error}
          </span>
        </form>
      </div>
    </main>
  );
}
