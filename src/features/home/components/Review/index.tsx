import StarsIcon from "@/shared/ui/icons/stars.svg";
import Image from "next/image";
import styles from "./review.module.css";

export default function Review() {
  return (
    <section className={styles.review}>
      <h1>⭐ Success Stories</h1>
      <p>
        Get inspired by real stories from people who practiced with our AI and
        succeeded in job interviews.
      </p>
      {/* CARDS */}
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.stars}>
            <StarsIcon />
            <StarsIcon />
            <StarsIcon />
            <StarsIcon />
            <StarsIcon />
          </div>
          <span>
            "AIERVIEW helped me gain confidence in technical interviews. I
            practiced with real challenges and received feedback that made all
            the difference. I landed the job I always wanted!"
          </span>
          <div className={styles.profile}>
            <Image
              src="/img/profile.jpeg"
              width={45}
              height={45}
              alt="User profile"
            />
            <span>Gervásio Dombo</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.stars}>
            <StarsIcon />
            <StarsIcon />
            <StarsIcon />
            <StarsIcon />
            <StarsIcon />
          </div>
          <span>
            "AIERVIEW helped me gain confidence in technical interviews. I
            practiced with real challenges and received feedback that made all
            the difference. I landed the job I always wanted!"
          </span>
          <div className={styles.profile}>
            <Image
              src="/img/profile.jpeg"
              width={45}
              height={45}
              alt="User profile"
            />
            <span>Gervásio Dombo</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.stars}>
            <StarsIcon />
            <StarsIcon />
            <StarsIcon />
            <StarsIcon />
            <StarsIcon />
          </div>
          <span>
            "AIERVIEW helped me gain confidence in technical interviews. I
            practiced with real challenges and received feedback that made all
            the difference. I landed the job I always wanted!"
          </span>
          <div className={styles.profile}>
            <Image
              src="/img/profile.jpeg"
              width={45}
              height={45}
              alt="User profile"
            />
            <span>Gervásio Dombo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
