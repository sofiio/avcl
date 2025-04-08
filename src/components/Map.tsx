interface MapProps {
  isEnglish: boolean; // Add isEnglish prop for language toggle
}

function Map({ isEnglish }: MapProps) {
  // Define the base Google Maps iframe URL with placeholders for the language
  const mapUrl = isEnglish
    ? "https://maps.app.goo.gl/c57GNxhZW67AYsbd8"
    : "https://maps.app.goo.gl/c57GNxhZW67AYsbd8";

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
