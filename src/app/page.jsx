import TechOverviewSection from "@/components/TechOverviewSection";
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <TechOverviewSection />
    </main>
  );
}
