import { useEffect, useState } from "react";

const images = [
  "/doctor.jpg",
  "/nurse.jpg",
  "/hospital.jpg", // Add your images here
];

function Welcome() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Change image every 3 seconds (3000 ms)
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full" id="start" style={{ height: "600px" }}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          className={`absolute w-full h-full object-cover transition-all duration-700 ease-in-out ${ // 700ms for a smoother transition
            currentIndex === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-customblue bg-opacity-75 rounded-lg p-4 -mt-16">
          <h1 className="text-customWhite xl:text-3xl text-sm sm:text-lg md:text-xl lg:text-2xl font-bold drop-shadow-lg">
            ადეიშვილის თვალის კლინიკა
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
