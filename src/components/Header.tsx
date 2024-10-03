import { Link, useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";

function Header() {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleAboutUsClick = () => {
    navigate("/AboutUs");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handleTheatreClick = () => {
    navigate("/Theatre");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handleMusicClick = () => {
    navigate("/Music");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handleLiteratureClick = () => {
    navigate("/Literature");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handleGalleryClick = () => {
    navigate("/Gallery");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handleHomeClick = () => {
    navigate("/");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="z-20 font-sans sticky  top-0 w-full h-[55px] xl:h-[72px] mx-auto bg-customBlue">
      <div
        className="2xl:max-w-[1312px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px] p-4 2xl:p-0
       flex mx-auto justify-between items-center h-full"
      >
        <Link to="/">
          <img src="/log1.svg" alt="" onClick={handleHomeClick} />
        </Link>

        <div className="hidden xl:flex items-center space-x-[32px] text-gray-600  font-bold text-[16px]">
          <Link to="/">
            <h1 onClick={handleHomeClick} className="cursor-pointer hover:text-white">
              მთავარი
            </h1>
          </Link>
          <Link to="/AboutUs">
            <h1 onClick={handleAboutUsClick} className="cursor-pointer hover:text-white">
              ჩვენს შესახებ
            </h1>
          </Link>
          <Link to="/Theatre">
            <h1 onClick={handleTheatreClick} className="cursor-pointer hover:text-white">
              სერვისები
            </h1>
          </Link>
          <Link to="/Music">
            <h1 onClick={handleMusicClick} className="cursor-pointer hover:text-white">
              ექიმები
            </h1>
          </Link>
          <Link to="/Literature">
            <h1 onClick={handleLiteratureClick} className="cursor-pointer hover:text-white">
              გალერეა
            </h1>
          </Link>
          <Link to="/Gallery">
            <h1 onClick={handleGalleryClick} className="cursor-pointer hover:text-white">
              კონტაქტი
            </h1>
          </Link>
          <Link to="/AboutUs">
            <CustomButton
              text="დაჯავშნა"
              textColor="text-black"
              width="w-[150px]"
              height="h-[50px]"
              marginTop="mt-0"
              backgroundColor="bg-white"
              onClick={handleAboutUsClick}
              rounded="rounded-full"
              imgHoverEffect="hover:invert"
              hoverEffect="hover:bg-customgrey  hover:text-black hover:border hover:border-black"
            />
          </Link>
        </div>
        <div
          className="w-[39px] h-[39px] block xl:hidden"
          onClick={() => setNav(true)}
        >
          <img src="/burger.svg" alt="" className=" cursor-pointer" />
        </div>
      </div>
      <HamburgerMenu nav={nav} setNav={setNav} />
    </div>
  );
}

export default Header;
