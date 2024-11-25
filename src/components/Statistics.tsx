import React, { useState } from "react";

const Statistics: React.FC = () => {
  // State to manage the number of child components (from 1 to 4)
  const [sliderValue] = useState<number>(4);

  // Handle slider change to control the number of visible child components
  // const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSliderValue(Number(e.target.value));
  // };

  return (
    <div className="bg-gray-300 xl:p-10 p-4 xl:mt-12 mt-36 sm:mt-40 md:mt-32 lg:mt-4 h-[400px] sm:h-[250px] xl:h-[400px] lg:h-[300px]">
      {/* Invisible Slider Section */}
      <div className="xl:mb-4 flex justify-center">
        <label className="lg:text-[25px] font-mrglovani xl:p-2 text-[18px] sm:text-[20px] md:text-[24px] font-quinapple text-customDarkBlue">
          საინტერესო სტატისტიკა
        </label>
        {/* Invisible slider but still functional */}
        {/* <input
          type="range"
          min="1"
          max="4"
          value={sliderValue}
          onChange={handleSliderChange}
          className="w-full mt-2 opacity-0 absolute pointer-events-none"
        /> */}
      </div>

      {/* Child Components */}
      <div className="flex flex-wrap gap-4 justify-center">
        {[...Array(sliderValue)].map((_, index) => (
          <div
            key={index}
            className="bg-customDarkBlue text-white p-4 xl:w-60 xl:h-48 w-[136px] h-[130px] lg:h-[160px] sm:w-[135px] lg:w-[160px] mt-8 flex items-center justify-center rounded-lg shadow-lg"
          >
            Child Component {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
