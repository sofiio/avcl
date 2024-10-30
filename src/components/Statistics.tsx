import React from 'react';

const Statistics: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] mt-12">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{ backgroundImage: "url('/doctor1.jpg')" }} // Replace with your image URL
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-blue-200  bg-opacity-30">
        <h2 className="text-2xl font-bold text-black mb-28">საინტერესო სტატისტიკა</h2>
        <div className="flex justify-around w-full px-4">
          <div className="bg-blue-400 rounded-lg p-4 w-[150px] shadow-md flex flex-col items-center text-center">
            <img src="stat.jpg" alt="" className="w-12 h-12 mb-2" /> {/* Replace with your icon URL */}
            <p className="text-sm font-semibold text-white">1000 პაციენტი ყოველწლიურად</p>
          </div>
          <div className="bg-blue-400 w-[150px] rounded-lg p-4 shadow-md flex flex-col items-center text-center">
            <img src="stat.jpg" alt="" className="w-12 h-12 mb-2" /> {/* Replace with your icon URL */}
            <p className="text-sm text-white font-semibold">10 წლის გამოცდილება</p>
          </div>
          <div className="bg-blue-400 w-[150px] rounded-lg p-4 shadow-md flex flex-col items-center text-center">
            <img src="stat.jpg" alt="" className="w-12 h-12 mb-2" /> {/* Replace with your icon URL */}
            <p className="text-sm text-white font-semibold">3 ფილიალი</p>
          </div>
          <div className="bg-blue-400 w-[150px] rounded-lg p-4 shadow-md flex flex-col items-center text-center">
            <img src="stat.jpg" alt="" className="w-12 h-12 mb-2" /> {/* Replace with your icon URL */}
            <p className="text-sm text-white font-semibold">15 ახალი სერვისი</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;