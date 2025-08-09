import ProjectsCard from "./ProjectsCard";
import React, { useState, useRef } from "react";

const ProjectsData = [
  {
    id: 1,
    title: "Pokemon-like Fighting Game",
    description: "A Pokemon-like turn-based fighting game in CLI",
    image: "/images/O.W.C.A.png",
    tab: ["Projects"],
    techStack: ["Python"],
  },
  {
    id: 2,
    title: "Matrix Calculator and Image Resizer",
    description: "Matrix Calculator App for Linear Algebra and Image Resizing application with GUI",
    image: "/images/matrix.png",
    tab: ["Projects"],
    techStack: ["Java"],
  },
  {
    id: 3,
    title: "Tasklink",
    description: "A task management app with built-in calendar",
    image: "/images/Tasklink.png",
    tab: ["Projects"],
    techStack: ["React", "Nextjs", "Tailwind"],
  },
    {
    id: 4,
    title: "WebBrewery",
    description: "Little Alchemy 2 recipe finder and visualizer app",
    image: "/images/WebBrewery.png",
    tab: ["Projects"],
    techStack: ["React", "Go", "Tailwind"],
  },
   {
    id: 5,
    title: "Anim'All",
    description: "Pet lost and found app for Jatinangor area",
    image: "/images/Animall.png",
    tab: ["Projects"],
    techStack: ["Javascript", "Expressjs"],
  },

];
const Activities = () => {
  const [tab, setTab] = useState("Projects");
  const ref = useRef(null);


  const filteredProjects = ProjectsData.filter((project) =>
    project.tab.includes(tab) 
  );

  return (
    <section id="Projects" className="h-auto bg-[rgb(230,232,221)] rounded-t-[3%] rounded-b-[3%] md:rounded-t-[60px] md:rounded-b-[60px] px-4 pb-5 md:px-10 md:py-10 mt-5">
      <h2 className="text-center text-2xl font-bold text-black mt-4 pt-2 py-2">
      recent  <span className="text-red-600 text-3xl">PROJECTS</span></h2>
      <p className="text-center text-lg font-medium text-[#604b4b] pb-2 mb-4" >Here are some of projects i&#39;ve worked on</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <ProjectsCard
            key={project.id}
            imgURL={project.image}
            title={project.title}
            desc={project.description}
            techStack={project.techStack}
          />
        ))}

      </div>
  

    </section>
  )
}

export default Activities