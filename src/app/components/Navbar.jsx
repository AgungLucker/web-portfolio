import React, { useState, useEffect } from "react"; 
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
      const theme = localStorage.getItem('theme');
      setIsDark(theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches));
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen); 
    };

    const toggleTheme = () => {
      const newIsDark = !isDark;
      setIsDark(newIsDark);
      
      if (newIsDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    };

    const handleSmoothScroll = (e, id) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false); // Close mobile menu after click
    };
  return (
    <nav className="fixed top-7 lg:left-1/2 transform -translate-x-1/2  right-0 backdrop-blur-md border border-b-3 border-[#9b9898] dark:border-gray-700 max-w-3xl  w-[30%] lg:w-[40%] h-[60px] rounded-full shadow-lg bg-white/60 dark:bg-gray-950/60 z-10 transition-all duration-300">
        <div className="flex justify-center items-center p-4 mx-auto">
            <div id="hamburger" className="lg:hidden flex items-center">
                <button className="text-gray-500 dark:text-gray-400 focus:outline-none " onClick={toggleMenu}>
                    <span className="md:text-lg mr-2">Menu</span>
                    <span className="text-xl md:text-2xl">&#9776;</span>
                </button>
            </div>
            <div id="menu" className= "hidden lg:flex flex-row items-center">
                <div className="flex items-center mr-10 space-x-4 text-gray-500 dark:text-gray-400">
                    <a href="#Hero" onClick={(e) => handleSmoothScroll(e, 'Hero')} className="hover:text-black dark:hover:text-white text transition-colors duration-300 cursor-pointer">Home</a>
                    <a href="#Projects" onClick={(e) => handleSmoothScroll(e, 'Projects')} className="hover:text-black dark:hover:text-white text transition-colors duration-300 cursor-pointer">Projects</a>
                    <a href="#Experiences" onClick={(e) => handleSmoothScroll(e, 'Experiences')} className="hover:text-black dark:hover:text-white text transition-colors duration-300 cursor-pointer">Experiences</a>
                </div>
                <div className="h-8 border-r border-gray-800 dark:border-gray-600 mr-5 hidden md:block" ></div>
                <div className="flex flex-row space-x-4 pl-2  ">
                    <a href="https://github.com/AgungLucker" target="_blank" className="transition-transform duration-300 hover:scale-110">
                        <Image src={GithubIcon} alt="Github Icon" width={30} height={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-aufa-farabi-b89822185/" target="_blank" className="transition-transform duration-300 hover:scale-110">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" width={30} height={30}/>
                    </a>
                    {mounted && (
                      <button
                          onClick={toggleTheme}
                          className="ml-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
                          aria-label="Toggle theme"
                      >
                          {isDark ? (
                              <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M3 12h2.25m.386-6.364 1.591 1.591M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                              </svg>
                          ) : (
                              <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998z" />
                              </svg>
                          )}
                      </button>
                    )}
                </div>
            </div>

        </div>
        <div id="menu-mobile" className={`lg:hidden flex flex-col items-center ${isOpen ? "flex" : "hidden"} bg-white/60 dark:bg-gray-950/60 border border-gray-700 dark:border-gray-700 rounded-lg w-full mt-1.5 h-auto pb-2 transition-all duration-300`}>
            <a href="#Hero" onClick={(e) => handleSmoothScroll(e, 'Hero')} className="underline text-black dark:text-white text-sm md:text-base md:py-1 border-b dark:border-gray-700 transition-colors duration-300 cursor-pointer">Home</a>
            <a href="#Projects" onClick={(e) => handleSmoothScroll(e, 'Projects')} className="underline text-black dark:text-white text-sm md:text-base md:py-1 dark:border-gray-700 transition-colors duration-300 cursor-pointer">Projects</a>
            <a href="#Experiences" onClick={(e) => handleSmoothScroll(e, 'Experiences')} className="underline text-black dark:text-white text-sm md:text-base md:py-1 dark:border-gray-700 transition-colors duration-300 cursor-pointer">Experiences</a>
        </div>
    </nav>
  )
}

export default Navbar
