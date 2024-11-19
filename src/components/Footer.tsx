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
  textColor,
  // hideFirstImageMobile,
  // SecondImageMobile,
  hideLogo,
  hideSecondLogo,
}: FooterProps) {
  // const firstImageClass = hideFirstImageMobile ? "hidden" : ""; // Add the hidden class conditionally
  // const SecondImageClass = SecondImageMobile ? "hidden" : ""; // Add the hidden class conditionally
  const logoClass = hideLogo ? "hidden" : "";
  const logoClass1 = hideSecondLogo ? "hidden" : "";

  return (
    <>
      <div
        className={`w-full xl:h-[400px] h-[650px] mx-auto bg-slate-500 md:bg-white xl:absolute`}
      >
        <div className="2xl:max-w-[1312px] xl:h-[400px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px] p-4 2xl:p-0 mx-auto">
          <div className="h-[320px] xl:border-b xl:flex xl:flex-row xl:pt-[80px] pt-[20px]">
            <div className="2xl:w-[500px] w-[340px] md:w-[700px] sm:w-[500px] h-[223px] space-y-4 mx-auto xl:mx-0">
              <img
                src="/favicon.svg"
                alt=""
                className={`md:block w-[30px] sm:w-[35px] md:w-[40px] xl:w-[50px] ${logoClass}`}
              />
              <img
                src="/favicon.svg"
                alt=""
                className={`md:hidden w-[30px] sm:w-[35px] md:w-[40px] xl:w-[50px]  ${logoClass1}`}
              />
              <h1 className={`md:text-black text-${textColor} text-[16px]`}>
                ადეიშვილის კლინიკა დასავლეთ საქართველოს უმეტეს ნაწილში ფლობს
                ფილიალებს (ტექსტი დასარედაქტირებელია){" "}
              </h1>
            </div>

            <div className="flex flex-row mt-[25px] xl:mt-0 justify-center md:justify-start xl:w-auto w-[343px] sm:w-[500px] mx-auto xl:mx-0 md:w-[700px]">
              <div className="w-[322px]   xl:w-[250px] 2xl:w-[322px] h-[185px] 2xl:ml-[128px] xl:ml-[80px] font-sans text-[14px] flex flex-col space-y-4">
                {/* <div>
                  <h1 className={`mt-4 md:text-black text-${textColor}`}>
                    ჩვენი მისამართები
                  </h1>
                </div> */}
                <div className="flex">
                  <img src="/location.jpg" alt="" className="w-[20px]" />
                  <h1 className={`md:text-black text-${textColor} text-[13px]`}>
                    {" "}
                    ქუთაისი, ჯავახიშვილის 91
                  </h1>
                </div>

                <div className="flex">
                  <img src="/location.jpg" alt="" className="w-[20px]" />
                  <h1 className={`md:text-black text-${textColor} text-[13px]`}>
                    ბათუმი, პ.მელიქიშვილის 102 ბ
                  </h1>
                </div>
                <div className="flex">
                  <img src="/location.jpg" alt="" className="w-[20px]" />
                  <h1 className={`md:text-black text-${textColor} text-[13px]`}>
                    სამტრედია, ჯავახიშვილის 10
                  </h1>
                </div>
                <div className="flex">
                  <img src="/location.jpg" alt="" className="w-[20px]" />
                  <h1 className={`md:text-black text-${textColor} text-[13px]`}>
                    ხონი, მოსე ხონელის 3
                  </h1>
                </div>
                <div className="flex">
                  <img src="/location.jpg" alt="" className="w-[20px]" />
                  <h1 className={`md:text-black text-${textColor} text-[13px]`}>
                    ტყიბული, გამსახურდიას 51
                  </h1>
                </div>
              </div>
              <div>
                <div className="w-[322px]  xl:w-[250px] 2xl:w-[322px] h-[185px] 2xl:ml-[128px] xl:ml-[80px] font-sans text-[14px] flex flex-col space-y-4">
                  <div className="flex">
                    <img src="/location.jpg" alt="" className="w-[20px]" />
                    <h1
                      className={`md:text-black text-${textColor} text-[13px]`}
                    >
                      ვანი, სოლომონ მეორეს 3
                    </h1>
                  </div>
                  <div className="flex">
                    <img src="/location.jpg" alt="" className="w-[20px]" />
                    <h1
                      className={`md:text-black text-${textColor} text-[13px]`}
                    >
                      ლანჩხუთი, გ.კვირკველიას 16
                    </h1>
                  </div>
                  <div className="flex">
                    <img src="/location.jpg" alt="" className="w-[20px]" />
                    <h1
                      className={`md:text-black text-${textColor} text-[13px]`}
                    >
                      სენაკი, დ.ვაჰანიას ქ N1
                    </h1>
                  </div>
                  <div className="flex">
                    <img src="/location.jpg" alt="" className="w-[20px]" />
                    <h1
                      className={`md:text-black text-${textColor} text-[13px]`}
                    >
                      ზუგდიდი, კიტიას ქუჩა N21
                    </h1>
                  </div>
                  <div className="flex">
                    <img src="/location.jpg" alt="" className="w-[20px]" />
                    <h1
                      className={`md:text-black text-${textColor} text-[13px]`}
                    >
                      აბაშა, ვარლამ ჩიქოვანის 15
                    </h1>
                  </div>
                </div>
              </div>
              {/* <div className="w-[322px] xl:w-[250px] 2xl:w-[322px] h-[240px] space-y-4 mt-4 md:mt-0">
                <h1 className={`font-semibold md:text-black text-${textColor}`}>
                  გამოგვყევი
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
              </div> */}
            </div>
          </div>
          <div className="h-[50px] hidden xl:flex justify-between mt-[32px] text-[14px] font-sans">
            <div>
              <h1 className="text-black text-[13px]">
                © 2024.All rights reserved.
              </h1>
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
