import React from "react";
import Slider from "react-slick";

// Updated doctorsData to include both Georgian and English names and professions
const doctorsData = [
  {
    name: { georgian: "სოფიო ხვადაგიანი", english: "Sofia Khvadagiani" },
    profession: { georgian: "კარდიოლოგი", english: "Cardiologist" },
    image: "doctor1.jpg", // Replace with your image URL
  },
  {
    name: { georgian: "ირაკლი დოღონაძე", english: "Irakli Dogonadze" },
    profession: { georgian: "პედიატრი", english: "Pediatrician" },
    image: "doctor2.jpg", // Replace with your image URL
  },
  {
    name: { georgian: "სოფიო ხვადაგიანი", english: "Sofia Khvadagiani" },
    profession: { georgian: "ნევროლოგი", english: "Neurologist" },
    image: "doctor1.jpg", // Replace with your image URL
  },
  {
    name: { georgian: "ირაკლი დოღონაძე", english: "Irakli Dogonadze" },
    profession: { georgian: "დერმატოლოგი", english: "Dermatologist" },
    image: "doctor2.jpg", // Replace with your image URL
  },
  {
    name: { georgian: "სოფიო ხვადაგიანი", english: "Sofia Khvadagiani" },
    profession: { georgian: "ორთოპედი", english: "Orthopedist" },
    image: "doctor1.jpg", // Replace with your image URL
  },
  {
    name: { georgian: "ირაკლი დოღონაძე", english: "Irakli Dogonadze" },
    profession: { georgian: "ოფთალმოლოგი", english: "Ophthalmologist" },
    image: "doctor2.jpg", // Replace with your image URL
  },
];

const DoctorsSlider: React.FC<{
  isEnglish: boolean;
  toggleLanguage: () => void;
}> = ({ isEnglish, toggleLanguage }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-hidden" id="doctors">
      <h2 className="text-[18px] sm:text-[20px] md:text-[24px] text-customDarkBlue text-center font-mrglovani mt-2 lg:mt-0">
        {isEnglish ? "Our Doctors" : "ჩვენი ექიმები"}
      </h2>
      <div className="flex justify-center mb-4">
        <img
          src="logodoc.svg"
          alt="Doctor Icon"
          className="md:w-8 md:h-8 w-4 h-4 sm:w-6 sm:h-6 mt-4"
        />
      </div>
      <Slider {...settings} className="slider text-customWhite font-arial">
        {doctorsData.map((doctor, index) => (
          <div key={index} className="p-4">
            <div className="bg-customblue rounded-lg shadow-md flex flex-col items-center p-4 mx-auto max-w-xs">
              <img
                src={doctor.image}
                alt={doctor.name.georgian}
                className="w-[250px] h-48 rounded-md mb-2"
              />
              <h3 className="text-[16px] font-semibold">
                {isEnglish ? doctor.name.english : doctor.name.georgian}
              </h3>
              <p className="text-customWhite text-[13px]">
                {isEnglish
                  ? doctor.profession.english
                  : doctor.profession.georgian}
              </p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex justify-center mt-8">
        <div className="w-4 h-4 bg-customblue rounded-sm" />
      </div>
      {/* Language toggle button */}
      <div
        onClick={toggleLanguage}
        className="cursor-pointer fixed bottom-4 right-4"
      >
        <img
          src={isEnglish ? "/flag2.svg" : "/flag1.svg"} // Initially show the Georgian flag
          alt="language flag"
          className="w-[30px] h-[20px]"
        />
      </div>
    </div>
  );
};

export default DoctorsSlider;
