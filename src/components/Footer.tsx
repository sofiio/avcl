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
            <div className="2xl:w-[500px] w-[330px] p-2 sm:p-0 md:w-[700px] sm:w-[500px] xl:h-[223px] h-[190px] md:h-[200px] space-y-4 mx-auto xl:mx-0">
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
                  ? "Adeishvili Clinic has branches in most parts of Western Georgia"
                  : "ადეიშვილის კლინიკა დასავლეთ საქართველოს უმეტეს ნაწილშია წარმოდგენილი"}
              </h1>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/1F8c9KgoMH/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/face.svg" alt="Facebook" className="w-6 h-6" />
                </a>
                <a
                  href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fl.adeishvilieyeclinic%2F%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR3DTmSqQXA8Wy6FqJ0KpHdPsGbxpxY31CoLorASX2EfJb77PRs4S7DJbxk_aem_l_--bH2B3AZLTBdESCRsuA&h=AT2xnN9FurwpTEHxwsO_cprmKW8l_UVPEkQRmLMBCFQvg1iFh_O0hUYzZ8ZS2JxBYqJ19A4HPPcB7oMXqklYNWeFJOag-DK0IyA8HWf79gKvnaZBpenzs0pc1N2bZxkzO_GRE9LLKKF3_QYRCnjFyg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/insta.svg" alt="Instagram" className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="flex md:flex-row flex-col mt-0 justify-center md:justify-start xl:w-auto w-[343px] sm:w-[500px] mx-auto xl:mx-0 md:w-[700px]">
              <div className="w-[322px] p-2 sm:p-0  xl:w-[250px] 2xl:w-[322px] h-[185px] 2xl:ml-[128px] xl:ml-[80px] text-[14px] flex flex-col space-y-4">
                <div className="flex space-x-2">
                  <img src="/location.png" alt="" className="w-[20px]" />
                  <h1
                    className={`md:text-black text-${textColor} text-[13px] font-arial`}
                  >
                    {isEnglish
                      ? "Kutaisi, Javakhishvili 91"
                      : "ქუთაისი, ჯავახიშვილის 91"}
                  </h1>
                </div>

                <div className="flex space-x-2">
                  <img src="/location.png" alt="" className="w-[20px]" />
                  <h1 className={`md:text-black text-${textColor} text-[13px] font-arial`}>
                    {isEnglish
                      ? "Batumi, P. Melikishvili 102B"
                      : "ბათუმი, პ.მელიქიშვილის 102 ბ"}
                  </h1>
                </div>
                <div className="flex space-x-2">
                  <img src="/location.png" alt="" className="w-[20px]" />
                  <h1 className={`md:text-black text-${textColor} text-[13px] font-arial`}>
                    {isEnglish
                      ? "Samtredia, Javakhishvili 10"
                      : "სამტრედია, ჯავახიშვილის 10"}
                  </h1>
                </div>
                <div className="flex space-x-2">
                  <img src="/location.png" alt="" className="w-[20px]" />
                  <h1 className={`md:text-black text-${textColor} text-[13px] font-arial`}>
                    {isEnglish
                      ? "Khoni, Mose Khoneli 3"
                      : "ხონი, მოსე ხონელის 3"}
                  </h1>
                </div>
                <div className="flex space-x-2">
                  <img src="/location.png" alt="" className="w-[20px]" />
                  <h1 className={`md:text-black text-${textColor} text-[13px] font-arial`}>
                    {isEnglish
                      ? "Tkibuli, Gamsakhurdia 51"
                      : "ტყიბული, გამსახურდიას 51"}
                  </h1>
                </div>
              </div>
              <div>
                <div className="w-[322px] p-2 sm:p-0 xl:w-[250px] 2xl:w-[322px] h-[185px] 2xl:ml-[128px] xl:ml-[80px] text-[14px] flex flex-col space-y-4">
                  <div className="flex space-x-2">
                    <img src="/location.png" alt="" className="w-[20px]" />
                    <h1
                      className={`md:text-black text-${textColor} text-[13px] font-arial`}
                    >
                      {isEnglish
                        ? "Vani, Solomon II 3"
                        : "ვანი, სოლომონ მეორეს 3"}
                    </h1>
                  </div>
                  <div className="flex space-x-2">
                    <img src="/location.png" alt="" className="w-[20px]" />
                    <h1
                      className={`md:text-black text-${textColor} text-[13px] font-arial`}
                    >
                      {isEnglish
                        ? "Lanchkhuti, G. Kvirkvelia 16"
                        : "ლანჩხუთი, გ.კვირკველიას 16"}
                    </h1>
                  </div>
                  <div className="flex space-x-2">
                    <img src="/location.png" alt="" className="w-[20px]" />
                    <h1
                      className={`md:text-black text-${textColor} text-[13px] font-arial`}
                    >
                      {isEnglish
                        ? "Senaki, D. Vahania N1"
                        : "სენაკი, დ.ვაჰანიას ქ N1"}
                    </h1>
                  </div>
                  <div className="flex space-x-2">
                    <img src="/location.png" alt="" className="w-[20px]" />
                    <h1
                      className={`md:text-black text-${textColor} text-[13px] font-arial`}
                    >
                      {isEnglish
                        ? "Zugdidi, Kitiashvili N21"
                        : "ზუგდიდი, კიტიას ქუჩა N21"}
                    </h1>
                  </div>
                  <div className="flex space-x-2">
                    <img src="/location.png" alt="" className="w-[20px]" />
                    <h1
                      className={`md:text-black text-${textColor} text-[13px] font-arial`}
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
          <div className="h-[50px] hidden xl:flex justify-between mt-[32px] text-[14px] ">
            <div>
              <h1 className="text-black text-[13px] font-arial">
                {isEnglish
                  ? "© 2024.All rights reserved."
                  : "© 2024. ყველა უფლება დაცულია."}
              </h1>
            </div>
          </div>
        </div>
        <h1 className="text-[14px] font-arial xl:hidden mt-[300px] md:mt-[150px] flex items-center justify-center text-white md:text-black">
          {isEnglish
            ? "© 2024.All rights reserved."
            : "© 2024. ყველა უფლება დაცულია."}
        </h1>
      </div>
    </>
  );
}

export default Footer;
