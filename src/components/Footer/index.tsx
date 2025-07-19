import React from "react";

import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.socialMedia}>
        <Image
          src="/logos/facebook.svg"
          alt="Facebook"
          width={24}
          height={24}
        />
        <Image
          src="/logos/instagram.svg"
          alt="Instagram"
          width={24}
          height={24}
        />
        <Image src="/logos/youtube.svg" alt="Linkedin" width={24} height={24} />
      </span>
      <span>
        Copyright ©{new Date().getFullYear()} Aierview. All rights reserved.
      </span>
      <span>Privacy Policy | Terms of Use</span>
    </footer>
  );
}
