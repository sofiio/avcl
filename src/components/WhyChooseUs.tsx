function WhyChooseUs() {
  return (
    <div className="max-w-[1440px] mx-auto items-center">
      <div className="2xl:ml-[57px] xl:h-[115px] h-[70px] 2xl:max-w-[1312px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px] p-4 2xl:p-0 mt-[87px] md:mt-[40px] lg:mt-[87px] flex text-center justify-center mx-auto 2xl:mx-0">
        <h1 className="xl:text-[56px] text-[24px] sm:text-[40px] md:text-[64px] font-quinapple text-black font-black xl:font-normal">
          რატომ ჩვენ?
        </h1>
      </div>
      <div className="2xl:max-w-[1312px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px] p-4 2xl:p-0 xl:flex xl:flex-row flex flex-col lg:mt-[66px] md:mt-[80px] sm:mt-[40px] h-[496px] mx-auto">
        <div className="xl:w-[548px] w-[326px] h-[496px] flex relative mx-auto 2xl:mx-0">
          <img
            src="/doctor1.jpg"
            alt=""
            className=" rounded-full 2xl:w-[372px] xl:w-[350px] xl:h-[350px] 2xl:h-[372px] w-[233px] h-[233px]"
          />
          <img
            src="/doctor2.jpg"
            alt=""
            className="rounded-full xl:mt-[147px] mt-[94px] xl:ml-[197px] ml-[124px] 2xl:w-[351px] xl:w-[300px] xl:h-[300px] 2xl:h-[349px] w-[210px] h-[210px] absolute top-0 left-0"
          />
        </div>
        <div className="md:w-[717px] sm:w-[500px] w-[321px] md:h-[480px] mx-auto md:mx-0 h-[812px] lg:ml-[68px] mt-36 md:mt-0 ">
          <div className="md:w-[717px] sm:w-[500px] w-[326px] h-[90px] flex items-center md:mt-28 xl:mt-0">
            <div>
              <img src="/frame.svg" alt="" className="m-auto" />
            </div>
            <div className="ml-[24px] md:w-[605px] sm:w-[500px] w-[232px] h-[90px]">
              <h1 className="text-[24px] font-black text-black font-quinapple">
                კვალიფიციური ექიმები
              </h1>
              <h1 className="text-[16px] font-custom2 text-black mt-[8px] opacity-75">
                ჩვენი ექიმები გამოირჩევიან მრავალწლიანი
                გამოცდილებით/კვალიფიკაციით
              </h1>
            </div>
          </div>
          <div className="md:w-[717px] sm:w-[500px] w-[326px] h-[90px] md:mt-[40px] sm:mt-[60px] mt-[140px] flex items-center">
            <div>
              <img src="/frame.svg" alt="" className="m-auto" />
            </div>
            <div className="ml-[24px] md:w-[605px] sm:w-[500px] w-[232px] h-[90px]">
              <h1 className="text-[24px] font-black text-black font-quinapple">
                24 საათიანი სერვისი
              </h1>
              <h1 className="text-[16px] font-custom2 text-black mt-[8px] opacity-75">
                კლინიკა გთავაზობთ სადღეღამისო მომსახურებას გადაუდებელ სერვისებზე
              </h1>
            </div>
          </div>
          <div className="md:w-[717px] sm:w-[500px] w-[326px] h-[90px] md:mt-[40px] sm:mt-[60px] mt-[170px] flex items-center">
            <div>
              <img src="/frame.svg" alt="" className="m-auto" />
            </div>
            <div className="ml-[24px] md:w-[605px] sm:w-[500px] w-[232px] h-[90px]">
              <h1 className="text-[24px] font-black text-black font-quinapple">
                სასწრაფო/გადაუდებელი მომსახურება
              </h1>
              <h1 className="text-[16px] font-custom2  text-black mt-[8px] opacity-75">
                კლინიკაში შესაძლებელია გადაუდებელი სამედიცინო სერვისებით
                სარგებლობა
              </h1>
            </div>
          </div>
          <div className="md:w-[717px] w-[326px] sm:w-[500px] h-[90px] md:mt-[40px] sm:mt-[60px] mt-[140px] flex items-center">
            <div>
              <img src="/frame.svg" alt="" className="m-auto" />
            </div>
            <div className="ml-[24px] md:w-[605px] sm:w-[500px] w-[232px] h-[90px]">
              <h1 className="text-[24px] font-black text-black font-quinapple">
                მრავალფპროფილურობა
              </h1>
              <h1 className="text-[16px] font-custom2 text-black mt-[8px] opacity-75">
                ჩვენი კლინიკა გთავაზობთ მრავალპროფილურ სამედიცინო სერვისებს
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
