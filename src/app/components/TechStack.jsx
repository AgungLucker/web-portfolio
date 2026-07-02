import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const techCategories = [
  {
    label: "Programming Languages",
    techs: ["Python", "JavaScript", "Java", "C", "C++", "PHP", "Go", "Kotlin"],
  },
  {
    label: "Frontend Development",
    techs: ["HTML", "CSS", "React", "Next.js", "Tailwind", "Redux"],
  },
  {
    label: "Backend Development",
    techs: ["Node.js", "Express.js", "FastAPI"],
  },
  {
    label: "Data Science",
    techs: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
  },
  {
    label: "Database",
    techs: ["MySQL", "MongoDB", "PostgreSQL", "SQLite", "Prisma"],
  },
  {
    label: "Tools",
    techs: ["Git", "GitHub", "Docker", "Swagger", "Jest", "VS Code", "Postman"],
  },
];

const TechStack = () => {
  const revealRef = useScrollReveal();

  return (
    <section
      id="About"
      ref={revealRef}
      className="reveal py-20 px-6 flex justify-center transition-colors duration-300"
    >
      <div className="max-w-[900px] w-full">
        <h2 className="font-extrabold text-3xl md:text-5xl mb-9 text-heading dark:text-heading-dark transition-colors duration-300">
          My{" "}
          <span className="text-accent dark:text-accent-dark transition-colors duration-300">
            Tech Stack
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-7 rounded-[32px] border border-edge dark:border-edge-dark bg-panel dark:bg-panel-dark">
          {techCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <p className="text-xs font-bold uppercase tracking-widest text-muted dark:text-muted-dark mb-2.5 transition-colors duration-300">
                {category.label}
              </p>
              <div className="h-px w-11 bg-edge dark:bg-edge-dark mb-3.5" />

              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3.5 py-1.5 rounded-full text-sm font-medium bg-pill dark:bg-pill-dark text-pilltext dark:text-pilltext-dark border border-edge dark:border-edge-dark hover:border-accent dark:hover:border-accent-dark hover:text-accent dark:hover:text-accent-dark transition-all duration-200 cursor-default select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
