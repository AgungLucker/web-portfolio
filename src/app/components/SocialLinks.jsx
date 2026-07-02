import React from "react";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const socialLinks = [
  { href: "https://github.com/AgungLucker", icon: GithubIcon, alt: "Github Icon" },
  { href: "https://www.linkedin.com/in/muhammad-aufa-farabi-b89822185/", icon: LinkedinIcon, alt: "Linkedin Icon" },
];

const SocialLinks = ({ size = 30, className = "" }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    {socialLinks.map(({ href, icon, alt }) => (
      <a
        key={alt}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 hover:scale-110"
      >
        <Image src={icon} alt={alt} width={size} height={size} />
      </a>
    ))}
  </div>
);

export default SocialLinks;
