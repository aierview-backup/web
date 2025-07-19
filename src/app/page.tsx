"use client";

import React from "react";

import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useInterviewTypes } from "@/features/home/hooks/useInterviewTypes";
import TypeCard from "@/features/home/components/Home/TypeCard";
import Spinner from "@/shared/components/Spinner/Spinner";

export default function Home() {
  const { interviewTypes, loading } = useInterviewTypes();

  return (
    <main className={styles.main}>
      {/* BANNER SECTION */}
      <section className={styles.banner}>
        <div className={styles.card}>
          <div className={styles.content}>
            <h1>AIERVIEW</h1>
            <div className={styles.textContainer}>
              <span>
                The artificial intelligence that prepares you for real-world
                challenges. Practice technical tests, receive instant feedback,
                and improve your skills as a developer — all with the support of
                an AI trained to accelerate your growth.
              </span>
              <Link href="#">Inscreva-se</Link>
            </div>
          </div>
          <Image
            src="/img/banner-robot.svg"
            alt="Banner robot"
            width={295}
            height={516}
          />
        </div>
      </section>

      {/* INTERVIEW TYPES SECTION */}
      <section id="interviewTypes" className={styles.interviewTypes}>
        <div className={styles.interviewTypesContainer}>
          <h1>Interview Types</h1>
          <div className={styles.typesContainer}>
            {/* TYPE CARDS */}
            {loading ? (
              <Spinner />
            ) : (
              interviewTypes.map((type) => (
                <TypeCard
                  key={type.title}
                  title={type.title}
                  mainIcon={type.mainIcon}
                  altText={type.altText}
                  icons={type.icons}
                  desc={type.desc}
                />
              ))
            )}
          </div>
        </div>
      </section>
      <Link className={styles.topArrow} href="#header">
        <Image
          src="/icons/top-arrow-icon.svg"
          alt="Top arrow icon"
          width={24}
          height={24}
        />
      </Link>
    </main>
  );
}
