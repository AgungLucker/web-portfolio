import React from "react"
import SocialLinks from "./SocialLinks";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Footer = () => {
  const revealRef = useScrollReveal();

  return (
    <footer id ="contact" ref={revealRef} className="reveal left-0 mt-12 pb-4 transition-colors duration-300">
        <div className="mx-4 md:mx-10 border-t border-edge dark:border-edge-dark"></div>
        <div className="flex flex-col mx-auto max-w-6xl px-4 sm:px-6 md:px-16 py-4 md:flex-row justify-between items-center md:items-start gap-6">
            <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto">
                <div className="w-full text-body dark:text-body-dark transition-colors duration-300">
                    <p>Reach me out at</p>
                    <a href="mailto:iniabi838@gmail.com" className="underline text-blue-600 dark:text-blue-400 transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-300">iniabi838@gmail.com</a>
                </div>
                <SocialLinks size={35} className="mt-3 justify-center md:justify-start" />

            </div>
            <div className="w-full md:w-auto py-4 md:py-0 text-center md:text-right">
                <p className="text-body dark:text-body-dark transition-colors duration-300">©2026 Muhammad Aufa Farabi. All rights reserved.</p>
            </div>
        </div>


    </footer>
  )
}

export default Footer