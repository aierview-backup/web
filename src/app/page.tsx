import Banner from "@/features/home/components/Banner";
import HeaderHome from "@/features/home/components/Header";
import InterviewTypes from "@/features/home/components/InterviewTypes";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeaderHome />
      <Banner />
      <InterviewTypes />
    </main>
  );
}
