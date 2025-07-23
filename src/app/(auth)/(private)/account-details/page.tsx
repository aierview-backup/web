"use client";
import Button from "@/shared/ui/components/Button";
import Input from "@/shared/ui/components/Input";

import { useAppContext } from "@/shared/hooks/useAppContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "./accountdetails.module.css";

export default function AccountDetails() {
  const router = useRouter();
  const { setTitle } = useAppContext();

  useEffect(() => {
    setTitle("Name and role");
  }, [setTitle]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push("/dashboard");
  };

  return (
    <>
      <p className={styles.desc}>
        We are almost done with your registration! Before we finish, tell us
        your name and area of expertise.
      </p>
      <Input label="Name" type="text" placeholder="Enter your name" />
      <Input type="select" />
      <Button handleClick={handleClick} value="Next" />
    </>
  );
}
