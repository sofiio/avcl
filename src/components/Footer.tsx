// import { useNavigate } from "react-router-dom";

interface FooterProps {
  mobileBgColor: "white" | "black";
  textColor: "white" | "black";
  hideFirstImageMobile: boolean;
  SecondImageMobile: boolean;
  hideLogo: boolean;
  hideSecondLogo: boolean;
}

function Footer({
  mobileBgColor,
  textColor,
  hideFirstImageMobile,
  SecondImageMobile,
  hideLogo,
  hideSecondLogo,
}: FooterProps) {
  const firstImageClass = hideFirstImageMobile ? "hidden" : ""; // Add the hidden class conditionally
  const SecondImageClass = SecondImageMobile ? "hidden" : ""; // Add the hidden class conditionally
  const logoClass = hideLogo ? "hidden" : "";
  const logoClass1 = hideSecondLogo ? "hidden" : "";

  // გვერდი დასაწყისიდან რომ ჩაიტვირთოს და არა შუიდან ან ქვემოდან
  // const navigate = useNavigate();
  // const handleAboutUsClick = () => {
  //   navigate("/AboutUs");
  //   window.scrollTo(0, 0); // Scroll to the top of the page
  // };
  // const handleMusicClick = () => {
  //   navigate("/Music");
  //   window.scrollTo(0, 0); // Scroll to the top of the page
  // };

  // const handleLiteratureClick = () => {
  //   navigate("/Literature");
  //   window.scrollTo(0, 0); // Scroll to the top of the page
  // };

  // const handleTheatreClick = () => {
  //   navigate("/Theatre");
  //   window.scrollTo(0, 0); // Scroll to the top of the page
  // };
  // const handleContactUsClick = () => {
  //   navigate("/ContactUs");
  //   window.scrollTo(0, 0); // Scroll to the top of the page
  // };

  // const handlePrivacyPolicyClick = () => {
  //   navigate("/PrivacyPolicy");
  //   window.scrollTo(0, 0); // Scroll to the top of the page
  // };

  return (
    <>
      <div
        className={`w-full xl:h-[542px] h-[650px] mx-auto bg-${mobileBgColor} md:bg-white xl:absolute`}
      >
        <div className="2xl:max-w-[1312px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px] p-4 2xl:p-0 mx-auto">
          <div className="h-[408px] xl:border-b xl:flex xl:flex-row xl:pt-[80px] pt-[20px] md:pt-[200px]">
            <div className="2xl:w-[500px] w-[340px] md:w-[700px] sm:w-[500px] h-[223px] space-y-4 mx-auto xl:mx-0">
              <img
                src="/4.png"
                alt=""
                className={`md:block w-[30px] sm:w-[35px] md:w-[40px] xl:w-[50px] ${logoClass}`}
              />
              <img
                src="/4.png"
                alt=""
                className={`md:hidden w-[30px] sm:w-[35px] md:w-[40px] xl:w-[50px]  ${logoClass1}`}
              />
              <h1 className={`md:text-black text-${textColor}`}>
                Are you ready to embark on a journey through the history of
                theater, literature, and music? Join Us Today!{" "}
              </h1>
              <h1 className={`text-[12px] md:text-black text-${textColor}`}>
                By subscribing you agree to with our{" "}
                <div>
                  <span
                    // onClick={handlePrivacyPolicyClick}
                    className={`underline cursor-pointer md:text-black text-${textColor}`}
                  >
                    Privacy Policy
                  </span>{" "}
                </div>
                and provide consent to receive updates from our company.
              </h1>
            </div>

            <div className="flex flex-row mt-[25px] xl:mt-0 justify-center md:justify-start xl:w-auto w-[343px] sm:w-[500px] mx-auto xl:mx-0 md:w-[700px]">
              <div className="w-[322px] xl:w-[250px] 2xl:w-[322px] h-[185px] 2xl:ml-[128px] xl:ml-[80px] font-sans text-[14px] flex flex-col space-y-4">
                <div>
                  <h1
                    // onClick={handleAboutUsClick}
                    className={`mt-4 md:text-black text-${textColor}`}
                  >
                    About Us
                  </h1>
                </div>
                <div>
                  <h1
                    // onClick={handleMusicClick}
                    className={`md:text-black text-${textColor}`}
                  >
                    Music
                  </h1>
                </div>
                <div>
                  <h1
                    // onClick={handleLiteratureClick}
                    className={`md:text-black text-${textColor}`}
                  >
                    Literature
                  </h1>
                </div>
                <div>
                  <h1
                    // onClick={handleTheatreClick}
                    className={`md:text-black text-${textColor}`}
                  >
                    Theatre
                  </h1>
                </div>
                <div>
                  <h1
                    // onClick={handleContactUsClick}
                    className={`md:text-black text-${textColor}`}
                  >
                    Contact Us
                  </h1>
                </div>
                <h1 className="text-gray-500 ">VIIleson@gmail.com</h1>
              </div>
              <div className="w-[322px] xl:w-[250px] 2xl:w-[322px] h-[240px] space-y-4 mt-4 md:mt-0">
                <h1 className={`font-semibold md:text-black text-${textColor}`}>
                  Follow Us
                </h1>
                <div className="flex space-x-2 cursor-pointer">
                  <img
                    src="/facebook.svg"
                    alt=""
                    className={`${firstImageClass} md:block`}
                  />
                  <img
                    src="/wfacebook.svg"
                    alt=""
                    className={`${SecondImageClass} md:hidden`}
                  />
                  <h1 className={`text-[14px] md:text-black text-${textColor}`}>
                    Facebook
                  </h1>
                </div>
                <div className="flex space-x-2 cursor-pointer">
                  <img
                    src="/instagram.svg"
                    alt=""
                    className={`${firstImageClass} md:block`}
                  />
                  <img
                    src="/winstagram.svg"
                    alt=""
                    className={`${SecondImageClass} md:hidden`}
                  />
                  <h1 className={`text-[14px] md:text-black text-${textColor}`}>
                    Instagram
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[130px] hidden xl:flex justify-between mt-[32px] text-[14px] font-sans">
            <div>
              <h1 className="text-black">© 2024.All rights reserved.</h1>
            </div>
            <div className="flex space-x-4">
              <div>
                <h1
                  // onClick={handlePrivacyPolicyClick}
                  className="underline cursor-pointer text-black"
                >
                  Privacy Policy
                </h1>
              </div>
              <div>
                <h1
                  // onClick={handlePrivacyPolicyClick}
                  className="underline cursor-pointer text-black"
                >
                  Terms of Service
                </h1>
              </div>
              <div>
                <h1
                  // onClick={handlePrivacyPolicyClick}
                  className="underline cursor-pointer text-black"
                >
                  Cookies Settings
                </h1>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-[14px] xl:hidden mt-[150px] flex items-center justify-center text-black">
          © 2024.All rights reserved.
        </h1>
      </div>
    </>
  );
}

export default Footer;
