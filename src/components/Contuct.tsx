import React from "react";
import Map from "./Map"; // Import the Map component

interface ContactProps {
  isEnglish: boolean; // Prop to manage language
}

const Contact: React.FC<ContactProps> = ({ isEnglish }) => {
  // Language map for contact information
  const languageMap = {
    workingHours: {
      english: "Working Hours",
      georgian: "სამუშაო საათები",
    },
    mondayFriday: {
      english: "Monday to Friday: 10:00 AM - 6:00 PM",
      georgian: "ორშაბათი-პარასკევი: 10:00 - 18:00",
    },
    saturday: {
      english: "Saturday: 10:00 AM - 2:00 PM (Only in Kutaisi branch)",
      georgian: "შაბათი: 10:00 - 14:00 (მხოლოდ ქუთაისის ფილიალი)",
    },
    contact: {
      english: "Contact Us",
      georgian: "კონტაქტი",
    },
    email: {
      english: "Email: Adeishviliclinic@gmail.com",
      georgian: "Email: Adeishviliclinic@gmail.com",
    },
    phone: {
      english: "Phone: 514 74 43 43",
      georgian: "ტელეფონი: 514 74 43 43",
    },
  };

  return (
    <div className="w-full md:h-[550px] h-[600px] flex md:flex-row flex-col md:mt-16 mt-8">
      {/* Mother div with flex */}
      {/* First child div: Contact Information */}
      <div
        className="relative flex-1 mx-auto lg:w-[900px] h-[500px] w-full overflow-hidden"
        id="contacts"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/contactbg.png')" }} // Replace with your image URL
        />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white p-4 bg-black bg-opacity-50 text-sm md:text-lg">
          <h3 className="sm:text-[16px] text-[14px] font-bold font-arial">
            {isEnglish ? languageMap.workingHours.english : languageMap.workingHours.georgian}
          </h3>
          <p className="sm:text-[13px] text-[10px] font-arial">
            {isEnglish ? languageMap.mondayFriday.english : languageMap.mondayFriday.georgian}
          </p>
          <p className="sm:text-[13px] text-[10px] font-arial">
            {isEnglish ? languageMap.saturday.english : languageMap.saturday.georgian}
          </p>
          <h3 className="sm:text-[16px] text-[10px] font-bold mt-4 font-arial">
            {isEnglish ? languageMap.contact.english : languageMap.contact.georgian}
          </h3>
          <p className="sm:text-[13px] text-[10px] font-arial">
            {isEnglish ? languageMap.email.english : languageMap.email.georgian}
          </p>
          <p className="sm:text-[13px] text-[10px] font-arial">
            {isEnglish ? languageMap.phone.english : languageMap.phone.georgian}
          </p>
        </div>
      </div>

      {/* Second child div: Map */}
      <div className="flex-1 md:h-full">
        <Map isEnglish={isEnglish} /> {/* Pass the isEnglish prop here */}
      </div>
    </div>
  );
};

export default Contact;
