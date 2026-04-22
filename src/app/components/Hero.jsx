import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Hero = () => {
  const revealRef = useScrollReveal();

  return (
    <section 
      id="Hero" 
      ref={revealRef}
      className="reveal h-auto bg-[#fafbf5] dark:bg-[#110f0d] rounded-b-[60px] px-4 md:px-10 md:pt-10 pb-2 flex flex-col items-center transition-colors duration-300 mt-0 mb-12"
    >
      <div className="flex flex-col items-start justify-between px-4 md:px-10 py-8 pb-4 w-full mt-12">
        <div className="flex-shrink-0 flex items- justify-start ">
            <div className="rounded-full border-2 border-transparent dark:border-white/80 bg-[#36454F] w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] overflow-hidden flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <Image src="/images/profile.png" alt="Profile" width={60} height={40} className="object-cover"/>
            </div>
          </div>
        <div className="flex flex-col place-content w-full md:w-7/8 mt-5 ">
          <p className="text-gray-500 dark:text-gray-400 mb-1 text-lg font-semibold transition-colors duration-300">Hi there! I am</p>
          <h1 className="text-cyan-950 dark:text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-4 transition-colors duration-300">MUHAMMAD AUFA FARABI</h1>
          <p
          className="text-[#99c221] dark:text-green-400 mb-8 font-bold text-base sm:text-lg transition-colors duration-300"
          >
            {/* <span className="text-gray-500 dark:text-gray-400"> </span> */}
            <TypeAnimation 
              sequence={[
                "Software Developer", 3000, 
                "3rd Year Informatics Student at ITB", 3000,
              ]}
              wrapper="span"
              speed={70}
              repeat={Infinity}
            />
          </p>
          <p className="text-zinc-900 dark:text-gray-300 py-3 text-sm sm:text-base leading-relaxed w-full md:w-3/4 transition-colors duration-300">I am currently a third-year Informatics Engineering student at Institut Teknologi Bandung. 
          I have a deep interest in software development, currently on Web and Mobile app development, where I enjoy exploring how various applications work and trying to build meaningful application that delivers a positive impact. 
          Besides that, my hands-on experience spanning Data Analysis, Machine Learning, Distributed Systems, and advanced Algorithms has broadened my technical capabilities and problem-solving skills.</p>
          <div className="flex justify-start mt-2 mb-8">
            <a
              href="/Muhammad Aufa Farabi CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 text-white rounded-md font-semibold text-center py-3 px-2 text-sm sm:text-base transition-all duration-300 transform hover:scale-105">
                see my resume
            </a>
          </div>
          
        </div>
      </div>
      
    </section>

  )
}

export default Hero