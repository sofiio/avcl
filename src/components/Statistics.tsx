import React from 'react';

const Statistics: React.FC = () => {
  return (
    <div className="relative w-full md:h-[400px] h-[800px] xl:mt-0 mt-[500px] sm:mt-[550px] md:mt-[450px]" id="statistics">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{ backgroundImage: "url('/doctor1.jpg')" }} // Replace with your image URL
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-customblue  bg-opacity-10">
        <h2 className="text-2xl font-bold text-customDarkBlue lg:mb-28 mb-20">საინტერესო სტატისტიკა</h2>
        <div className="md:flex md:flex-row flex justify-center items-center flex-col space-y-6 md:space-y-0 md:justify-around w-full md:space-x-12 lg:space-x-4 px-4">
          <div className="rounded-full bg-customWhite p-4 md:w-[150px] w-[200px] sm:w-[250px] h-[120px]  shadow-md flex flex-col items-center text-center">
            <img src="stat.jpg" alt="" className="w-8 h-8 mb-2" /> {/* Replace with your icon URL */}
            <p className="text-[8px] font-semibold text-customDarkBlue">1000 პაციენტი ყოველწლიურად</p>
          </div>
          <div className="bg-customWhite md:w-[150px] w-[200px] h-[120px] sm:w-[250px]  rounded-full p-4 shadow-md flex flex-col items-center text-center">
            <img src="stat.jpg" alt="" className="w-8 h-8 mb-2" /> {/* Replace with your icon URL */}
            <p className="text-[8px] text-customDarkBlue font-semibold">10 წლის გამოცდილება</p>
          </div>
          <div className="bg-customWhite md:w-[150px] w-[200px] h-[120px] sm:w-[250px] rounded-full p-4 shadow-md flex flex-col items-center text-center">
            <img src="stat.jpg" alt="" className="w-8 h-8 mb-2" /> {/* Replace with your icon URL */}
            <p className="text-[8px] text-customDarkBlue font-semibold">3 ფილიალი</p>
          </div>
          <div className="bg-customWhite md:w-[150px] w-[200px] h-[120px] sm:w-[250px] rounded-full p-4 shadow-md flex flex-col items-center text-center">
            <img src="stat.jpg" alt="" className="w-8 h-8 mb-2" /> {/* Replace with your icon URL */}
            <p className="text-[8px] text-customDarkBlue font-semibold">15 ახალი სერვისი</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;