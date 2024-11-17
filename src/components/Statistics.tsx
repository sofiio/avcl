import React from 'react';

const Statistics: React.FC = () => {
  return (
    <div className="relative w-full md:h-[400px] h-[800px] xl:mt-12 mt-[500px] sm:mt-[550px] md:mt-[450px]" id="statistics">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{ backgroundImage: "url('/doctor1.jpg')" }} // Replace with your image URL
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-blue-200  bg-opacity-30">
        <h2 className="text-2xl font-bold text-black lg:mb-28 mb-20">საინტერესო სტატისტიკა</h2>
        <div className="md:flex md:flex-row flex justify-center items-center flex-col space-y-6 md:space-y-0 md:justify-around w-full md:space-x-12 lg:space-x-0 px-4">
          <div className="md:bg-blue-400 bg-blue-300 rounded-lg p-4 md:w-[150px] w-[200px] sm:w-[250px] h-[120px]  shadow-md flex flex-col items-center text-center">
            <img src="stat.jpg" alt="" className="w-12 h-12 mb-2" /> {/* Replace with your icon URL */}
            <p className="text-sm font-semibold text-white">1000 პაციენტი ყოველწლიურად</p>
          </div>
          <div className="md:bg-blue-400 bg-blue-300 md:w-[150px] w-[200px] h-[120px] sm:w-[250px]  rounded-lg p-4 shadow-md flex flex-col items-center text-center">
            <img src="stat.jpg" alt="" className="w-12 h-12 mb-2" /> {/* Replace with your icon URL */}
            <p className="text-sm text-white font-semibold">10 წლის გამოცდილება</p>
          </div>
          <div className="md:bg-blue-400 bg-blue-300 md:w-[150px] w-[200px] h-[120px] sm:w-[250px] rounded-lg p-4 shadow-md flex flex-col items-center text-center">
            <img src="stat.jpg" alt="" className="w-12 h-12 mb-2" /> {/* Replace with your icon URL */}
            <p className="text-sm text-white font-semibold">3 ფილიალი</p>
          </div>
          <div className="md:bg-blue-400 bg-blue-300 md:w-[150px] w-[200px] h-[120px] sm:w-[250px] rounded-lg p-4 shadow-md flex flex-col items-center text-center">
            <img src="stat.jpg" alt="" className="w-12 h-12 mb-2" /> {/* Replace with your icon URL */}
            <p className="text-sm text-white font-semibold">15 ახალი სერვისი</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;