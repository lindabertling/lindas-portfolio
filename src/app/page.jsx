"use client";

import AboutSection from "@/components/AboutSection";
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
