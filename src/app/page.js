'use client';

import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useScrollPositionRestore } from "./hooks/useScrollPositionRestore";

export default function Home() {
  useScrollPositionRestore();

  return (
    <main className="flex min-h-screen flex-col bg-page dark:bg-page-dark pb-12 font-playfair transition-colors duration-300">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Experiences />
      <Footer />

    </main>
  );
}
