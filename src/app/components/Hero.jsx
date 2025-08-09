import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="Hero" className="h-auto  bg-[#fafbf5] rounded-b-[60px] px-4 md:px-10 md:pt-10 pb-2 flex flex-col items-center">
      <div className="flex flex-col items-start justify-between px-4 md:px-10 py-8 pb-4 w-full mt-12">
        <div className="flex-shrink-0 flex items- justify-start ">
            <div className="rounded-full bg-[#36454F] w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] overflow-hidden flex items-center justify-center">
              <Image src="/images/profile.png" width={60} height={40} className="object-cover"/>
            </div>
          </div>
        <div className="flex flex-col place-content w-full md:w-7/8 mt-5 ">
          <p className="text-gray-500 mb-1 text-lg font-semibold">Hi there! I am</p>
          <h1 className="text-cyan-950 font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-4">MUHAMMAD AUFA FARABI</h1>
          <p
          className="text-[#99c221] mb-8 font-bold text-base sm:text-lg"
          >
            <span className="text-gray-500">A </span>
            <TypeAnimation 
              sequence={[
                "Software Development Enthusiast", 3000, 
                "Data Enthusiast", 3000,
              ]}
              wrapper="span"
              speed={70}
              repeat={Infinity}
            />
          </p>
          <p className="text-zinc-900 py-3 text-sm sm:text-base leading-relaxed w-full md:w-3/4">I am currently pursuing a degree in Informatics Engineering at ITB, where I am honing my skills 
            in various fields within computer science. My academic focus is primarily on Software Engineering, particularly on Web Development, and also currently growing my skills on Data Analytics
            .</p>
          <div className="flex justify-start mt-2 mb-8">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black hover:bg-gray-800 text-white rounded-md font-semibold text-center py-3 px-2 text-sm sm:text-base">
                see my resume
            </a>
          </div>
          
        </div>
      </div>
      
    </section>

  )
}

export default Hero