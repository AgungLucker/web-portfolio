import React from "react";
import Image from "next/image";

const techStackIcons = {
  Python: "/python-5.svg",
  Java: "/java-4.svg",
  Nextjs:"/next-js.svg",
  React:"/react.svg",
  Tailwind:"/tailwind-css-2.svg",
  Go: "/Go.svg",
  Expressjs: "/Expressjs.png",
  Javascript: "/javascript-logo-svgrepo-com.svg"

};

const ProjectsCard = ({ imgURL, title, desc, techStack, tab, github }) => {
  const handleCardClick = () => {
    if (github) {
      window.open(github, "_blank");
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="w-full rounded-2xl overflow-hidden mx-auto shadow-[0_4px_18px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_18px_rgba(0,0,0,0.35)] hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 transform cursor-pointer group bg-projectcard dark:bg-projectcard-dark h-full flex flex-col"
    >
      {/* Image Container with Overlay */}
      <div
        className="h-48 bg-cover bg-center transition-all duration-300 relative overflow-hidden"
        style={{ backgroundImage: `url(${imgURL})` }}
      >
        {/* Shading Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
        
        {/* GitHub Text on Hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
          <span className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View on GitHub
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="pt-5 pb-4 px-5 text-heading dark:text-heading-dark flex flex-col justify-between flex-1 transition-colors duration-300">
        <div>
          {/* Title */}
          <h3 className="text-lg font-bold leading-tight mb-2.5">{title}</h3>

          {/* Description */}
          <p className="text-sm text-muted dark:text-muted-dark leading-relaxed mb-3">{desc}</p>
        </div>

        {/* Tech Stack Badges */}
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-pill dark:bg-pill-dark text-pilltext dark:text-pilltext-dark transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
