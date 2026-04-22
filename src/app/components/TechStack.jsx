import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const techCategories = [
  {
    label: "Programming Languages",
    techs: ["Python", "JavaScript", "Java", "C", "C++, PHP, Go, Kotlin"],
  },
  {
    label: "Frontend Development",
    techs: ["HTML", "CSS", "React", "Next.js", "Tailwind",],
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
      className="reveal h-auto px-4 md:px-10 py-2 mb-12 mt-12 transition-colors duration-300"
    >
      <div className="py-4 px-4 md:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col">
          <div className="text-black dark:text-white mt-8 transition-colors duration-300">

            <h3 className="font-bold text-3xl md:text-5xl mb-10">
              My{" "}
              <span className="text-orange-500 dark:text-orange-400 transition-colors duration-300">
                Tech Stack
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-[32px] border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-slate-950/80 shadow-sm dark:shadow-black/20">
              {techCategories.map((category, catIndex) => (
                <div key={catIndex} className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-700 dark:text-gray-300 mb-3 transition-colors duration-300">
                      {category.label}
                    </p>
                    <div className="h-px w-12 bg-gray-300 dark:bg-gray-600 mb-4" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.techs.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="
                          px-4 py-1.5
                          rounded-full
                          text-sm font-medium
                          bg-gray-200 dark:bg-gray-700
                          text-gray-700 dark:text-gray-200
                          border border-gray-300 dark:border-gray-600
                          hover:border-orange-400 dark:hover:border-orange-400
                          hover:text-orange-500 dark:hover:text-orange-400
                          hover:bg-orange-50 dark:hover:bg-orange-900/10
                          transition-all duration-200 cursor-default
                          select-none
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;