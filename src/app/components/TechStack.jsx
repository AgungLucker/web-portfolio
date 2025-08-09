import React from "react"
import Image from "next/image";
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
  return (
    <section id="About" className="h-auto px-4 md:px-10 py-2 mb-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center py-4 px-16">
        <div className="col-span-full mt-4 md:mt-0 text-left flex flex-col ">
          <div className="text-black mt-8">
              <h3 className=" font-bold text-2xl mb-4">My <span className="text-orange-500">Tech Stack</span></h3>
              <div className="flex flex-wrap gap-3 font-semibold">

                {techStacks.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gray-300 hover:bg-gray-200 rounded-lg p-2 flex items-center w-full sm:w-1/2 md:w-1/5"
                    >
                      <div className="w-[30px] h-[30px] overflow-hidden flex justify-center items-center">
                        <Image
                        src={tech.icon}
                        alt={`${tech.name} Icon`}
                        width={30}
                        height={30}
                        className="object-cover"
                        />
                      </div>
                    <p className="ml-2 text-xs lg:text-sm">{tech.name}</p>
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



