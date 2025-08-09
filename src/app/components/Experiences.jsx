import React from "react";
import ExperiencesCard from "./ExperiencesCard";

const Experiences = () => {
    const experiences = [
        {
            job: "HMIF ITB",
            role: "Staff of Career Development Division",
            duration: "July 2025 - Now"
        },
        {
            job: "Olimpiade KM ITB",
            role: "Staff of Extracampus Division",
            duration: "September 2024 - October 2024"
        },
        {
            job: "STEI-Kesyen",
            role: "Staff of Acomodation Division",
            duration: "April 2024 - May 2024",
        },

    ]

  return (
    <section id="Experiences" className=" h-auto py-6 mt-8 md:px-5 md:pt-10">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-6 w-full mx-auto px-6 md:px-12">
            <div id="Education" className="col-span-1 md:col-span-5 flex flex-col gap-3">
                <h2 className="font-semibold text-zinc-900">
                    Education
                </h2>
                <div className="space-y-1 py-4 border-t border-gray-600">
                    <div className="flex flex-wrap items-center gap-1 md:gap-3">
                        <p className="font-semibold md:text-lg text-zinc-800">Institut Teknologi Bandung</p>
                        <p className="text-sm text-neutral-600">Undergraduate College</p>
                    </div>
                    <p className="underline text-zinc-700">Informatics Engineering</p>
                    <p className="text-neutral-600">August 2023 - Now </p>
                </div>
                <div className="space-y-1 py-4 border-t border-gray-600">
                    <div className="flex flex-wrap items-center gap-1 md:gap-3">
                        <p className="font-semibold md:text-lg text-zinc-800">SMAN 71 JAKARTA</p>
                        <p className="text-sm text-neutral-600">Senior High School</p>
                    </div>
                    <p className="underline text-zinc-700">Natural Science</p>
                    <p className="text-neutral-600">July 2020 - June 2023 </p>
                </div>
            </div>
            <div id="Experience" className="lg:ml-10 md:col-span-3 rounded-xl p-5 shadow-lg border border-zinc-300">
                <h2 className="font-semibold text-zinc-900">
                    Experiences
                </h2>
                <div>
                    {experiences.map((exp, index) => {
                        return (
                        <ExperiencesCard 
                            key={index}
                            job={exp.job}
                            role={exp.role}
                            duration={exp.duration}/>
                    )})}
                </div>
            </div>


        </div>


    </section>
  );
};

export default Experiences;
