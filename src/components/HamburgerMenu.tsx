import React from "react";

interface HamburgerMenuProps {
  nav: boolean;
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
  isEnglish: boolean;
  toggleLanguage: () => void;
}

const scrollToSection = (id: string): void => {
  const element = document.getElementById(id);
  const header = document.querySelector(".z-20") as HTMLElement;
  const headerHeight = header ? header.offsetHeight : 0;
  if (element) {
    window.scrollTo({
      top: element.offsetTop - headerHeight,
      behavior: "smooth",
    });
  }
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  nav,
  setNav,
  isEnglish,
  toggleLanguage,
}) => {
  return (
    <>
      {/* Overlay when the menu is open */}
      <div
        className={
          nav
            ? "bg-black/80 fixed w-full h-screen z-10 top-0 left-0 transition-all duration-300"
            : ""
        }
      ></div>

      {/* Menu itself */}
      <div
        className={
          nav
            ? "bg-white fixed top-0 left-0 pl-4 w-[250px] md:w-[300px] lg:w-[400px] h-screen z-10 transition-all duration-300"
            : "bg-white fixed top-0 left-[-100%] h-screen z-10"
        }
      >
        <div className="mx-auto flex justify-between items-center pt-4">
          <div onClick={toggleLanguage} className="cursor-pointer">
            <img
              src={isEnglish ? "/flag2.svg" : "/flag1.svg"} // Conditional rendering of flags
              alt="language flag"
              className="w-[30px] h-[20px] 2xl:ml-4"
            />
          </div>

          <img
            src="/closing.svg"
            alt="close menu"
            onClick={() => setNav(!nav)}
            className="right-4 cursor-pointer absolute duration-300 w-[30px]"
          />
        </div>

        <nav>
          <div className="flex flex-col p-4 mt-8 space-y-8 font-mrglovani text-[16px]">
            <div>
              <h1
                className="cursor-pointer hover:text-customblue"
                onClick={() => scrollToSection("start")}
              >
                {isEnglish ? "Home" : "მთავარი"}
              </h1>
            </div>
            <div>
              <h1
                className="cursor-pointer hover:text-customblue"
                onClick={() => scrollToSection("why-choose-us")}
              >
                {isEnglish ? "About Us" : "ჩვენს შესახებ"}
              </h1>
            </div>
            <div>
              <h1
                className="cursor-pointer hover:text-customblue"
                onClick={() => scrollToSection("services")}
              >
                {isEnglish ? "Services" : "სერვისები"}
              </h1>
            </div>
            <div>
              <h1
                className="cursor-pointer hover:text-customblue"
                onClick={() => scrollToSection("doctors")}
              >
                {isEnglish ? "Doctors" : "ექიმები"}
              </h1>
            </div>
            <div>
              <h1
                className="cursor-pointer hover:text-customblue"
                onClick={() => scrollToSection("contacts")}
              >
                {isEnglish ? "Contact" : "კონტაქტი"}
              </h1>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HamburgerMenu;
