import Statistics from "./Statistics";

function WhyChooseUs() {
  return (
    <div className="max-w-[1440px] mx-auto items-center " id="why-choose-us">
      <div className="2xl:ml-[57px] h-[70px] sm:h-[100px] md:h-[150px] xl:h-[160px] 2xl:h-[100px] 2xl:max-w-[1312px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px] xl:p-4 2xl:p-0 mt-4 md:mt-[40px] lg:mt-[87px] flex text-center justify-center mx-auto 2xl:mx-0">
        <h1 className="xl:text-[45px] p-6 text-[24px] sm:text-[40px] md:text-[64px] font-quinapple text-customDarkBlue">
          ჩვენს შესახებ
        </h1>
      </div>
      <div className="2xl:max-w-[1312px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px] p-4 2xl:p-0 xl:flex xl:flex-row flex flex-col justify-between lg:mt-[66px] md:mt-[80px] sm:mt-[40px] h-[496px] mx-auto">
        <div className="xl:w-[548px] w-[326px] h-[496px] flex relative mx-auto 2xl:mx-0 mt-8 sm:mt-4 md:mt-0 ">
          <Statistics/>
        </div>
        <div className="md:w-[640px] sm:w-[500px] w-[321px] md:h-[480px] mx-auto md:mx-0 h-[812px] lg:ml-[68px] mt-36 md:mt-0 ">
          <h1 className="md:text-[20px] text-[18px] sm:text-[20px]">
            ადეიშვილის თვალის კლინიკა თანამედროვე ტექნოლოგიებით აღჭურვილი ახალი
            მრავალპროფილური კლინიკაა ქუთაისში. დაარსების დღიდან ჩვენი მთავარი
            მიზანი პაციენტების ჯანმრთელობასა და მუდმივ განვითარებაზე ზრუნვა იყო.
            ლ.ადეიშვილის თვალის კლინიკა სრულყოფილ და ხარისხიან ოფთალმოლოგიურ
            სერვისს მრავალი წლის განმავლობაში სთავაზობდა პაციენტებს არამარტო
            ქუთაისის, არამედ დასავლეთ საქართველოს რეგიონალური მასშტაბით. ამ
            დროის განმავლობაში, პაციენტებთან მუშაობის წარმატებულმა გამოცდილებამ
            საფუძველი ჩაუყარა კლინიკის გაფართოების მიზანს და 2024 წლის
            ნოემბრიდან ადეიშვილის კლინიკა ახალ სივრცეში ვიზიტორებს მათ
            საჭიროებებსა და კომფორტზე მორგებულ სრულ სამედიცინო მომსახურებას
            სთავაზობს.
          </h1>

          <div className="md:w-[717px] sm:w-[550px] w-[400px] h-[90px] md:mt-0 sm:mt-[20px] mt-[10px] flex items-center"></div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
