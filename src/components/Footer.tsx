interface FooterProps {
  mobileBgColor: "white" | "black";
  textColor: "white" | "black";
  hideFirstImageMobile: boolean;
  SecondImageMobile: boolean;
  hideLogo: boolean;
  hideSecondLogo: boolean;
  isEnglish: boolean; // Add the isEnglish prop
}

function Footer({
  textColor,
  hideLogo,
  hideSecondLogo,
  isEnglish, // Destructure isEnglish from props
}: FooterProps) {
  const logoClass = hideLogo ? "hidden" : "";
  const logoClass1 = hideSecondLogo ? "hidden" : "";

  return (
    <>
      <div
        className={`w-full xl:h-[400px] h-[670px] md:h-[550px] mx-auto bg-slate-500 md:bg-white xl:absolute mt-8 md:mt-0`}
      >
        <div className="2xl:max-w-[1312px] xl:h-[400px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px] md:p-4 2xl:p-0 mx-auto">
          <div className="h-[320px] xl:border-b xl:flex xl:flex-row xl:pt-[80px] pt-[20px]">
            <div className="2xl:w-[500px] w-[340px] md:w-[700px] sm:w-[500px] xl:h-[223px] h-[190px] md:h-[200px] space-y-4 mx-auto xl:mx-0">
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
              <h1
                className={`md:text-black font-arial text-${textColor} md:text-[16px] text-[14px]`}
              >
                {isEnglish
                  ? "Adeishvili Clinic has branches in most parts of Western Georgia (Text to be edited)"
                  : "ადეიშვილის კლინიკა დასავლეთ საქართველოს უმეტეს ნაწილში ფლობს ფილიალებს (ტექსტი დასარედაქტირებელია)"}
              </h1>
              <div className="flex space-x-4">
                <img src="/face.svg" alt="" className="w-6 h-6" />
                <img src="/insta.svg" alt="" className="w-6 h-6" />
              </div>
            </div>

            <div className="flex md:flex-row flex-col mt-0 justify-center md:justify-start xl:w-auto w-[343px] sm:w-[500px] mx-auto xl:mx-0 md:w-[700px]">
              <div className="w-[322px] font-mrglovani xl:w-[250px] 2xl:w-[322px] h-[185px] 2xl:ml-[128px] xl:ml-[80px] text-[14px] flex flex-col space-y-4">
                <div className="flex space-x-2">
                  <img src="/location.jpg" alt="" className="w-[20px]" />
                  <h1
                    className={`md:text-black font-mrglovani text-${textColor} text-[13px]`}
                  >
                    {isEnglish
                      ? "Kutaisi, Javakhishvili 91"
                      : "ქუთაისი, ჯავახიშვილის 91"}
                  </h1>
                </div>

                <div className="flex space-x-2">
                  <img src="/location.jpg" alt="" className="w-[20px]" />
                  <h1 className={`md:text-black text-${textColor} text-[13px]`}>
                    {isEnglish
                      ? "Batumi, P. Melikishvili 102B"
                      : "ბათუმი, პ.მელიქიშვილის 102 ბ"}
                  </h1>
                </div>
                <div className="flex space-x-2">
                  <img src="/location.jpg" alt="" className="w-[20px]" />
                  <h1 className={`md:text-black text-${textColor} text-[13px]`}>
                    {isEnglish
                      ? "Samtredia, Javakhishvili 10"
                      : "სამტრედია, ჯავახიშვილის 10"}
                  </h1>
                </div>
                <div className="flex space-x-2">
                  <img src="/location.jpg" alt="" className="w-[20px]" />
                  <h1 className={`md:text-black text-${textColor} text-[13px]`}>
                    {isEnglish
                      ? "Khoni, Mose Khoneli 3"
                      : "ხონი, მოსე ხონელის 3"}
                  </h1>
                </div>
                <div className="flex space-x-2">
                  <img src="/location.jpg" alt="" className="w-[20px]" />
                  <h1 className={`md:text-black text-${textColor} text-[13px]`}>
                    {isEnglish
                      ? "Tkibuli, Gamsakhurdia 51"
                      : "ტყიბული, გამსახურდიას 51"}
                  </h1>
                </div>
              </div>
              <div>
                <div className="w-[322px] font-mrglovani xl:w-[250px] 2xl:w-[322px] h-[185px] 2xl:ml-[128px] xl:ml-[80px] text-[14px] flex flex-col space-y-4">
                  <div className="flex space-x-2">
                    <img src="/location.jpg" alt="" className="w-[20px]" />
                    <h1
                      className={`md:text-black text-${textColor} text-[13px]`}
                    >
                      {isEnglish
                        ? "Vani, Solomon II 3"
                        : "ვანი, სოლომონ მეორეს 3"}
                    </h1>
                  </div>
                  <div className="flex space-x-2">
                    <img src="/location.jpg" alt="" className="w-[20px]" />
                    <h1
                      className={`md:text-black text-${textColor} text-[13px]`}
                    >
                      {isEnglish
                        ? "Lanchkhuti, G. Kvirkvelia 16"
                        : "ლანჩხუთი, გ.კვირკველიას 16"}
                    </h1>
                  </div>
                  <div className="flex space-x-2">
                    <img src="/location.jpg" alt="" className="w-[20px]" />
                    <h1
                      className={`md:text-black text-${textColor} text-[13px]`}
                    >
                      {isEnglish
                        ? "Senaki, D. Vahania N1"
                        : "სენაკი, დ.ვაჰანიას ქ N1"}
                    </h1>
                  </div>
                  <div className="flex space-x-2">
                    <img src="/location.jpg" alt="" className="w-[20px]" />
                    <h1
                      className={`md:text-black text-${textColor} text-[13px]`}
                    >
                      {isEnglish
                        ? "Zugdidi, Kitiashvili N21"
                        : "ზუგდიდი, კიტიას ქუჩა N21"}
                    </h1>
                  </div>
                  <div className="flex space-x-2">
                    <img src="/location.jpg" alt="" className="w-[20px]" />
                    <h1
                      className={`md:text-black text-${textColor} text-[13px]`}
                    >
                      {isEnglish
                        ? "Abasha, Varlam Chikovani 15"
                        : "აბაშა, ვარლამ ჩიქოვანის 15"}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[50px] hidden xl:flex justify-between mt-[32px] text-[14px] font-sans">
            <div>
              <h1 className="text-black text-[13px] font-mrglovani">
                {isEnglish
                  ? "© 2024.All rights reserved."
                  : "© 2024. ყველა უფლება დაცულია."}
              </h1>
            </div>
          </div>
        </div>
        <h1 className="text-[14px] xl:hidden mt-[300px] md:mt-[150px] flex items-center justify-center text-black">
          {isEnglish
            ? "© 2024.All rights reserved."
            : "© 2024. ყველა უფლება დაცულია."}
        </h1>
      </div>
    </>
  );
}

export default Footer;
