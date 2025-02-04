import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";

// Interface for the fetched data structure
interface DoctorPic {
  data: {
    attributes: {
      url: string;
    };
  };
}

interface DoctorAttributes {
  NameGeorgian: string;
  ProfessionGeorgian: string;
  NameEnglish: string;
  ProfessionEnglish: string;
  doctorPic: DoctorPic;
}

interface Doctor {
  id: number;
  attributes: DoctorAttributes;
}

const DoctorsSlider: React.FC<{
  isEnglish: boolean;
  toggleLanguage: () => void;
}> = ({ isEnglish, toggleLanguage }) => {
  const [doctorsData, setDoctorsData] = useState<Doctor[]>([]);

  useEffect(() => {
    const fetchDoctorsData = async () => {
      try {
        const response = await axios.get("https://oyster-app-3zokm.ondigitalocean.app/api/our-doctors?populate=*");
        setDoctorsData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDoctorsData();
  }, []);

  // Slick Slider settings
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
      <h2 className="text-[18px] sm:text-[20px] md:text-[24px] text-customDarkBlue text-center  mt-2 lg:mt-0">
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
        {doctorsData.map((doctor) => (
          <div key={doctor.id} className="p-4">
            <div className="bg-customblue rounded-lg shadow-md flex flex-col items-center p-4 mx-auto max-w-xs">
              <img
                src={`https://oyster-app-3zokm.ondigitalocean.app${doctor.attributes.doctorPic.data.attributes.url}`}
                alt={doctor.attributes.NameEnglish} // Use the English name for alt
                className="w-[230px] h-48 rounded-md mb-2"
              />
              <h3 className="text-[16px] font-semibold ">
                {isEnglish
                  ? doctor.attributes.NameEnglish
                  : doctor.attributes.NameGeorgian}
              </h3>
              <p className="text-customWhite text-[13px]">
                {isEnglish
                  ? doctor.attributes.ProfessionEnglish
                  : doctor.attributes.ProfessionGeorgian}
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

