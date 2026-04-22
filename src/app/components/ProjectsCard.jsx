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
      className="w-full rounded-xl overflow-hidden mx-auto shadow-md dark:shadow-xl hover:shadow-xl dark:hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 transform cursor-pointer group bg-[#f0f0e0] dark:bg-gray-800 h-full flex flex-col"
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
      <div className="pt-5 pb-4 pl-5 pr-5 text-black dark:text-white flex flex-col justify-between flex-1 transition-colors duration-300">
        <div>
          {/* Title */}
          <h3 className="text-lg font-semibold leading-tight mb-2">{title}</h3>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{desc}</p>
        </div>

        {/* Tech Stack Badges */}
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors duration-300"
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
