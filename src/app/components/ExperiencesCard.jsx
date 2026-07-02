import React from "react";

const ExperiencesCard = ({ job, role, duration, type, description, isLast }) => {
    return (
      <div className="relative flex gap-8 group">
        {/* Chain/Timeline Line */}
        <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full border-4 border-accent dark:border-accent-dark bg-page dark:bg-page-dark z-10 transition-transform duration-300 group-hover:scale-125"></div>
            {!isLast && <div className="w-0.5 h-full bg-edge dark:bg-edge-dark transition-colors duration-300"></div>}
        </div>

        {/* Content */}
        <div className="pb-11 w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1.5">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl md:text-2xl font-bold text-heading dark:text-heading-dark transition-colors duration-300 group-hover:text-accent dark:group-hover:text-accent-dark">
                      {job}
                  </h3>
                  <p className="text-sm font-semibold text-muted dark:text-muted-dark transition-colors duration-300">
                      {duration}
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold bg-pill dark:bg-pill-dark text-pilltext dark:text-pilltext-dark transition-colors duration-300">
                    {type}
                </span>
            </div>

            <p className="text-base font-semibold text-body dark:text-body-dark mb-1.5 transition-colors duration-300">
                {role}
            </p>

            <p className="text-muted dark:text-muted-dark leading-relaxed text-sm md:text-base transition-colors duration-300 max-w-xl">
                {description}
            </p>
        </div>
      </div>
    );
  };
  
  export default ExperiencesCard;
