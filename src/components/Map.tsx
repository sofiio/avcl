interface MapProps {
  isEnglish: boolean; // Add isEnglish prop for language toggle
}

function Map({ isEnglish }: MapProps) {
  // Define the base Google Maps iframe URL with placeholders for the language
  const mapUrl = isEnglish
    ? "https://www.google.pl/maps/@/data=!3m1!4b1!4m3!11m2!2soDLaCnl1Qz2QaR-4HzZR-g!3e3?coh=245189&entry=tts&g_ep=EgoyMDI1MDQwMi4xKgksMTAyMTE0NTVIAVAD&skid=eb90c4a1-9daf-4c7a-bc5f-2ad2515e6ed1"
    : "https://www.google.pl/maps/@/data=!3m1!4b1!4m3!11m2!2soDLaCnl1Qz2QaR-4HzZR-g!3e3?coh=245189&entry=tts&g_ep=EgoyMDI1MDQwMi4xKgksMTAyMTE0NTVIAVAD&skid=eb90c4a1-9daf-4c7a-bc5f-2ad2515e6ed1";

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
