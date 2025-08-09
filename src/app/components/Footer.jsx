import React from "react"
import Image from "next/image"
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const Footer = () => {
  return (
    <footer id ="contact"className=" left-0 mt-10 pb-4">
        <div className="mx-10 border-t border-zinc-500"></div>
        <div className="flex flex-col mx-auto px-16 py-4 md:flex-row justify-between items-center md:items-start">
            <div className="flex flex-col items-center md:items-start text-center md:text-left  ">
                <div className="w-full text-black">
                    <p>Reach me out at</p>
                    <a href="mailto:iniabi838@gmail.com" className="underline text-blue-800">iniabi838@gmail.com</a>
                </div>
                <div className="flex flex-row space-x-4 mt-3 justify-center md:justify-start  ">
                    <a href="https://github.com/AgungLucker" target="_blank" >
                        <Image src={GithubIcon} alt="Github Icon" width={35} height={35} />
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-aufa-farabi-b89822185/" target="_blank">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" width={35} height={35}/>
                    </a> 
                </div>

            </div> 
            <div className="py-6 mt-6 md:mt-0">
                <p className="text-black">©2025 Muhammad Aufa Farabi. All rights reserved.</p>
            </div>
        </div>


    </footer>
  )
}

export default Footer