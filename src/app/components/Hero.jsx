import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Hero = () => {
  const revealRef = useScrollReveal();

  return (
    <section
      id="Hero"
      ref={revealRef}
      className="reveal min-h-screen box-border bg-surface dark:bg-surface-dark rounded-b-[48px] pt-[150px] px-6 pb-16 flex flex-col justify-center items-center transition-colors duration-300"
    >
      <div className="max-w-[900px] w-full flex flex-col items-center gap-4 text-center">
        <div className="w-[132px] h-[132px] rounded-full overflow-hidden bg-[#36454F] flex items-center justify-center border-[3px] border-edge dark:border-edge-dark hover:scale-110 transition-transform duration-300">
          <Image src="/images/profile.png" alt="Profile" width={132} height={132} className="object-cover" />
        </div>
        <p className="text-muted dark:text-muted-dark text-lg font-semibold transition-colors duration-300">Hi there! I am</p>
        <h1 className="text-heading dark:text-heading-dark font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight transition-colors duration-300">MUHAMMAD AUFA FARABI</h1>
        <p className="text-accent dark:text-accent-dark font-bold text-base sm:text-lg min-h-[28px] transition-colors duration-300">
          <TypeAnimation
            sequence={[
              "Software Engineer", 3000,
              "Lifelong Learner", 3000,
            ]}
            wrapper="span"
            speed={70}
            repeat={Infinity}
          />
        </p>
        <p className="text-body dark:text-body-dark text-base sm:text-lg leading-relaxed max-w-[620px] transition-colors duration-300">
          3rd Informatics Engineering student at ITB. Mostly develop things for web and mobile, but I also keen poking and learning around data analysis, machine learning, distributed systems, and Artificial Intelligence whenever I get the chance.
        </p>
        <a
          href="/Muhammad Aufa Farabi CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-button dark:bg-button-dark hover:opacity-90 text-white rounded-lg font-semibold text-center py-3.5 px-6 text-sm sm:text-base transition-all duration-300 transform hover:scale-105 mt-2"
        >
          see my resume
        </a>
      </div>
    </section>
  )
}

export default Hero
