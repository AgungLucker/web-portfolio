import ProjectsCard from "./ProjectsCard";
import React, { useState, useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const ProjectsData = [
  {
    id: 1,
    title: "Pokemon-like Fighting Game",
    description: "A Pokemon-like turn-based fighting game in CLI",
    image: "/images/O.W.C.A.png",
    tab: ["Projects"],
    techStack: ["Python"],
    github: "https://github.com/AgungLucker/Pokemon-Game",
  },
  {
    id: 2,
    title: "Matrix Calculator and Image Resizer",
    description: "Matrix Calculator App for Linear Algebra and Image Resizing application with GUI",
    image: "/images/matrix.png",
    tab: ["Projects"],
    techStack: ["Java"],
    github: "https://github.com/AgungLucker/Matrix-Calculator",
  },
  {
    id: 3,
    title: "Tasklink",
    description: "A task management app with built-in calendar",
    image: "/images/Tasklink.png",
    tab: ["Projects"],
    techStack: ["React", "Nextjs", "Tailwind"],
    github: "https://github.com/AgungLucker/Sparta-Milestone-Project",
  },
    {
    id: 4,
    title: "WebBrewery",
    description: "Little Alchemy 2 recipe finder and visualizer app",
    image: "/images/WebBrewery.png",
    tab: ["Projects"],
    techStack: ["React", "Go", "Tailwind"],
    github: "https://github.com/AgungLucker/WebBrewery",
  },
   {
    id: 5,
    title: "Anim'All",
    description: "Pet lost and found app for Jatinangor area",
    image: "/images/Animall.png",
    tab: ["Projects"],
    techStack: ["Javascript", "Expressjs"],
    github: "https://github.com/AgungLucker/AnimAll",
  },

];
const Activities = () => {
  const [tab, setTab] = useState("Projects");
  const ref = useRef(null);
  const revealRef = useScrollReveal();

  const filteredProjects = ProjectsData.filter((project) =>
    project.tab.includes(tab) 
  );

  return (
    <section 
      id="Projects" 
      ref={revealRef}
      className="reveal h-auto bg-[#fafbf5] dark:bg-gray-950 rounded-t-[3%] rounded-b-[3%] md:rounded-t-[60px] md:rounded-b-[60px] px-4 pb-5 md:px-10 md:py-10 mt-12 mb-12 transition-colors duration-300"
    >
      <h2 className="text-center text-3xl md:text-5xl font-bold text-black dark:text-white mt-4 pt-2 py-4 transition-colors duration-300">
      recent  <span className="text-red-600 dark:text-red-500 transition-colors duration-300">PROJECTS</span></h2>
      <p className="text-center text-lg font-medium text-[#604b4b] dark:text-gray-400 pb-2 mb-4 transition-colors duration-300" >Here are some of projects i&#39;ve worked on</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectsCard
            key={project.id}
            imgURL={project.image}
            title={project.title}
            desc={project.description}
            techStack={project.techStack}
            github={project.github}
          />
        ))}

      </div>
  

    </section>
  )
}

export default Activities