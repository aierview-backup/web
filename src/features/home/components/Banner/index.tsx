import ArrowRightIcon from "@/shared/ui/icons/arrow-right.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "./banner.module.css";

export default function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.textContent}>
                <h1>Simulate a Technical Interview with Ai</h1>

                <span>
          Simulate interviews at different seniority levels and receive instant
          feedback to improve in a practical and effective way.
        </span>

                <span>
          <Link href="/sign-in">
            Get Started <ArrowRightIcon className={styles.icon}/>
          </Link>
        </span>
            </div>

            <Image src="img/banner.svg" width={300} height={431} alt="Banner bot"/>
        </section>
    );
}
