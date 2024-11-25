import React, { useState } from "react";

// Define an interface for the component props
interface HamburgerMenuProps {
  nav: boolean;
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
}

// Generic scroll function to scroll to different sections
const scrollToSection = (id: string): void => {
  console.log(`Scrolling to section: ${id}`); // Added log to check if the function is triggered
  const element = document.getElementById(id);

  const getHeaderHeight = (): number => {
    const header = document.querySelector(".z-20") as HTMLElement; // Type assertion for HTMLElement
    return header ? header.offsetHeight : 0;
  };

  const headerHeight = getHeaderHeight();
  if (element) {
    window.scrollTo({
      top: element.offsetTop - headerHeight, // Subtract the header height
      behavior: "smooth",
    });
  }
};

// Use the interface as the type for the props
const HamburgerMenu: React.FC<HamburgerMenuProps> = (props) => {
  const [isEnglish, setIsEnglish] = useState<boolean>(true); // State to toggle the flag

  // Function to toggle language flag
  const toggleLanguage = () => {
    setIsEnglish(!isEnglish); // Toggle between English and Georgian flags
  };
  return (
    <>
      <div
        className={
          props.nav ? "bg-black/80 fixed w-full h-screen z-10 top-0 left-0" : ``
        }
      ></div>

      <div
        className={
          props.nav
            ? "bg-white fixed top-0 left-0 pl-4 w-[250px] md:w-[300px] lg:w-[400px] h-screen z-10 "
            : "bg-white fixed top-0 left-[-100%]  h-screen z-10 "
        }
      >
        <div className="mx-auto flex justify-between items-center pt-4">
          {/* <div>
            <img
              src="/4.png"
              alt=""
              className=" cursor-pointer w-[25px] mx-4"
            />
          </div> */}
          {/* Language toggle button */}
          <div onClick={toggleLanguage} className="cursor-pointer">
            <img
              src={isEnglish ? "/flag1.svg" : "/flag2.svg"} // Conditional rendering of flags
              alt="language flag"
              className="w-[30px] h-[20px] 2xl:ml-4"
            />
          </div>

          <img
            src="/closing.svg"
            alt=""
            onClick={() => props.setNav(!props.nav)}
            className="right-4 cursor-pointer absolute duration-300 w-[30px]"
          />
        </div>

        <nav>
          <div className="flex flex-col p-4 mt-8 space-y-8 font-arial text-[16px]">
            <div>
              <h1
                className=" cursor-pointer hover:text-customblue"
                onClick={() => scrollToSection("start")}
              >
                მთავარი
              </h1>
            </div>
            <div>
              <h1
                className=" cursor-pointer hover:text-customblue"
                onClick={() => scrollToSection("why-choose-us")}
              >
                ჩვენს შესახებ
              </h1>
            </div>
            <div>
              <h1
                className=" cursor-pointer hover:text-customblue"
                onClick={() => scrollToSection("services")}
              >
                სერვისები
              </h1>
            </div>
            <div>
              <h1
                className=" cursor-pointer hover:text-customblue"
                onClick={() => scrollToSection("doctors")}
              >
                ექიმები
              </h1>
            </div>
            <div>
              <h1
                className=" cursor-pointer hover:text-customblue"
                onClick={() => scrollToSection("contacts")}
              >
                კონტაქტი
              </h1>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HamburgerMenu;
