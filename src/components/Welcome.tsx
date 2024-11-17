import { useEffect, useState } from "react";

const images = [
  "/doctor.jpg",
  "/nurse.jpg",
  "/hospital.jpg", // Add your images here
];

function Welcome() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full" id="start" style={{ height: "600px" }}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          className={`absolute w-full h-full object-cover transition-all duration-1000 ease-in-out ${
            currentIndex === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-75 rounded-lg p-4 -mt-16"> {/* Adjusted to negative margin-top */}
          <h1 className="text-gray-600 xl:text-3xl text-sm sm:text-lg md:text-xl lg:text-2xl font-bold drop-shadow-lg">
            ადეიშვილის თვალის კლინიკა
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
