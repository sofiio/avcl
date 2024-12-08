import React, { useState } from "react";

// Define the props type for the Statistics component
interface StatisticsProps {
  isEnglish: boolean; // Flag to indicate language
}

const Statistics: React.FC<StatisticsProps> = ({ isEnglish }) => {
  // State to manage the number of child components (from 1 to 4)
  const [sliderValue] = useState<number>(4);

  // Language map for the different sections of the Statistics component
  const languageMap = {
    title: {
      english: "Interesting Statistics",
      georgian: "საინტერესო სტატისტიკა",
    },
    childComponent: {
      english: "Child Component",
      georgian: "შვილის კომპონენტი",
    },
  };

  return (
    <div className="bg-gray-300 xl:p-10 p-4 xl:mt-12 mt-[140px] sm:mt-40 md:mt-32 lg:mt-4 h-[400px] sm:h-[250px] xl:h-[400px] lg:h-[300px]">
      {/* Invisible Slider Section */}
      <div className="xl:mb-4 flex justify-center">
        <label className="lg:text-[25px] font-mrglovani xl:p-2 text-[18px] sm:text-[20px] md:text-[24px] font-quinapple text-customDarkBlue">
          {isEnglish ? languageMap.title.english : languageMap.title.georgian}
        </label>
      </div>

      {/* Child Components */}
      <div className="flex flex-wrap gap-4 justify-center">
        {[...Array(sliderValue)].map((_, index) => (
          <div
            key={index}
            className="bg-customDarkBlue text-white p-4 xl:w-60 xl:h-48 w-[136px] h-[130px] lg:h-[160px] sm:w-[135px] lg:w-[160px] mt-8 flex items-center justify-center rounded-lg shadow-lg"
          >
            {isEnglish
              ? `${languageMap.childComponent} ${index + 1}`
              : `${languageMap.childComponent} ${index + 1}`} {/* Customize text based on language */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
