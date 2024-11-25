import React from "react";

const servicesData = [
  {
    logo: "/8.jpg", // Replace with your image URL
    title: "Service One",
    description: "Description for Service One.",
  },
  {
    logo: "/8.jpg", // Replace with your image URL
    title: "Service Two",
    description: "Description for Service Two.",
  },
  {
    logo: "/8.jpg", // Replace with your image URL
    title: "Service Three",
    description: "Description for Service Three.",
  },
  {
    logo: "/8.jpg", // Replace with your image URL
    title: "Service Four",
    description: "Description for Service Four.",
  },
  {
    logo: "/8.jpg", // Replace with your image URL
    title: "Service Five",
    description: "Description for Service Five.",
  },
  {
    logo: "/8.jpg", // Replace with your image URL
    title: "Service Six",
    description: "Description for Service Six.",
  },
];

const Services: React.FC = () => {
  return (
    <div className="lg:my-10 my-6 px-4 bg-customblue" id="services">
      <h2 className="xl:text-[25px] text-[18px] sm:text-[20px] md:text-[24px] font-mrglovani text-customWhite text-center py-10">
        ჩვენი სერვისები
      </h2>
      <div className="grid md:w-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 place-items-center lg:py-2">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 my-4 flex flex-col items-center transition-transform transform hover:scale-105 w-[300px] sm:w-[270px] md:w-[330px] lg:w-[300px] xl:w-[350px]"
          >
            <img
              src={service.logo}
              alt={service.title}
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-[16px] font-mrglovani font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 font-arial text-center text-[13px]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
