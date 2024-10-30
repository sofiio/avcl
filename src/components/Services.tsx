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
  {
    logo: "/8.jpg", // Replace with your image URL
    title: "Service Seven",
    description: "Description for Service Seven.",
  },
  {
    logo: "/8.jpg", // Replace with your image URL
    title: "Service Eight",
    description: "Description for Service Eight.",
  },
  {
    logo: "/8.jpg", // Replace with your image URL
    title: "Service Nine",
    description: "Description for Service Nine.",
  },
];

const Services: React.FC = () => {
  return (
    <div className="my-24 px-4 bg-blue-50 ">
      <h2 className="text-3xl font-bold text-center py-10">ჩვენი სერვისები</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 my-4 flex flex-col items-center transition-transform transform hover:scale-105"
          >
            <img src={service.logo} alt={service.title} className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
