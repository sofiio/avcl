import React from "react";
// import Statistics from "./Statistics";

// Define a functional component type
const WhyChooseUs: React.FC<{ isEnglish: boolean; toggleLanguage: () => void }> = ({ isEnglish, toggleLanguage }) => {

  // Language map for Georgian and English text
  const languageMap = {
    title: {
      georgian: "ჩვენს შესახებ",
      english: "About Us",
    },
    description: {
      georgian:
        "დეიშვილის თვალის კლინიკა თანამედროვე ტექნოლოგიებით აღჭურვილი ახალი მრავალპროფილური კლინიკაა ქუთაისში. დაარსების დღიდან ჩვენი მთავარი მიზანი პაციენტების ჯანმრთელობასა და მუდმივ განვითარებაზე ზრუნვა იყო. ლ.ადეიშვილის თვალის კლინიკა სრულყოფილ და ხარისხიან ოფთალმოლოგიურ სერვისს მრავალი წლის განმავლობაში სთავაზობდა პაციენტებს არამარტო ქუთაისის, არამედ დასავლეთ საქართველოს რეგიონალური მასშტაბით. ამ დროის განმავლობაში, პაციენტებთან მუშაობის წარმატებულმა გამოცდილებამ საფუძველი ჩაუყარა კლინიკის გაფართოების მიზანს და 2024 წლის ნოემბრიდან ადეიშვილის კლინიკა ახალ სივრცეში ვიზიტორებს მათ საჭიროებებსა და კომფორტზე მორგებულ სრულ სამედიცინო მომსახურებას სთავაზობს.",
      english:
        "Adeishvili's Eye Clinic is a new multi-profile clinic equipped with modern technology in Kutaisi. Since its establishment, our main goal has been to care for the health of patients and their constant development. The Adeishvili Eye Clinic has been offering high-quality ophthalmology services to patients not only in Kutaisi but also throughout the western regions of Georgia for many years. Over this time, successful experience in working with patients laid the foundation for the clinic's expansion plans, and since November 2024, Adeishvili Clinic offers visitors fully tailored medical services in a new space designed around their needs and comfort.",
    },
    buttonText: {
      georgian: "დაჯავშნე ვიზიტი",
      english: "Book a Visit",
    },
  };

  return (
    <>
      <div className="max-w-[1440px] mx-auto items-center " id="why-choose-us">
        <div className="xl:ml-[57px] h-[70px] sm:h-[80px] md:h-[90px] xl:h-[100px] xl:max-w-[1312px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px] xl:p-0  md:mt-[20px] flex text-center justify-center mx-auto xl:mx-0">
          <h1 className="lg:text-[25px] font-mrglovani p-6 text-[18px] sm:text-[20px] md:text-[24px] font-quinapple text-customDarkBlue">
            {isEnglish ? languageMap.title.english : languageMap.title.georgian}
          </h1>
        </div>
        <div className="2xl:max-w-[1312px] xl:max-w-[1150px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px]  lg:flex lg:flex-row flex flex-col justify-between lg:mt-[10px] xl:h-[496px] lg:h-[300px] h-[496px] mx-auto">
          <div className="xl:w-[620px] w-[250px] sm:w-[350px] lg:w-[220px] md:w-[400px] h-[496px] lg:h-[250px] xl:h-[496px] flex relative mx-auto xl:mx-0 lg:mt-4">
            <img
              src="/chvensshesakheb.png"
              alt="Adeishvili Clinic"
              className="w-full rounded-md"
            />
          </div>
          <div className="md:w-[670px] lg:w-[750px] xl:w-[670px] sm:w-[500px] w-[321px] md:h-[480px] mx-auto xl:mx-0 h-[812px] mt-4 xl:ml-4 2xl:ml-0">
            <h1 className="md:text-[16px] font-arial text-[14px] sm:text-[16px]">
              {isEnglish
                ? languageMap.description.english
                : languageMap.description.georgian}
            </h1>
            <div className="md:w-[717px] sm:w-[550px]  h-[90px] md:mt-0 sm:mt-[20px] mt-[10px] flex items-center"></div>
          </div>
        </div>
      </div>
      {/* <Statistics /> */}

      {/* Language toggle button */}
      <div onClick={toggleLanguage} className="cursor-pointer fixed bottom-4 right-4">
        <img
          src={isEnglish ? "/flag2.svg" : "/flag1.svg"} // Initially show the Georgian flag
          alt="language flag"
          className="w-[30px] h-[20px]"
        />
      </div>
    </>
  );
};

export default WhyChooseUs;
