function Statistics() {
  return (
    <div className="w-full">
      <div className="2xl:max-w-[1312px] lg:max-w-[1280px] md:max-w-[1024px] mt-[100px] max-w-[640px] sm:max-w-[768px] p-4  mx-auto xl:h-[500px] h-[789px] flex flex-col items-center ">
        <h1 className="text-black font-black xl:font-normal md:text-[64px] text-[32px] sm:text-[40px] font-quinapple">
          სტატისტიკა
        </h1>
        <div className="xl:flex xl:flex-row  flex flex-col h-[400px] mt-[70px]">
          <div className="items-center text-center mt-[44px] xl:mt-0">
            <img src="/stat1.jpg" alt="" />
          </div>
          <div className="xl:ml-[112px] items-center text-center mt-[44px] xl:mt-0">
            <img src="/stat2.jpg" alt="" />
          </div>
          <div className="xl:ml-[112px] items-center text-center mt-[44px] xl:mt-0">
            <img src="/stat2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
