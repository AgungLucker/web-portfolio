import React from "react";

const ExperiencesCard = ({ job, role, duration, type, description, isLast }) => {
    return (
      <div className="relative flex gap-8 group">
        {/* Chain/Timeline Line */}
        <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full border-4 border-red-600 dark:border-red-500 bg-white dark:bg-gray-950 z-10 transition-transform duration-300 group-hover:scale-125"></div>
            {!isLast && <div className="w-1 h-full bg-gray-200 dark:bg-gray-800 transition-colors duration-300"></div>}
        </div>

        {/* Content */}
        <div className="pb-12 w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white transition-colors duration-300 group-hover:text-red-600 dark:group-hover:text-red-500">
                        {job}
                    </h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                        type === "Work Experience" 
                        ? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
                        : "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800"
                    }`}>
                        {type}
                    </span>
                </div>
                <p className="text-sm md:text-base font-semibold text-gray-500 dark:text-gray-400 transition-colors duration-300">
                    {duration}
                </p>
            </div>
            
            <p className="text-lg font-semibold text-zinc-700 dark:text-gray-300 mb-3 transition-colors duration-300">
                {role}
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base transition-colors duration-300 max-w-3xl">
                {description}
            </p>
        </div>
      </div>
    );
  };
  
  export default ExperiencesCard;
