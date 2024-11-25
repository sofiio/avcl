interface MapProps {
  isEnglish: boolean; // Add isEnglish prop for language toggle
}

function Map({ isEnglish }: MapProps) {
  // Define the base Google Maps iframe URL with placeholders for the language
  const mapUrl = isEnglish
    ? "https://www.google.com/maps/embed/v1/place?q=ლ.ადეიშვილის+თვალის+კლინიკა,+4+Bukhaidze+Street,+Kutaisi+4600&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&language=en"
    : "https://www.google.com/maps/embed/v1/place?q=ლ.ადეიშვილის+თვალის+კლინიკა,+4+Bukhaidze+Street,+Kutaisi+4600&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&language=ka";

  return (
    <div className="w-full md:h-[500px] h-[320px]">
      <iframe
        className="w-full md:h-[500px] h-[320px]"
        src={mapUrl}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Map;
