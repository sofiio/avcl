import React from "react";
import Map from "./Map";

const Contuct: React.FC = () => {
  return (
    <div className="w-full md:h-[550px] h-[600px] flex md:flex-row flex-col md:mt-16 mt-8">
      {" "}
      {/* Mother div with flex */}
      {/* First child div: Contact Information */}
      <div
        className="relative flex-1 mx-auto lg:w-[900px] h-[500px] w-full overflow-hidden"
        id="contacts"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/contactbg.png')" }} // Replace with your image URL
        />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white p-4 bg-black bg-opacity-50 text-sm md:text-lg">
          <h3 className="sm:text-[16px] text-[14px] font-bold font-mrglovani">
            სამუშაო საათები
          </h3>
          <p className="sm:text-[13px] text-[10px] font-arial">
            ორშაბათი-პარასკევი: 10:00 - 18:00
          </p>
          <p className="sm:text-[13px] text-[10px] font-arial">
            შაბათი: 10:00 - 14:00 (მხოლოდ ქუთაისის ფილიალი)
          </p>
          <h3 className="sm:text-[16px] text-[10px] font-bold mt-4 font-mrglovani">
            კონტაქტი
          </h3>
          <p className="sm:text-[13px] text-[10px] font-arial">
            Email: Adeishviliclinic@gmail.com
          </p>
          <p className="sm:text-[13px] text-[10px] font-arial">
            ტელეფონი: 514 74 43 43
          </p>
        </div>
      </div>
      {/* Second child div: Map */}
      <div className="flex-1 md:h-full">
        <Map /> {/* Your Map component */}
      </div>
    </div>
  );
};

export default Contuct;
