import React from "react";

// Updated servicesData with Georgian and English versions for title and description
const servicesData = [
  {
    logo: "/8.jpg", // Replace with your image URL
    title: { georgian: "პედიატრი", english: "Pediatrics" },
  },
  {
    logo: "/8.jpg", // Replace with your image URL
    title: { georgian: "ენდოკრინოლოგი", english: "Endocrinology" },
  },
  {
    logo: "/8.jpg", // Replace with your image URL
    title: { georgian: "გინეკოლოგი", english: "Gynecology" },
  },
  {
    logo: "/8.jpg", // Replace with your image URL
    title: { georgian: "ოფთალმოლოგი", english: "Ophthalmology" },
  },
  {
    logo: "/8.jpg", // Replace with your image URL
    title: { georgian: "ოტორინოლარინგოლოგი", english: "Otorhinolaryngology" },
  },
  {
    logo: "/8.jpg", // Replace with your image URL
    title: { georgian: "ტრამვატოლოგი", english: "Traumatology" },
  },
  {
    logo: "/8.jpg", // Replace with your image URL
    title: { georgian: "დერმატოლოგი", english: "Dermatology" },
  },
  {
    logo: "/8.jpg", // Replace with your image URL
    title: { georgian: "სტომატოლოგი", english: "Dentistry" },
  },
  {
    logo: "/8.jpg", // Replace with your image URL
    title: { georgian: "რადიოლოგი", english: "Radiology" },
  },
  {
    logo: "/8.jpg", // Replace with your image URL
    title: { georgian: "ნევროლოგი", english: "Neurology" },
  },
  {
    logo: "/8.jpg", // Replace with your image URL
    title: { georgian: "კარდიოლოგი", english: "Cardiology" },
  },
  {
    logo: "/8.jpg", // Replace with your image URL
    title: { georgian: "უროლოგი", english: "Urology" },
  },
];

const Services: React.FC<{ isEnglish: boolean }> = ({ isEnglish }) => {
  return (
    <div className="lg:my-10 my-6 px-4 bg-customblue" id="services">
      <h2 className="xl:text-[25px] text-[18px] sm:text-[20px] md:text-[24px] font-mrglovani text-customWhite text-center py-10">
        {isEnglish ? "Our Services" : "ჩვენი სერვისები"}
      </h2>
      <div className="grid md:w-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 place-items-center lg:py-2">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 my-4 flex flex-col items-center transition-transform transform hover:scale-105 w-[300px] sm:w-[270px] md:w-[330px] lg:w-[300px] xl:w-[350px]"
          >
            <img
              src="ლოგო.svg"
              alt={isEnglish ? service.title.english : service.title.georgian}
              className="w-8 h-8 mb-6"
            />
            <h3 className="text-[16px] font-arial font-semibold mb-2">
              {isEnglish ? service.title.english : service.title.georgian}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
