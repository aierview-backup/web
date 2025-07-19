"use client";

import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const sections = ["interviewTypes", "programmingLanguages", "faq"];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveLink(sectionId);
          }
        },
        {
          threshold: 0.6,
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className={styles.menuContainer}>
      <nav>
        <span>
          <Link
            href="#interviewTypes"
            className={`${
              activeLink === "interviewTypes" ? styles.clicked : ""
            }`}
          >
            Interview Types
          </Link>
        </span>
        <span>
          <Link
            href="#interviewTypes"
            className={`${
              activeLink === "programmingLanguages" ? styles.clicked : ""
            }`}
          >
            Programing Languages 
          </Link>
        </span>
        <span>
          <Link
            href="#faq"
            className={`${activeLink === "faq" ? styles.clicked : ""}`}
          >
            FAQ
          </Link>
        </span>
      </nav>
      <Link className={styles.loginBtn} href="#">
        Login
      </Link>
    </div>
  );
}
