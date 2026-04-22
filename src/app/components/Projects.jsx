import ProjectsCard from "./ProjectsCard";
import React, { useState, useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const ProjectsData = [
  {
    id: 1,
    title: "Nimons360",
    description: "Real Time Family Location Sharing and Tracking Android App allowing users to manage their family groups and share their real-time location with family members via in-built map and livestream feature",
    image: "/images/Nimons360.png",
    tab: ["Projects"],
    techStack: ["Kotlin", "Jetpack Compose"],
    github: "https://github.com/AgungLucker/Nimons360---Tugas-Besar-Mobile-App-Development",
  },
  {
    id: 2,
    title: "Nimonspedia",
    description: "Web E-commerce and Auctions App Project featuring Seller and Buyer functionalities including product listing, shopping cart, order management, and real-time chat and auctions",
    image: "/images/Nimonspedia.png",
    tab: ["Projects"],
    techStack: ["PHP", "React", "Typescript", "Expressjs", "Docker", "Nginx"],
    github: "https://github.com/AgungLucker/Nimonspedia-Tugas-Besar-WBD",
  },
  {
    id: 3,
    title: "Shuzzam",
    description: "Music recognition app that can identify songs by album song cover and audio humming, utilized PCA based process to find the similiar song album and Music information retrieval (MIR) techniques to extract audio features",
    image: "/images/Shuzzam.png",
    tab: ["Projects"],
    techStack: ["Typescript", "Nextjs", "Python"],
    github: "https://github.com/AgungLucker/Shuzzam",
  },
    {
    id: 4,
    title: "WebBrewery",
    description: "Little Alchemy 2 recipe finder and visualizer app that implements BFS and DFS to construct the recipe tree solution",
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
      className="reveal h-auto bg-[#fafbf5] dark:bg-gray-950 rounded-t-[3%] rounded-b-[3%] md:rounded-t-[60px] md:rounded-b-[60px] px-5 sm:px-6 md:px-10 py-8 md:py-10 mt-12 mb-12 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-black dark:text-white mt-6 pt-2 py-4 transition-colors duration-300">
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
      </div>
    </section>
  )
}

export default Activities