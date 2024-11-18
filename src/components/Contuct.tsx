import React from 'react';
import Map from './Map';

const Contuct: React.FC = () => {
  return (
    <div className="w-full h-[550px] flex mt-16"> {/* Mother div with flex */}
      
      {/* First child div: Contact Information */}
      <div className="relative flex-1 mx-auto lg:w-[900px] h-[500px] w-full overflow-hidden" id="contacts">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{ backgroundImage: "url('/doctor2.jpg')" }} // Replace with your image URL
        />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white p-4 bg-black bg-opacity-50 text-sm md:text-lg">
          <h3 className="text-xl font-bold">Working Hours</h3>
          <p>Mon-Fri: 9 AM - 5 PM</p>
          <p>Sat-Sun: Closed</p>
          <h3 className="text-xl font-bold mt-4">Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>

      {/* Second child div: Map */}
      <div className="flex-1 h-full">
        <Map /> {/* Your Map component */}
      </div>
      
    </div>
  );
};

export default Contuct;
