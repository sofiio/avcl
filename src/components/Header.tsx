import React, { useState } from "react";
import CustomButton from "./CustomButton";
import HamburgerMenu from "./HamburgerMenu";

// Define a functional component type
const Header: React.FC<{ isEnglish: boolean; toggleLanguage: () => void }> = ({ isEnglish, toggleLanguage }) => {
  const [nav, setNav] = useState<boolean>(false);

  // Language map for English and Georgian text
  const languageMap = {
    start: {
      georgian: "მთავარი",
      english: "Main",
    },
    aboutUs: {
      georgian: "ჩვენს შესახებ",
      english: "About Us",
    },
    services: {
      georgian: "სერვისები",
      english: "Services",
    },
    doctors: {
      georgian: "ექიმები",
      english: "Doctors",
    },
    contacts: {
      georgian: "კონტაქტი",
      english: "Contact Us",
    },
    buttonText: {
      georgian: "დაჯავშნე ვიზიტი",
      english: "Book a Visit",
    },
  };

  // Function to get the height of the sticky header dynamically
  const getHeaderHeight = (): number => {
    const header = document.querySelector(".z-20") as HTMLElement; // Type assertion for HTMLElement
    return header ? header.offsetHeight : 0;
  };

  // Generic scroll function to scroll to different sections
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    const headerHeight = getHeaderHeight();
    if (element) {
      window.scrollTo({
        top: element.offsetTop - headerHeight, // Subtract the header height
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="z-20 font-sans sticky top-0 w-full h-[55px] xl:h-[72px] mx-auto bg-customDarkBlue ">
      <div
        className="2xl:max-w-[1312px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px] p-4 2xl:p-0
       flex mx-auto justify-between items-center h-full"
      >
        <div>
          <img
            src="/1.png"
            alt="logo"
            className="w-[70px]  2xl:w-[150px] xl:w-[100px] cursor-pointer"
            onClick={() => scrollToSection("start")} // Scroll to start section
          />
        </div>

        <div className="hidden xl:flex items-center space-x-[32px] text-customWhite font-mrglovani font-bold 2xl:text-[16px] xl:text-[14px]">
          <div onClick={() => scrollToSection("start")}>
            <h1 className="cursor-pointer text-white hover:text-customblue ">
              {isEnglish ? languageMap.start.english : languageMap.start.georgian}
            </h1>
          </div>
          <div>
            <h1
              className="cursor-pointer text-white hover:text-customblue"
              onClick={() => scrollToSection("why-choose-us")}
            >
              {isEnglish ? languageMap.aboutUs.english : languageMap.aboutUs.georgian}
            </h1>
          </div>
          <div onClick={() => scrollToSection("services")}>
            <h1 className="cursor-pointer text-white hover:text-customblue">
              {isEnglish ? languageMap.services.english : languageMap.services.georgian}
            </h1>
          </div>
          <div onClick={() => scrollToSection("doctors")}>
            <h1 className="cursor-pointer text-white hover:text-customblue">
              {isEnglish ? languageMap.doctors.english : languageMap.doctors.georgian}
            </h1>
          </div>
          <div onClick={() => scrollToSection("contacts")}>
            <h1 className="cursor-pointer text-white hover:text-customblue">
              {isEnglish ? languageMap.contacts.english : languageMap.contacts.georgian}
            </h1>
          </div>
          <div>
            <CustomButton
              onClick={() => scrollToSection("contacts")}
              text={isEnglish ? languageMap.buttonText.english : languageMap.buttonText.georgian}
              textColor="text-blue-950"
              textSize="2xl:text-[16px] xl:text-[14px]"
              width="2xl:w-[200px] xl:w-[180px]"
              height="h-[50px]"
              marginTop="mt-0"
              backgroundColor="bg-white"
              rounded="rounded-full"
              imgHoverEffect="hover:invert"
              hoverEffect=" hover:text-white hover:border hover:border-black hover:bg-customblue"
            />
          </div>

          {/* Language toggle button */}
          <div onClick={toggleLanguage} className="cursor-pointer">
            <img
              src={isEnglish ? "/flag2.svg" : "/flag1.svg"} // Initially show the Georgian flag
              alt="language flag"
              className="w-[30px] h-[20px] 2xl:ml-4"
            />
          </div>
        </div>

        <div
          className="w-[39px] h-[39px] xl:hidden  flex items-center justify-center"
          onClick={() => setNav(true)}
        >
          <img
            src="/burg.png"
            alt="hamburger menu"
            className=" cursor-pointer w-[25px]"
          />
        </div>
      </div>
      <HamburgerMenu nav={nav} setNav={setNav} />
    </div>
  );
};

export default Header;
