import React, { useState } from "react";
import CustomButton from "./CustomButton";
import HamburgerMenu from "./HamburgerMenu";

// Define a functional component type
const Header: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);

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
    <div className="z-20 font-sans sticky top-0 w-full h-[55px] xl:h-[72px] mx-auto bg-blue-200">
      <div
        className="2xl:max-w-[1312px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px] p-4 2xl:p-0
       flex mx-auto justify-between items-center h-full"
      >
        <div>
          <img
            src="/4.png"
            alt="logo"
            className="w-[30px] sm:w-[35px] md:w-[40px] xl:w-[50px] cursor-pointer"
            onClick={() => scrollToSection("start")} // Scroll to start section
          />
        </div>

        <div className="hidden xl:flex items-center space-x-[32px] text-blue-950 font-bold text-[16px]">
          <div onClick={() => scrollToSection("start")}>
            <h1 className="cursor-pointer hover:text-white">მთავარი</h1>
          </div>
          <div>
            <h1
              className="cursor-pointer hover:text-white"
              onClick={() => scrollToSection("why-choose-us")}
            >
              ჩვენს შესახებ
            </h1>
          </div>
          <div onClick={() => scrollToSection("services")}>
            <h1 className="cursor-pointer hover:text-white">სერვისები</h1>
          </div>
          <div onClick={() => scrollToSection("doctors")}>
            <h1 className="cursor-pointer hover:text-white">ექიმები</h1>
          </div>
          <div onClick={() => scrollToSection("statistics")}>
            <h1 className="cursor-pointer hover:text-white">სტატისტიკა</h1>
          </div>
          <div onClick={() => scrollToSection("contacts")}>
            <h1 className="cursor-pointer hover:text-white">კონტაქტი</h1>
          </div>
          <div>
            <CustomButton
              onClick={() => scrollToSection("contacts")}
              text="დაჯავშნა"
              textColor="text-blue-950"
              width="w-[150px]"
              height="h-[50px]"
              marginTop="mt-0"
              backgroundColor="bg-white"
              rounded="rounded-full"
              imgHoverEffect="hover:invert"
              hoverEffect="hover:bg-customgrey  hover:text-black hover:border hover:border-black"
            />
          </div>
        </div>

        <div
          className="w-[39px] h-[39px] block xl:hidden"
          onClick={() => setNav(true)}
        >
          <img src="/burgermenu.png" alt="hamburger menu" className=" cursor-pointer" />
        </div>
      </div>
      <HamburgerMenu nav={nav} setNav={setNav} />
    </div>
  );
};

export default Header;
