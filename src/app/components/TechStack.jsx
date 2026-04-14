import React from "react"
import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";
import HTMLIcon from "../../../public/html-1.svg"
import CSSIcon from "../../../public/css-3.svg"
import JSIcon from "../../../public/logo-javascript.svg"
import ReactIcon from "../../../public/react.svg"
import TailwindCSSIcon from "../../../public/tailwind-css-2.svg"
import PythonIcon from "../../../public/python-5.svg"
import CIcon from "../../../public/c-1.svg"
import JavaIcon from "../../../public/java-4.svg"
import NextJSIcon from "../../../public/next-js.svg"
import nodeJsIcon from "../../../public/nodejs.svg"
import Cplus2 from "../../../public/cplus2.svg"
import mySQLIcon from "../../../public/mysql.svg"
import MongoDBIcon from "../../../public/mongodb.svg"

const techStacks = [
  {name: "HTML", icon:HTMLIcon},
  {name: "CSS", icon:CSSIcon},
  {name: "Javascript", icon:JSIcon},
  {name: "Tailwind", icon:TailwindCSSIcon},
  {name: "React", icon:ReactIcon},
  {name: "Next.js", icon:NextJSIcon},
  {name: "Python", icon:PythonIcon},
  {name: "C", icon:CIcon},
  {name: "Java", icon:JavaIcon},
  {name: "C++", icon:Cplus2},
  {name: "Node.js", icon:nodeJsIcon},
  {name: "MySQL", icon:mySQLIcon},
  {name: "MongoDB", icon:MongoDBIcon},
];
const TechStack = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="About" ref={revealRef} className="reveal h-auto px-4 md:px-10 py-2 mb-12 mt-12 transition-colors duration-300">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center py-4 px-16">
        <div className="col-span-full mt-4 md:mt-0 text-left flex flex-col ">
          <div className="text-black dark:text-white mt-8 transition-colors duration-300">
              <h3 className=" font-bold text-3xl md:text-5xl mb-8">My <span className="text-orange-500 dark:text-orange-400 transition-colors duration-300">Tech Stack</span></h3>
              <div className="flex flex-wrap gap-3 font-semibold">

                {techStacks.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gray-300 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg p-2 flex items-center w-full sm:w-1/2 md:w-1/5 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    >
                      <div className="w-[30px] h-[30px] overflow-hidden flex justify-center items-center">
                        <Image
                        src={tech.icon}
                        alt={`${tech.name} Icon`}
                        width={30}
                        height={30}
                        className="object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                    <p className="ml-2 text-xs lg:text-sm text-black dark:text-white transition-colors duration-300">{tech.name}</p>
                  </div>
                ))}
              </div>

          </div>

        </div>
      </div>
    </section>
  )
}


export default TechStack;
