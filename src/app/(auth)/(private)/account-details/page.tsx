"use client";

import { useAppContext } from "@/shared/hooks/useAppContext";
import Button from "@/shared/ui/components/Button";
import Input from "@/shared/ui/components/Input";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./accountdetails.module.css";

export default function AccountDetails() {
  const router = useRouter();
  const { setTitle } = useAppContext();
  const [selectedRole, setSelectedRole] = useState("");

  useEffect(() => {
    setTitle("Name and role");
  }, [setTitle]);

  const handleNextClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      router.push("/dashboard");
    },
    [router]
  );

  const roleOptions = useMemo(
    () => [
      { label: "Frontend", value: "frontend" },
      { label: "Mobile", value: "mobile" },
      { label: "Fullstack", value: "fullstack" },
    ],
    []
  );

  return (
    <>
      <p className={styles.desc}>
        We are almost done with your registration! Before we finish, tell us
        your name and area of expertise.
      </p>

      <Input
        label="Name"
        type="text"
        placeholder="Enter your name"
        name="name"
      />

      <Input
        type="select"
        label="Role"
        name="role"
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        options={roleOptions}
        message=""
      />

      <Button handleClick={handleNextClick} value="Next" />
    </>
  );
}
