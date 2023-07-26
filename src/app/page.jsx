import TechOverviewSection from "@/components/TechOverviewSection";
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <TechOverviewSection />
      <SkillsSection />
    </main>
  );
}
