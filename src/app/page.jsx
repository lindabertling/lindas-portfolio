"use client";

import TechOverviewSection from "@/components/TechOverviewSection";
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HeroSection />
      <TechOverviewSection />
      <SkillsSection />
    </main>
  );
}
