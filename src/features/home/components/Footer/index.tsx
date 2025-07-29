import ArrowRightIcon from "@/shared/ui/icons/arrow-right.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export default function FooterHome() {
  return (
    <footer className={styles.footer}>
      <section className={styles.signup}>
        <h1>Are you ready to land your dream job?</h1>
        <p>
          Start training today with AIERVIEW and take the next step in your
          career.
        </p>
        <Link href="/signup">
          Get Started <ArrowRightIcon className={styles.icon} />
        </Link>
      </section>

      <div className={styles.copyright}>
        <div className={styles.logo}>
          <Image
            src="/logos/aierview/logo-composed.svg"
            width={223}
            height={56}
            alt="logo composed"
          />
          <p>
            Empowering developers with intelligent AI-driven interview training
            for career success.
          </p>
          <span className={styles.socialMedia}>
            <Image
              src="/logos/facebook.svg"
              width={29}
              height={29}
              alt="facebook logo"
            />
            <Image
              src="/logos/linkedn.svg"
              width={29}
              height={29}
              alt="linkedin logo"
            />
          </span>
        </div>

        <span className={styles.rights}>
          © 2025 AIERVIEW. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
