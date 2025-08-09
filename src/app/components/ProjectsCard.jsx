import React from "react";
import Image from "next/image";

const techStackIcons = {
  Python: "/python-5.svg",
  Java: "/java-4.svg",
  Nextjs:"/next-js.svg",
  React:"/react.svg",
  Tailwind:"/tailwind-css-2.svg",
  Go: "/Go.svg",
  Expressjs: "/Expressjs.png",
  Javascript: "/javascript-logo-svgrepo-com.svg"

};

const ProjectsCard = ({ imgURL, title, desc, techStack, tab }) => {
  return (
    <div>
      {(
        <div className="w-[85%] md:w-[250px] lg:w-[300px] max-w-[full] rounded-lg overflow-hidden mx-auto shadow-lg mt-6 border-2 border-solid border-gray-800">
          <div
            className="h-40 bg-cover bg-center"
            style={{ backgroundImage: `url(${imgURL})` }}
          />
          <div className="bg-white pt-2 pb-4 pl-4 pr-4 text-black flex flex-col justify-start h-[200px]">
            <div className="flex flex-row justify-start items-start overflow-hidden">
              <h3 className="text-lg font-semibold leading-tight md:leading-normal">{title}</h3>
            </div>
            <p className="text-sm text-justify overflow-hidden mb-2">{desc}</p>
            {techStack && techStack.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto mb-8">
                  {techStack.map((tech, index) => (
                    <Image
                      key={index}
                      src={techStackIcons[tech] || "/public/default-icon.png"} 
                      alt={tech}
                      width={24}
                      height={24}
                      className="h-6 w-6 ml-2 object-contain" 
                    />
                  ))}
                </div>
              )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsCard;
