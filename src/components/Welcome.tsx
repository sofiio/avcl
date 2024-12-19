// import { useEffect, useState } from "react";

// const images = [
//   "/sliderbanner1.png",
//   "/sliderbanner2.png",
 
// ];

// function Welcome() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     // Change image every 3 seconds (3000 ms)
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 4000); // Change image every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-[130px] sm:h-[200px] md:h-[300px] lg:h-[400px] 2xl:h-[600px]" id="start">
//       {images.map((src, index) => (
//         <img
//           key={index}
//           src={src}
//           alt=""
//           className={`absolute w-full h-full object-cover transition-all duration-700 ease-in-out ${ // 700ms for a smoother transition
//             currentIndex === index
//               ? "opacity-100 scale-100"
//               : "opacity-0 scale-95"
//           }`}
//         />
//       ))}
//     </div>
//   );
// }

// export default Welcome;

import { useEffect, useState } from "react";

// Define the type for the banner data structure
interface Banner {
  id: number;
  attributes: {
    bannerPic: {
      data: Array<{
        attributes: {
          url: string; // URL for the image
        };
      }>;
    };
  };
}

const STRAPI_URL = "http://localhost:1337/api/banners?populate=*"; // Strapi API URL

function Welcome() {
  const [images, setImages] = useState<string[]>([]); // Array of image URLs
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Current image index
  const [loading, setLoading] = useState<boolean>(true); // To track the loading state
  const [error, setError] = useState<string | null>(null); // To track any errors

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(STRAPI_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data: { data: Banner[] } = await response.json(); // Define the response structure

        if (data?.data?.length > 0) {
          // Extract all images from each banner
          const bannerImages: string[] = data.data.flatMap((banner) => 
            banner.attributes.bannerPic.data.map(image => 
              `http://localhost:1337${image.attributes.url}` // Construct the full URL
            )
          );

          console.log("Fetched images:", bannerImages); // Log the images to verify
          setImages(bannerImages);
          setLoading(false); // Set loading to false once the images are loaded
        } else {
          setError("No banners found.");
          setLoading(false);
        }
      } catch (err) {
        console.error("Error fetching images:", err);
        setError("Error fetching images.");
        setLoading(false);
      }
    };

    fetchImages();

    // Change image every 4 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="relative w-full h-[130px]sm:h-[200px] md:h-[300px] lg:h-[400px] 2xl:h-[600px]" id="start">
      {images.length > 0 ? (
        images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Banner ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-all duration-700 ease-in-out ${
              currentIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          />
        ))
      ) : (
        <div>No images available</div>
      )}
    </div>
  );
}

export default Welcome;

