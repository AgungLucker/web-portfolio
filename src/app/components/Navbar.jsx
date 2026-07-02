import React, { Fragment, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";
import SocialLinks from "./SocialLinks";

const ThemeToggleButton = ({ isDark, toggleTheme, mounted, className = "" }) => {
  if (!mounted) return null;
  return (
    <button
        onClick={toggleTheme}
        className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 flex items-center justify-center ${className}`}
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
  );
};

const navLinks = [
  { id: "Hero", label: "Home" },
  { id: "About", label: "Tech Stack" },
  { id: "Projects", label: "Projects" },
  { id: "Experiences", label: "Experiences" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isDark, mounted, toggleTheme } = useTheme();

    useBodyScrollLock(isOpen);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
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
    <Fragment>
    <nav className={`fixed top-5 left-1/2 -translate-x-1/2 backdrop-blur-md border border-navborder dark:border-navborder-dark w-auto max-w-[92vw] lg:max-w-3xl lg:w-[40%] h-[56px] rounded-full shadow-lg bg-navbg dark:bg-navbg-dark z-50 transition-all duration-300 ${isOpen ? "opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto" : ""}`}>
        <div className="flex justify-center items-center h-full px-5 lg:px-4 mx-auto">
            <div id="hamburger" className="lg:hidden flex items-center">
                <button className="text-gray-600 dark:text-gray-300 focus:outline-none flex items-center justify-center w-9 h-9" onClick={toggleMenu} aria-label="Open menu">
                    <span className="text-2xl leading-none">&#9776;</span>
                </button>
            </div>
            <div id="menu" className= "hidden lg:flex flex-row items-center">
                <div className="flex items-center mr-10 space-x-4 text-gray-500 dark:text-gray-400">
                    {navLinks.map(({ id, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={(e) => handleSmoothScroll(e, id)}
                            className="hover:text-black dark:hover:text-white transition-colors duration-300 cursor-pointer"
                        >
                            {label}
                        </a>
                    ))}
                </div>
                <div className="h-8 border-r border-gray-800 dark:border-gray-600 mr-5 hidden md:block" ></div>
                <div className="flex flex-row items-center pl-2">
                    <SocialLinks size={30} />
                    <ThemeToggleButton isDark={isDark} toggleTheme={toggleTheme} mounted={mounted} className="ml-2" />
                </div>
            </div>

        </div>
    </nav>

    {/* Rendered outside <nav> on purpose: <nav> has a translate transform, and a
        transformed ancestor becomes the containing block for fixed descendants —
        nesting this overlay inside it would confine "fixed inset-0" to the pill's
        own box instead of the viewport. */}
    <div
      id="menu-mobile"
      className={`lg:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-page dark:bg-page-dark transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
        <button
            onClick={toggleMenu}
            className="absolute top-7 right-6 text-4xl leading-none text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
            aria-label="Close menu"
        >
            &times;
        </button>

        <div className="flex flex-col items-center gap-8 text-2xl font-semibold text-heading dark:text-heading-dark">
            {navLinks.map(({ id, label }) => (
                <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => handleSmoothScroll(e, id)}
                    className="hover:text-accent dark:hover:text-accent-dark transition-colors duration-300 cursor-pointer"
                >
                    {label}
                </a>
            ))}
        </div>

        <div className="h-px w-16 bg-edge dark:bg-edge-dark"></div>

        <div className="flex items-center gap-6">
            <SocialLinks size={32} />
            <ThemeToggleButton isDark={isDark} toggleTheme={toggleTheme} mounted={mounted} />
        </div>
    </div>
    </Fragment>
  )
}

export default Navbar
