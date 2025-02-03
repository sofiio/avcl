import React, { useState, useEffect } from "react";

// Define the props type for the Statistics component
interface StatisticsProps {
  isEnglish: boolean; // Flag to indicate language
}

interface StatisticData {
  id: number;
  attributes: {
    StatGeoText: string; // Georgian text for statistics
    StatEnglishText: string; // English text for statistics
    statisticPic: {
      data: {
        attributes: {
          url: string;
        };
      }[];
    };
  };
}

const Statistics: React.FC<StatisticsProps> = ({ isEnglish }) => {
  // State to store the fetched statistics data
  const [statistics, setStatistics] = useState<StatisticData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch statistics data from Strapi API
  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch("https://oyster-app-3zokm.ondigitalocean.app/api/statistics?populate=*");
        const data = await response.json();
        setStatistics(data.data); // Update state with the fetched data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching statistics:", error);
        setLoading(false);
      }
    };

    fetchStatistics();
  }, []);

  if (loading) return <div>Loading...</div>; // Show a loading message while data is being fetched

  return (
    <div className="bg-gray-300 xl:p-10 p-4 xl:mt-12 mt-[140px] sm:mt-40 md:mt-32 lg:mt-4 h-[400px] sm:h-[250px] xl:h-[400px] lg:h-[300px]">
      {/* Invisible Slider Section */}
      <div className="xl:mb-4 flex justify-center">
        <label className="lg:text-[25px] font-mrglovani xl:p-2 text-[16px] sm:text-[20px] md:text-[24px] font-quinapple text-customDarkBlue">
          {/* Set the title based on language */}
          {isEnglish ? "Interesting statistics" : "საინტერესო სტატისტიკა"}
        </label>
      </div>

      {/* Child Components */}
      <div className="flex flex-wrap gap-4 justify-center">
        {statistics.map((statistic) => (
          <div
            key={statistic.id}
            className="bg-customDarkBlue text-white flex-col p-4 xl:w-60 xl:h-48 w-[136px] h-[130px] lg:h-[160px] sm:w-[135px] lg:w-[160px] mt-8 flex items-center justify-center rounded-lg shadow-lg"
          >
            {/* Display the image from Strapi */}
            <img
              src={`https://oyster-app-3zokm.ondigitalocean.app${statistic.attributes.statisticPic.data[0].attributes.url}`}
              alt="Statistic Icon"
              className="md:w-8 md:h-8 w-4 h-4 sm:w-6 sm:h-6 mb-4"
            />
            {/* Display the statistics text */}
            <div className="text-[10px] lg:text-[12px] xl:text-[14px]">
              {isEnglish
                ? statistic.attributes.StatEnglishText
                : statistic.attributes.StatGeoText}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
