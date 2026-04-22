import React from "react"
import Image from "next/image"
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Footer = () => {
  const revealRef = useScrollReveal();

  return (
    <footer id ="contact" ref={revealRef} className="reveal left-0 mt-12 pb-4 transition-colors duration-300">
        <div className="mx-4 md:mx-10 border-t border-zinc-500 dark:border-gray-400"></div>
        <div className="flex flex-col mx-auto max-w-6xl px-4 sm:px-6 md:px-16 py-4 md:flex-row justify-between items-center md:items-start gap-6">
            <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto">
                <div className="w-full text-black dark:text-white transition-colors duration-300">
                    <p>Reach me out at</p>
                    <a href="mailto:iniabi838@gmail.com" className="underline text-blue-800 dark:text-blue-400 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-300">iniabi838@gmail.com</a>
                </div>
                <div className="flex flex-row space-x-4 mt-3 justify-center md:justify-start">
                    <a href="https://github.com/AgungLucker" target="_blank" className="transition-transform duration-300 hover:scale-110">
                        <Image src={GithubIcon} alt="Github Icon" width={35} height={35} />
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-aufa-farabi-b89822185/" target="_blank" className="transition-transform duration-300 hover:scale-110">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" width={35} height={35}/>
                    </a> 
                </div>

            </div> 
            <div className="w-full md:w-auto py-4 md:py-0 text-center md:text-right">
                <p className="text-black dark:text-white transition-colors duration-300">©2026 Muhammad Aufa Farabi. All rights reserved.</p>
            </div>
        </div>


    </footer>
  )
}

export default Footer