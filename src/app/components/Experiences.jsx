import React from "react";
import ExperiencesCard from "./ExperiencesCard";
import { useScrollReveal } from "../hooks/useScrollReveal";

const experiencesData = [
    {
        job: "Telkomsel",
        role: "Intern Software Developer",
        duration: "Jan 2026 - Feb 2026",
        type: "Work Experience",
        description: "Researched AI-driven SDLC frameworks and deployed a full-stack LMS using Vite, Express.js, and AWS S3 with CI/CD integration."
    },
    {
        job: "Computational Thinking ITB",
        role: "Practicum Assistant",
        duration: "Sept 2025 - Dec 2025",
        type: "Work Experience",
        description: "Supervised practicum sessions for 60+ students and evaluated student submissions with structured feedback for final assessments."
    },
    {
        job: "HMIF ITB",
        role: "Staff of Career Development Division",
        duration: "July 2025 - Now",
        type: "Volunteer Experience",
        description: "Managing career-related programs and development initiatives for informatics students at ITB."
    },
    {
        job: "Olimpiade KM ITB",
        role: "Staff of Extracampus Division",
        duration: "Sept 2024 - Oct 2024",
        type: "Volunteer Experience",
        description: "Coordinated external campus relations and student participation for major university-wide competitions."
    },
];

const Experiences = () => {
    const revealRef = useScrollReveal();

  return (
    <section id="Experiences" ref={revealRef} className="reveal h-auto py-16 px-6 md:px-24 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-12 transition-colors duration-300">
                Work & Volunteer <span className="text-red-600 dark:text-red-500">EXPERIENCES</span>
            </h2>
            <div className="flex flex-col">
                {experiencesData.map((exp, index) => (
                    <ExperiencesCard 
                        key={index}
                        job={exp.job}
                        role={exp.role}
                        duration={exp.duration}
                        type={exp.type}
                        description={exp.description}
                        isLast={index === experiencesData.length - 1}
                    />
                ))}
            </div>
        </div>
    </section>
  );
};

export default Experiences;
